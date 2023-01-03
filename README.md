# Incase

Set beneficiaries to the assets in your wallet.  ERC-20, ERC-115 or ERC-721 tokens will automatically transfer upon death or loss of keys.

Use it was a living will or as a backup for a lost private keys, trust that your assests are not lost forever in your wallet

 [Video Demo]() | 
 [Live Site](https://incase.vercel.app) | 

 | Mumbai | ------ Deployments ------ |
 | --------------------------------------------- | ------------------------------------------------------------------ |
 | [Contract Address](https://mumbai.polygonscan.com/address/0x86eE8B80544deF475A6C9aCb9aB14630a9580AD5) | 0x86eE8B80544deF475A6C9aCb9aB14630a9580AD5 |
 | [mockTokenAddress](https://mumbai.polygonscan.com/address/0xb2A6879Ebce0d76F7d4E29771a9b4035f165d74d#writeContract) | 0xb2A6879Ebce0d76F7d4E29771a9b4035f165d74d |
 | [ERC721MockAddress](https://mumbai.polygonscan.com/address/0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E#writeContract) | 0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E |
 | [ERC1155MockAddress](https://mumbai.polygonscan.com/address/0xd556f4297208909a11c4f3Ee0353C06211B0d040#writeContract) | 0xd556f4297208909a11c4f3Ee0353C06211B0d040 |
 | [Chainlink Automation](https://automation.chain.link/mumbai/83612179419742895942894754336124772009671274433691093920740323009965453050319) | Live Automation |


  | XDC | ------ Deployments ------ |
 | --------------------------------------------- | ------------------------------------------------------------------ |
 | [Contract Address](https://explorer.apothem.network/txs/0x90c1410c7670221e7898dd2a2b5b18cde9ccdf819b35d110ad44938b4cc19e3d) | 0x90c1410c7670221e7898dd2a2b5b18cde9ccdf819b35d110ad44938b4cc19e3d |
 | [mockTokenAddress](https://explorer.apothem.network/txs/0x51ac43c1604a27c45b84518a828ec33d63aa3883dd0a71da1643e66014885947#overview) | 0x51ac43c1604a27c45b84518a828ec33d63aa3883dd0a71da1643e66014885947 |
 | [ERC1155MockAddress](https://explorer.apothem.network/txs/0x818b185163c7edbde104c84ecbe02191dcb90d1d123ac3cbd5afe853cae9cbc1#overview) | 0x818b185163c7edbde104c84ecbe02191dcb90d1d123ac3cbd5afe853cae9cbc1 |
 | [Chainlink Automation](https://automation.chain.link/mumbai/83612179419742895942894754336124772009671274433691093920740323009965453050319) | Live Automation |


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
| [QuickNode](https://www.quicknode.com/) | The RPC provider used to deploy and connect our contract to the front end DAPP


## Details

Connect your wallet and "Add new beneficiary"
On the model pop up you will fill in the following

`Token Address` - (ERC20, ERC1155 or ERC721) That you want to send to the beneficiary.

`Beneficiary` - Set the address of where you want the above asset sent to.  Starts with 0x..

`Amount` - For ERC20 and ERC1155 tokens, set how many tokens.  For ERC721 set amount to 1

`Token ID`- For ERC20 tokens it is set to 0.  For ERC1155 and ERC721 tokens, token 1 and above specific to your NFT. 


Upon approving and submitting the beneficiary, you must `check in yearly` to keep the assets in current wallet or the Chainling Automation will execute the transaction

When you set the beneficiary, an NFT with the details is sent the wallet address letting them know about the details.  When the contract executes or the beneficiary is removed the NFT will be burned.

You can remove all beneficiaries with the `remove beneficiaries` button that will clear out beneficiaries and execution data.


## To Work on

Drop down options for existing tokens in wallet (Pull wallet assets)
Give a grace period before execution
Send a reminder to email/calendar when check in date is coming up

