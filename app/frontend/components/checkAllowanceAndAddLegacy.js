import { BigNumber } from "ethers";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
import { contractAbi, contractAddress, contractRecklessWriteConfig, ercTokenAbi, NFTABI } from "../utils/constants";
import Approve from './approve';
import AddLegacy from "./addLegacy";

const checkAllowanceAndAddLegacy = (props) => {
    const { tokenStandard, tokenAddress, beneficiary, amount,
        tokenId, hideParentModal, clearForm, setSubmitted } = props;

    const [allowance, setAllowance] = useState("0");
    const [isApproved, setIsApproved] = useState(false);
    const [askApproval, setAskApproval] = useState(false);

    const { address: testatorAddress } = useAccount();


    const { data, isError, isSuccess, isLoading, status } = useContractRead({
        address: tokenAddress,
        abi: tokenStandard === "ERC20" ? ercTokenAbi : NFTABI,
        functionName: tokenStandard === "ERC20" ? "allowance" : "isApprovedForAll",
        watch: true,
        args: [testatorAddress, contractAddress],
    })

    useEffect(() => {
        if (status === "error") {
            console.log("Error checking allowance/approvals");
            setAskApproval(true);
            return;
        }
        if (status === "success") {
            if (tokenStandard === "ERC20") {
                const bigAmount = BigNumber.from(amount);
                const bigAllowance = data;
                setAllowance(bigAmount.add(bigAllowance).toString());
            }
            else {
                console.log(`check data: ${JSON.stringify(data)}`);
                setIsApproved(data);
            }
            setAskApproval(true);
        }
    }, [status])

    useEffect(() => {
        // clearForm();
        hideParentModal();
    }, [isLoading])

    return (
      <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/[0.5] flex justify-center text-center z-1">
        <div className="bg-white pt-2 pb-8 px-10 rounded-3xl h-fit text-black self-center">
          {isLoading && (
            <h2 className=" text-xl font-bold p-5">
              Checking {tokenStandard === "ERC20" ? "Allowance" : "Approvals"}
            </h2>
          )}
          {askApproval && !isApproved && (
            <Approve
              tokenStandard={tokenStandard}
              tokenAddress={tokenAddress}
              beneficiary={beneficiary}
              amount={amount}
              tokenId={tokenId}
              allowance={allowance}
              setSubmitted={setSubmitted}
              clearForm={clearForm}
            />
          )}
          {askApproval && isApproved && (
            <AddLegacy
              tokenStandard={tokenStandard}
              tokenAddress={tokenAddress}
              beneficiary={beneficiary}
              amount={amount}
              tokenId={tokenId}
              setSubmitted={setSubmitted}
              clearForm={clearForm}
            />
          )}
        </div>
      </div>
    );
}

export default checkAllowanceAndAddLegacy;