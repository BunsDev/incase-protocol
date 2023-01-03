//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MockToken is ERC20 {
  constructor() ERC20("FakeDaiToken", "DAI") {
    _mint(msg.sender, 100000000 * 10 ** decimals());
  }

  function mint() external {
    _mint(msg.sender, 1000 * 10 ** decimals());
  }

}