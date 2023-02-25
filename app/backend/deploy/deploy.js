const hre = require("hardhat");

async function main() {

 /* 
 WETH 0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6
 DAI  0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844
 USDT 0xe583769738b6dd4E7CAF8451050d1948BE717679
 USDC 0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C
*/
  

  const Web3 = await hre.ethers.getContractFactory("MockToken");
  const web3 = await Web3.deploy();

  await web3.deployed();

  console.log("MockToken is deployed to:", web3.address);
  const receipt = await web3.deployTransaction.wait();
  console.log("gasUsed:" , receipt.gasUsed);

  
  // const Template = await hre.ethers.getContractFactory("My1155");
  // const contract = await Template.deploy();

  // await contract.deployed();

  // console.log("My1155 Contract deployed to:", contract.address);
  // const receipt2 = await contract.deployTransaction.wait();
  // console.log("gasUsed:" , receipt2.gasUsed);

  // const Web3 = await hre.ethers.getContractFactory("MockNFT");
  // const web3 = await Web3.deploy();

  // await web3.deployed();

  // console.log("Template Contract deployed to:", web3.address);
  // const receipt = await web3.deployTransaction.wait();
  // console.log("gasUsed:" , receipt.gasUsed);
 


  const Template = await hre.ethers.getContractFactory("Incase");
  const contract = await Template.deploy();

  await contract.deployed();

  console.log("Incase Contract deployed to:", contract.address);
  const receipt2 = await contract.deployTransaction.wait();
  console.log("gasUsed:" , receipt2.gasUsed);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
