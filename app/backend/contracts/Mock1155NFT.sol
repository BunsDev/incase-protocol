// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract My1155 is ERC1155, Ownable {
    constructor() ERC1155("https://Mocktoken") {}

    function setURI(string memory newuri) public {
        _setURI(newuri);
    }

    function mint()
        public
        
    {
        _mint(msg.sender, 1, 1, "");
    }
}