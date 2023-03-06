// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";

import {TokenURIDescriptor} from "./TokenURIDescriptor.sol";

import "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";

/** @notice A struct to define legacy to bequeath (ERC20, ERC721 or ERC155)
 *  @dev if  `amount` && !`tokenId` -> ERC20
 *       if !`amount` &&  `tokenId` -> ERC721
 *       if  `amount` &&  `tokenId` -> ERC1155
 */
struct Legacy {
    address testator;
    address token;
    address beneficiary;
    uint256 amount;
    uint256 tokenId;
    // uint256 nftId;
}

// deathwish
// testam3nt
// Inh3rit

contract Incase is
    Ownable,
    ReentrancyGuard,
    ERC721,
    AutomationCompatibleInterface
{
    /** --- Contract State --- */
    using Counters for Counters.Counter;

    Counters.Counter public _tokenIdCounter;

    /** @dev Temp holder for IPFS style NFT (to be SVG) */
    //string private baseTokenUri;

    /** @dev From address to uint in 0-364 (day of will execution) */
    mapping(address => uint256) public executionDay;

    /** @dev From uint in 0-364 (day of will execution) to address list (to execute) */
    mapping(uint256 => address[]) public executionList;

    /** @dev List of Allowances for each of the tokensToInherit per user */
    mapping(address => uint256[]) public legacies;

    /** @dev Mapping of all the Legacies by nftId */
    mapping(uint256 => Legacy) public legacyNFTs;

    Legacy[] internal allNFTs;

    /** --- Events --- */

    /** @notice A testator registered some Legacy  */
    event AddLegacy(
        uint256 indexed timestamp,
        address indexed testator,
        address indexed token,
        address beneficiary,
        uint256 amount,
        uint256 tokenId,
        uint256 nftId
    );

    /** @notice A testator registered removed some Legacy  */
    event RemoveLegacy(
        uint256 indexed timestamp,
        address indexed testator,
        address indexed token,
        address beneficiary,
        uint256 amount,
        uint256 tokenId,
        uint256 nftId
    );

    /** @notice A testator moved its execution Day after check in (this also means it changed position in `executionList`) */
    event NewExecutionDay(
        uint256 indexed timestamp,
        address indexed testator,
        uint256 indexed executionDay
    );

    /** @notice A Legacy transfer failed */
    event LegacyTransferFailed(
        uint256 indexed timestamp,
        address indexed testator,
        address indexed beneficiary,
        address token,
        uint256 amount,
        uint256 tokenId,
        uint256 nftId
    );

    /** @notice A will has been carried out */
    event Executed(
        uint256 indexed timestamp,
        address indexed testator,
        uint256 indexed executionDay
    );

    /** @dev Settings up constructor to implement NFT token name */
    constructor() ERC721("Incase", "Inc") {
        // We start NFT IDs in 1
        _tokenIdCounter.increment();
    }

    /** --- Internal Functions --- */

    /** @dev Returns a 'day' (uint from 0 to 364) to map a timestamp to execution day */
    function getDay(uint256 timestamp) internal pure returns (uint256) {
        return ((timestamp / 1 days) % 365);
    }


    /** --- External  Functions --- */

    /** @notice Helper to see amount of legacies for user */
    function legacyCount(address testator) public view returns (uint256) {
        return legacies[testator].length;
    }

    /** @notice Get all legacyNFTs where the caller is the beneficiary
     * @return Array of all legacyNFTs where the caller is the beneficiary
     */
    function getBeneficiaryLegacies() public view returns (Legacy[] memory) {
        uint256 count = 0;
        for (uint256 i = 0; i < allNFTs.length; i++) {
            if (allNFTs[i].beneficiary == msg.sender) {
                count++;
            }
        }
        Legacy[] memory result = new Legacy[](count);
        uint256 index = 0;
        for (uint256 i = 0; i < allNFTs.length; i++) {
            if (allNFTs[i].beneficiary == msg.sender) {
                result[index] = allNFTs[i];
                index++;
            }
        }
        return result;
    }


    /** @notice Function for Testator to add Legacy */
    /** NFT Tokens with tokenID 0 will not work */
    // TODO: Add payment
    function addLegacy(
        address token,
        address beneficiary,
        uint256 amount,
        uint256 tokenId
    ) external {
        if (
            token == address(0) ||
            beneficiary == address(0) ||
            (amount == 0 && tokenId == 0)
        ) revert InvalidLegacy();

        // Mint the NFT to the beneficiary
        uint256 nftId = _tokenIdCounter.current();

        _safeMint(beneficiary, nftId);
        _tokenIdCounter.increment();

        // Check if we need to checkin for the first time (after adding legacy!)
        bool notRegistered = executionDay[msg.sender] == 0 &&
            legacies[msg.sender].length == 0;

        // Add Legacy to NFT mapping
        legacyNFTs[nftId] = Legacy(
            msg.sender,
            token,
            beneficiary,
            amount,
            tokenId //, nftId
        );

        //Add legacy to array of NFTs
        allNFTs.push(Legacy(
             msg.sender,
            token,
            beneficiary,
            amount,
            tokenId //, nftId
        ));

        // Add Legacy to testator list
        legacies[msg.sender].push(nftId);

        // add data to NFT
        emit AddLegacy(
            block.timestamp,
            msg.sender,
            token,
            beneficiary,
            amount,
            tokenId,
            nftId
        );

        // If not registered, checkin
        if (notRegistered) checkIn();
    }


   

    /** @notice Function for Testator to remove Legacy */
    // TODO: Add payment
    function removeLegacy(uint256 position) external {
        if (position >= legacies[msg.sender].length) revert InvalidLegacy();

        uint256 nftId = legacies[msg.sender][position];
        Legacy storage l = legacyNFTs[nftId];

        // Remove Legacy from list of Legacies for that testator
        if (position < legacies[msg.sender].length - 1)
            // It's not last element, we move last element to position
            legacies[msg.sender][position] = legacies[msg.sender][
                legacies[msg.sender].length - 1
            ];
        legacies[msg.sender].pop();

        // Burn NFT
        _burn(nftId);

        // Emit event
        emit RemoveLegacy(
            block.timestamp,
            msg.sender,
            l.token,
            l.beneficiary,
            l.amount,
            l.tokenId,
            nftId
        );

        // Clear storage for that Legacy
        delete legacyNFTs[nftId];
    }


    /** @notice Function for Testator to check in
     *  @dev Throws if `msg.sender` has no Legacy registered
     */
    function checkIn() public {
        if (legacies[msg.sender].length == 0) revert NoLegacyRegistered();

        uint256 prevCheckIn = executionDay[msg.sender];
        executionDay[msg.sender] = getDay(block.timestamp - 1 days);

        uint256 len = executionList[prevCheckIn].length;
        if (len > 0) {
            // Remove testator from previous checkIn's list
            if (executionList[prevCheckIn][len - 1] == msg.sender) {
                // Remove the last item for it is msg.sender
                executionList[prevCheckIn].pop();
            } else {
                // msg.sender is not the last item, so we search it and replace with the last item
                for (uint256 i = 0; i < len - 1; i++) {
                    if (executionList[prevCheckIn][i] == msg.sender) {
                        executionList[prevCheckIn][i] = executionList[
                            prevCheckIn
                        ][len - 1];
                        break;
                    }
                }
                executionList[prevCheckIn].pop();
            }
        }

        // Add testator to new checkIn's list
        executionList[executionDay[msg.sender]].push(msg.sender);

        // emit an event upon successful checkin
        emit NewExecutionDay(
            block.timestamp,
            msg.sender,
            executionDay[msg.sender]
        );
    }

    /** @notice Function to execute a Testator's will */
    function executeWill(address testator) internal {
        for (uint256 i = 0; i < legacies[testator].length; i++) {
            uint256 nftId = legacies[testator][i];
            Legacy storage legacy = legacyNFTs[nftId];
            bool transferred;
            if (legacy.tokenId == 0) {
                // ERC20
                transferred = IERC20(legacy.token).transferFrom(
                    testator,
                    legacy.beneficiary,
                    legacy.amount
                );
            } else if (legacy.amount == 0) {
                // ERC721
                try
                    IERC721(legacy.token).safeTransferFrom(
                        testator,
                        legacy.beneficiary,
                        legacy.tokenId
                    )
                {
                    transferred = true;
                } catch {}
            } else {
                // ERC1155
                try
                    IERC1155(legacy.token).safeTransferFrom(
                        testator,
                        legacy.beneficiary,
                        legacy.tokenId,
                        legacy.amount,
                        ""
                    )
                {
                    transferred = true;
                } catch {}
            }
            if (!transferred) {
                emit LegacyTransferFailed(
                    block.timestamp,
                    testator,
                    legacy.beneficiary,
                    legacy.token,
                    legacy.amount,
                    legacy.tokenId,
                    nftId
                );
            }
            // Burn the NFT of the beneficiary
            _burn(nftId);
            // Free storage used by Legacy
            delete legacyNFTs[nftId];
        }
        // Free storage used by testator's list of legacies
        delete legacies[testator];
    }

    /** @notice Function to execute a certain day's wills */
    function executeDay(uint256 day) internal nonReentrant {
        //external onlyOwner
        if (executionList[day].length == 0) return; // No wills to execute on this day
        for (uint256 i = 0; i < executionList[day].length; i++) {
            if (executionList[day][i] != address(0)) {
                executeWill(executionList[day][i]);
            }
        }
        delete executionList[day];
    }

    /** @notice Function to know if there are wills to execute in a day */
    function willsToExecuteInDay(uint256 day) public view returns (bool) {
        return executionList[day].length > 0;
    }

    /** -- Overrides for NFTs --  */

    /** @notice This makes the NFTs on-chain SVGs */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(_exists(tokenId), "Incase: Non-Existent Token ID");
        Legacy storage l = legacyNFTs[tokenId];
        return
            TokenURIDescriptor.tokenURI(
                l.testator,
                l.token,
                l.beneficiary,
                l.amount,
                l.tokenId,
                tokenId,
                name(),
                symbol()
            );
    }


    /** -- Keepers Logic -- */

    /** @notice Called by Chainlink Keepers to check if work needs to be done */
    function checkUpkeep(
        bytes calldata /*checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory tempData)
    {
        uint256 currentDay = getDay(block.timestamp - 1 days);
        upkeepNeeded = willsToExecuteInDay(currentDay);
        tempData = "";
    }

    /** @notice Perform the wil distribution of the day */
    function performUpkeep(bytes calldata) external override {
        //double check upkeep

        //convert to day
        uint256 presentDay = getDay(block.timestamp - 1 days);

        // In production remove the day to run in 1 year
        // presentDay = getDay(block.timestamp);

        //Verify logic is still true
        if (willsToExecuteInDay(presentDay)) {
            executeDay(presentDay);  
        }  
    }

    /** --- Errors --- */

    /** @dev Error for invalid Legacy (token && (amount or tokenId)) */
    error InvalidLegacy();

    /** @dev Error for Testator without Legacy */
    error NoLegacyRegistered();

    /** @dev Error for NFT Transfer Attemp */
    error NonTransferrableToken();

    
}