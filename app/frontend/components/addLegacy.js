import { useEffect, useState } from "react";
import { useContractWrite, useWaitForTransaction } from "wagmi";
import { contractRecklessWriteConfig } from "../utils/constants";

const addLegacy = (props) => {

    const { tokenStandard, tokenAddress, beneficiary, amount,
        tokenId, allowance, setSubmitted, clearForm } = props;

    const [callWrite, setCallWrite] = useState(false);


    const {
        data,
        write,
        status,
    } = useContractWrite({
        ...contractRecklessWriteConfig,
        functionName: "addLegacy",
        args: [tokenAddress, beneficiary, amount, tokenId],
    });

    const { data: receipt, isSuccess } = useWaitForTransaction({ hash: data?.hash, });

    useEffect(() => {
        if (status === "error") console.log(`AddLegacy Failed!`);
        if (status === "success") console.log(`AddLegacy Success!`);
    }, [status])

    useEffect(() => {
        if (tokenAddress && beneficiary && (amount || tokenId) && !callWrite) {
            setCallWrite(true);
        }
    }, [])

    useEffect(() => {
        if (callWrite) {
            write();
        }
    }, [callWrite])

    return (
        <>
            {isSuccess ? (
                <>
                    <h2 className="text-xl font-bold p-5">
                        Legacy successfully created!
                    </h2>
                    {/* <a href={`https://goerli.etherscan.io/tx/${receipt?.transactionHash}`}> */}
                    <a href={`https://mumbai.polygonscan.com/tx/${receipt?.transactionHash}`}>
                        <button
                            className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full">
                            {/* View Txn on Etherscan */}
                            View Txn on Polygonscan
                        </button>
                    </a>
                    <button
                        className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
                        onClick={() => { clearForm(); setSubmitted(false) }}
                    >
                        Close
                    </button>
                </>
            ) : (
                status === "error" ? (
                    <>
                        <h2 className=" text-xl font-bold p-5">
                            Add legacy failed or rejected.
                        </h2>
                        <button
                            className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
                            onClick={() => { clearForm(); setSubmitted(false) }}
                        >
                            Close
                        </button>
                    </>
                ) : (
                    <h2 className=" text-xl font-bold p-5">
                        Creating legacy...
                    </h2>
                )
            )}
        </>
    )
}

export default addLegacy;