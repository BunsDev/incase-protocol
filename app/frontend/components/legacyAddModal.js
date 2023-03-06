import React, { useState } from "react";
import { ethers } from "ethers";
import CheckAllowanceAndAddLegacy from './checkAllowanceAndAddLegacy';

// import { useAccount, useContractRead, useContractWrite, useWaitForTransaction } from "wagmi";
// //contract location
// import {
//   contractConfig,
//   contractRecklessWriteConfig,
//   ercTokenAbi,
//   NFTABI,
// } from "../utils/constants";
// import { useRouter } from "next/router";

// const contractAddress = '0x767a79d21Fd9eC7222379340d77c63FE758f4433';
// const mockTokenAddress = '0xB7DfFdb405688508e5Ddc593eBAaE64b25a9BB0C';
// export const ERC721MockAddress = '0x316Cd70a2Bbf381A9b0fa326a76E5E6411bAa454';
// export const ERC1155MockAddress = '0xb9f1208fE950eD6b8Ed9202BFA694eaf934eaC64';

const legacyAddModal = () => {
  // const { address: testatorAddress } = useAccount();

  const [showModal, setShowModal] = useState(false);

  const [tokenAddress, setTokenAddress] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenId, setTokenId] = useState(0);
  const [tokenStandard, setTokenStandard] = useState("ERC20");

  const [validAmount, setValidAmount] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleAmountChange = async (e) => {
    switch (tokenStandard) {
      case "ERC20":
        try {
          setAmount(ethers.utils.parseEther(e?.target.value).toString());
          setValidAmount(true);
        } catch (err) {
          setValidAmount(false)
          console.log(err);
        }
        break;
      case "ERC721":
        setAmount("0");
        break;
      default:
        setAmount(e?.target.value);
    }
  }

  const handleTokenIdChange = async (e) => {
    if (tokenStandard == "ERC20") {
      setTokenId(0);
    } else {
      setTokenId(e?.target.value);
    }
  }

  const handleSubmit = async () => {
    setSubmitted(true);
  }

  const clearForm = () => {
    setTokenAddress("");
    setBeneficiary("");
    setAmount("0");
    setTokenId(0);
    setTokenAddress("ERC20");
  };

  const show = () => {
    setShowModal(true);
  };

  const hide = () => {
    setShowModal(false);
  };


  return (
    <>
      <button
        className="text-2xl font-semibold bg-black text-white py-3 px-16 self-start mx-5 mt-12 border-none rounded-full"
        onClick={show}
      >
        Add new beneficiary
      </button>
      {showModal && (
        <div className="fixed top-0 left-0 bottom-0 right-0 bg-black/[0.5] flex justify-center text-center z-1">
          <div className="bg-white pt-2 pb-8 px-10 rounded-3xl h-fit text-black self-center">
            <h2 className="text-xl font-bold p-5">Add new beneficiary</h2>
            <p className="text-gray-400 mb-1 text-sm text-left pl-3">Token type</p>
            <div className="mb-2 flex flex-col">
              <select
                onChange={(e) => { setTokenStandard(e.target.value) }}
                className="select border border-gray-400 rounded-xl w-full px-3 py-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
              >
                <option value="ERC20">FTM Token</option>
                <option value="ERC721">FTM NFTs</option>
                <option value="ERC1155">ERC1155(FTM)</option>
              </select>
            </div>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="token"
                className="label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 cursor-text text-sm self-start"
              >
                Token Address
              </label>
              <input
                className="input border border-gray-400 appearance-none rounded-xl w-full px-3 py-2 focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                id="token"
                type="text"
                autoFocus
                onChange={(e) => setTokenAddress(e.target.value)}
              />
            </div>
            <div className="mb-2 flex flex-col">
              <label
                htmlFor="beneficiary"
                className="label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 cursor-text text-sm self-start"
              >
                Beneficiary
              </label>
              <input
                className="input border border-gray-400 appearance-none rounded-xl w-full px-3 py-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                id="beneficiary"
                type="text"
                onChange={(e) => setBeneficiary(e.target.value)}
              />
            </div>
            <div className={tokenStandard !== "ERC721" ? "mb-2 flex flex-col" : "hidden"}>
              <label
                htmlFor="amount"
                className={validAmount ? "label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 cursor-text text-sm self-start"
                  : "label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-red-400 cursor-text text-sm self-start"}
              >
                {validAmount ? "Amount" : "Invalid Amount"}
              </label>
              <input
                className={validAmount ? "input border border-gray-400 appearance-none rounded-xl w-full px-3 py-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                  : "input border text-red-500 border-red-500 appearance-none rounded-xl w-full px-3 py-2 focus focus:border-red-500 focus:outline-none active:outline-none active:border-red-500"}
                id="amount"
                type="text"
                onChange={(e) => handleAmountChange(e)}
                disabled={tokenStandard == "ERC721"}
                placeholder="1 token by default for ERC721"
              />
            </div>
            <div className={tokenStandard !== "ERC20" ? "mb-2 flex flex-col" : "hidden"}>
              <label
                htmlFor="tokenId"
                className="label mb-0 -mt-2 pt-4 pl-3 leading-tighter text-gray-400 cursor-text text-sm self-start"
              >
                Token ID
              </label>
              <input
                className="input border border-gray-400 appearance-none rounded-xl w-full px-3 py-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                id="tokenId"
                type="text"
                onChange={(e) => handleTokenIdChange(e)}
                disabled={tokenStandard == "ERC20"}
                placeholder="0 by default for ERC20"
              />
            </div>
            {/* <p className="text-red-400 mb-6 text-xs">Disabled inputs are highlighted in red.</p> */}
            <button
              className="text-lg font-semibold bg-black text-white py-3 px-8 self-start mx-3 mt-4 border-none rounded-full disabled:bg-gray-800 disabled:text-gray-100"
              onClick={() => handleSubmit()}
              disabled={submitted}
            >
              Submit
            </button>
            <button
              className="text-lg font-semibold bg-gray-200 py-3 px-8 self-start mx-3 mt-4 border-none rounded-full disabled:bg-gray-400 disabled:text-gray-800"
              onClick={hide}
              disabled={submitted}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {submitted &&
        
        <CheckAllowanceAndAddLegacy
          tokenStandard={tokenStandard}
          tokenAddress={tokenAddress}
          beneficiary={beneficiary}
          amount={amount}
          tokenId={tokenId}
          hideParentModal={hide}
          clearForm={clearForm}
          setSubmitted={setSubmitted}
        />
      }

    </>
  );
};

export default legacyAddModal;
