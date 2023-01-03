import React, { useEffect, useState } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { contractConfig, contractRecklessWriteConfig } from "../utils/constants";
import { ethers } from "ethers";

const legacyData = (props) => {
    const { nftId, position } = props;
    const { address, isConnected } = useAccount();
    const [legacy, setLegacy] = useState({});
    const [tokenType, setTokenType] = useState('');

    // Check If any Beneficiaries
    const { data } = useContractRead({
        ...contractConfig,
        functionName: "legacyNFTs",
        args: [nftId],
    });

    const {
        data: removeLegacyData,
        write: removeLegacy,
        isLoading: isRemoveLoading,
        isSuccess: isRemoveStarted,
        error: removeLegacyError,
    } = useContractWrite({
        ...contractRecklessWriteConfig,
        functionName: "removeLegacy",
        args: [
            position,
        ],
    });

    useEffect(() => {
        // console.log(`LegacyNFTs[${nftId}]: ${data?.toString()}`)
        setLegacy(data);
        const amount = data?.amount?.toString();
        const tokenId = data?.tokenId?.toNumber();
        if (tokenId == 0) setTokenType('ERC20')
        else {
            if (amount == 0) setTokenType('ERC721')
            else setTokenType('ERC1155')
        }
    }, [data])

    return (
        <>
            {data &&
                <div className="grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5">
                    <h3 className="truncate">{legacy?.token?.toString()}</h3>
                    <h3 className="truncate">{legacy?.beneficiary?.toString()}</h3>
                    {tokenType == 'ERC20' ?
                        <h3 className="justify-self-center truncate">{ethers.utils.formatEther(legacy?.amount).toString()}</h3>
                        :
                        <h3 className="justify-self-center">{legacy?.amount?.toString()}</h3>
                    }
                    <h3 className="justify-self-center">{legacy?.tokenId?.toString()}</h3>
                    <h3 className="justify-self-center">{tokenType}</h3>
                    <button className="justify-self-center text-white bg-black hover:bg-red-500 text-bold rounded-full px-6 sm:w-auto"
                        onClick={() => removeLegacy()}>
                        X
                    </button>
                    {isRemoveLoading &&
                        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/[0.5] flex justify-center text-center z-1">
                            <div className="bg-white pt-2 pb-8 px-10 rounded-3xl h-fit text-black self-center">
                                <h2 className=" text-xl font-bold p-5">Removing Legacy...</h2>
                            </div>
                        </div>
                    }
                </div>
            }
        </>
    )
}

export default legacyData;