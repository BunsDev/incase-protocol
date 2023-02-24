require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "../../.env" });

require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");

const defaultNetwork = "hardhat";

NEXT_PUBLIC_ALCHEMY_ID = "fp2SHb9VlSZ7d3H7B0cBL78PvdZk6ky0";
PRIVATE_KEY = "abbdc088f548b48e1aa3a8e19d1684b7f02799635932d47f4ade309096585c46";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork,

  networks: {
    goerli: {
      chainId: 5,
      // url: `https://eth-goerli.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
      url: `https://eth-goerli.g.alchemy.com/v2/fp2SHb9VlSZ7d3H7B0cBL78PvdZk6ky0`,
      accounts: [PRIVATE_KEY],
    },

    mumbai: {
      chainId: 80001,
      url: `https://warmhearted-burned-bird.matic-testnet.discover.quiknode.pro/82ca9558bba3ae4e43d164e72acbeda5fb7901c6`,
      // url: `https://dimensional-patient-arrow.matic-testnet.discover.quiknode.pro/b0d1a3580a1576c880015164cf6cb5ded2496f25/`,
      // url: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
      accounts: [PRIVATE_KEY],
    },

    hyperspace: {
      chainId: 3141,
      url: "https://filecoin-hyperspace.chainstacklabs.com/rpc/v1",
      accounts: [PRIVATE_KEY],
    },

    fantom: {
      url: `https://rpc.ankr.com/fantom_testnet`,
      chainId: 4002,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    tokenOwner: 1,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
