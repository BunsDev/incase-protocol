import { useEffect, useState } from "react";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { contractConfig, ercTokenAbi, NFTABI } from "../utils/constants";
import AddLegacy from "./addLegacy";

const approve = (props) => {
    const { tokenStandard, tokenAddress, beneficiary, amount,
        tokenId, allowance, setSubmitted, clearForm } = props;

    const [callWrite, setCallWrite] = useState(false);


    const {
        data,
        write,
    } = useContractWrite({
        mode: "recklesslyUnprepared",
        address: tokenAddress,
        abi: tokenStandard === "ERC20" ? ercTokenAbi : NFTABI,
        functionName: tokenStandard === "ERC20" ? "approve" : "setApprovalForAll",
        args: [contractConfig.address, tokenStandard === "ERC20" ? allowance : true],
    });

    const { status } = useWaitForTransaction({ hash: data?.hash, });

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

    useEffect(() => {
        console.log(`status: ${status}`);
        console.log(`props: ${JSON.stringify(props)}`);
    }, [status])


    return (
        <>
            {status === "idle" &&
                <h2 className=" text-xl font-bold p-5">
                    Preparing {tokenStandard} Approval Request...
                </h2>
            }
            {status === "loading" &&
                <h2 className=" text-xl font-bold p-5">
                    Waiting for {tokenStandard} Approval...
                </h2>
            }
            {status === "error" &&
                <>
                    <h2 className=" text-xl font-bold p-5">
                        {tokenStandard} Approval Failed
                    </h2>
                    <button
                        className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 border-none rounded-full"
                        onClick={() => { clearForm(); setSubmitted(false) }}
                    >
                        Reload
                    </button>
                </>
            }
            {status === "success" &&
                <AddLegacy
                    tokenStandard={tokenStandard}
                    tokenAddress={tokenAddress}
                    beneficiary={beneficiary}
                    amount={amount}
                    tokenId={tokenId}
                    setSubmitted={setSubmitted}
                    clearForm={clearForm}
                />
            }
        </>
    )
}

export default approve;