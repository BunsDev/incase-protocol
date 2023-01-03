// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

string constant SVG_START = '<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500" font-family="-apple-system,BlinkMacSystemFont,'
"'Segoe UI','Helvetica Neue'"
',Arial,sans-serif"><rect x="0" y="0" width="100%" height="100%" fill="#eee" rx="10%" /><g id="text" fill="black" font-size="80" font-weight="500" text-anchor="middle"><text x="50%" y="40%" font-weight="700">INCASE</text><text x="50%" y="65%">LEGACY</text><text x="90%" y="90%" font-size="36" text-anchor="end">';
string constant SVG_ERC20 = "ERC20";
string constant SVG_ERC721 = "ERC721";
string constant SVG_ERC1155 = "ERC1155";
string constant SVG_END = "</text></g></svg>";

library TokenURIDescriptor {
    function getSVG(string memory tokenType)
        internal
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(SVG_START, tokenType, SVG_END));
    }

    function tokenURI(
        address testator,
        address token,
        address beneficiary,
        uint256 amount,
        uint256 tokenId,
        uint256 nftId,
        string memory _name,
        string memory _symbol
    ) internal pure returns (string memory) {
        string memory tokenType;
        string memory tokenTypeTraits;
        if (tokenId == 0) {
            // ERC20
            tokenType = SVG_ERC20;
            tokenTypeTraits = string(
                abi.encodePacked(
                    '"},{"trait_type":"Token Type","value":"',
                    SVG_ERC20,
                    '"},{"trait_type":"amount","value":"',
                    Strings.toString(amount)
                )
            );
        } else {
            if (amount == 0) {
                // ERC721
                tokenType = SVG_ERC721;
                tokenTypeTraits = string(
                    abi.encodePacked(
                        '"},{"trait_type":"Token Type","value":"',
                        SVG_ERC721,
                        '"},{"trait_type":"tokenId","value":"',
                        Strings.toString(tokenId)
                    )
                );
            } else {
                // ERC1155
                tokenType = SVG_ERC1155;
                tokenTypeTraits = string(
                    abi.encodePacked(
                        '"},{"trait_type":"Token Type","value":"',
                        SVG_ERC1155,
                        '"},{"trait_type":"tokenId","value":"',
                        Strings.toString(tokenId),
                        '"},{"trait_type":"amount","value":"',
                        Strings.toString(amount)
                    )
                );
            }
        }
        string memory o = string(
            abi.encodePacked(
                '{"name":"',
                _name,
                " #",
                Strings.toString(nftId),
                '","symbol":"',
                _symbol,
                '","description":"Expir3: Your on-chain will","image": "data:image/svg+xml;base64,',
                Base64.encode(bytes(getSVG(tokenType)))
            )
        );
        string memory output = string(
            abi.encodePacked(
                o,
                '","attributes":[{"trait_type":"testator","value":"',
                Strings.toHexString(uint256(uint160(testator)), 20),
                '"},{"trait_type":"beneficiary","value":"',
                Strings.toHexString(uint256(uint160(beneficiary)), 20),
                '"},{"trait_type":"token","value":"',
                Strings.toHexString(uint256(uint160(token)), 20),
                tokenTypeTraits,
                '"}]}'
            )
        );
        return
            string(
                abi.encodePacked(
                    "data:application/json;base64,",
                    Base64.encode(bytes(output))
                )
            );
    }
}
