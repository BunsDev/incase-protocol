# Incase

Set beneficiaries to the assets in your wallet.  FTM tokens, ERC-115 or FTM NFTs will automatically transfer upon death or loss of keys.

Use it was a living will or as a backup for a lost private keys, trust that your assests are not lost forever in your wallet

Successfully verified contract Incase on ftmscan.
https://testnet.ftmscan.com/address/0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD#code

 [Video Demo](https://youtu.be/78IzqqqIo4o) | 
 [Live Site](https://incase.vercel.app) | 

 | Fantom_test | ------ Deployments ------ |
 | --------------------------------------------- | ------------------------------------------------------------------ |
 | [Contract Address](https://testnet.ftmscan.com/address/0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD#code) | 0xD9C42b0Ed3E2D5142fcf4E53364997ee8908FCeD |
 | [mockTokenAddress](https://testnet.ftmscan.com/address/0xF49705A7362d63178aC0b960d480C59076311dD5#code) | 0xF49705A7362d63178aC0b960d480C59076311dD5 |


## Technologies

This project is built with the following open source libraries, frameworks and languages. User choice of framework used, available in plain js or typescript.
| Tech | Description |
| --------------------------------------------- | ------------------------------------------------------------------ |
| ------ | ------ React Frontend Environment ------ |
| [Next JS](https://nextjs.org/) | React Framework |
| ------ | ------ CSS Framework ------ |
| [Tailwind](https://tailwindcss.com/) | A utility-first CSS framework |
| ------ | ------ Ethereum Development Environment ------ |
| [Hardhat](https://hardhat.org/) | Ethereum development environment for professionals |
| ------ | ------ Included Libraries ------ |
| [WAGMI](https://wagmi.sh/) | A set of React Hooks for Web3 |
| [RainbowKit](https://www.rainbowkit.com/docs/introduction) | RainbowKit is a React library that makes it easy to add wallet connection to your dapp. |
| [ChainlinkAutomation](https://automation.chain.link/) | Automatic Execution service for your smart contracts


## Details

Connect your wallet and "Add new beneficiary"
On the model pop up you will fill in the following

`Token Address` - (token, ERC1155(FTM Version) or FTM NFTs) That you want to send to the beneficiary.

`Beneficiary` - Set the address of where you want the above asset sent to.  Starts with 0x..

`Amount` - For FTM tokens, set how many tokens.  For ERC721(FTM) set amount to 1

`Token ID`- For tokens it is set to 0.  For ERC1155 and ERC721 tokens, token 1 and above specific to your NFT. 


Upon approving and submitting the beneficiary, you must `check in yearly` to keep the assets in current wallet or the Chainling Automation will execute the transaction

When you set the beneficiary, an NFT with the details is sent the wallet address letting them know about the details.  When the contract executes or the beneficiary is removed the NFT will be burned.

You can remove all beneficiaries with the `remove beneficiaries` button that will clear out beneficiaries and execution data.


## To Work on

Drop down options for existing tokens in wallet (Pull wallet assets)
Give a grace period before execution
Send a reminder to email/calendar when check in date is coming up

