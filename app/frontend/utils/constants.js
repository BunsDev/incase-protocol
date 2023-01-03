import contractStuff from "../contracts/contract.json";
import erc20abi from "../contracts/mockToken.json";

export const contractAbi = contractStuff.abi;
export const ercTokenAbi = erc20abi.abi;

//On Mumbai
// export const contractAddress = '0xe3d2683A12f341220d2826a617C53c6aA0182f2C';
// export const contractAddress = "0x86eE8B80544deF475A6C9aCb9aB14630a9580AD5";
// export const contractAddress = "0xb7e97B9baD51c45244aFA4f7E3dCcCcE6daDA5b2";
export const mockTokenAddress = '0xb2A6879Ebce0d76F7d4E29771a9b4035f165d74d';
export const ERC721MockAddress = '0x9AfFDF8A6b23f42d25EEFF5d79d2b3DEf5092D0E';
export const ERC1155MockAddress = '0xAB45D1cDDf5e32781071c94127c519510819B422';

//current
export const contractAddress = "0xEA5228D57Cf4B8D36BD347ddEA4f7aC95dd05449";

// On Mumbai
// const contractAddress_ = '0xD1c28DfB15175d3917C20b855EA90950cc3a6399';

// On XDC
// const contractAddress = '0x90c1410c7670221e7898dd2a2b5b18cde9ccdf819b35d110ad44938b4cc19e3d'

export const contractConfig = {
    address: contractAddress,
    abi: contractAbi,
    watch: true,
    chainId: 5
}

export const contractRecklessWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
    mode: "recklesslyUnprepared",
}

export const contractWriteConfig = {
    address: contractAddress,
    abi: contractAbi,
}

export const NFTABI =
    [
        {
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function",
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                },
                {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                }
            ],
            "name": "setApprovalForAll",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                }
            ],
            "name": "isApprovedForAll",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
    ]
