import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  usePrepareContractWrite,
  useContractWrite,
  useContractRead,
  useSigner,
} from "wagmi";
import LegacyAddModal from "../../components/legacyAddModal";
import ResolveDomain from "../../components/resolveDomain";
import CheckIn from "../../components/checkIn";
import LegacyList from "../../components/legacyList";
import React, { useState, useEffect } from "react";

import {
  contractConfig,
  contractAddress,
  contractAbi,
} from "../../utils/constants";
import Footer from "../../components/footer";
import { Header } from "../../components/header";

const index = () => {
  const { address, isConnected } = useAccount();
  const { data: signerData } = useSigner();
  const [loading, setLoading] = useState(false);
  const [legacyCount, setLegacyCount] = useState(0);

  const { data: legacyCountData } = useContractRead({
    ...contractConfig,
    functionName: "legacyCount",
    args: [address],
  });

  useEffect(() => {
    console.log("LOGS");
    console.log("Legacy Count:", legacyCountData?.toString());

    console.log("___________");
  }, []);

  useEffect(() => {
    if (!legacyCountData) return;
    setLegacyCount(legacyCountData.toNumber());
  }, [legacyCountData]);

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div></div>
      <hr></hr>
      <main className="flex flex-col items-center justify-center grow mx-5">
        {isConnected ? (
          <>
            {address && legacyCount > 0 && <CheckIn />}

            <h2 className="text-3xl font-semibold self-start max-w-50">
              Register your beneficiary
            </h2>

            <p className="text-xl self-start mt-2 w-11/12 text-gray-400 border-b-2 border-gray-300 pb-3">
              Schedule automatic payouts to accounts of your choice as your will
              or as a fall back.
            </p>

            <div className="grid grid-cols-6 grid-row-flow gap-4 w-full mx-auto mt-5 ml-5 justify-items-center">
              <h3 className="font-semibold">Token</h3>
              <h3 className="font-semibold">Beneficiary</h3>
              <h3 className="font-semibold">Amount</h3>
              <h3 className="font-semibold">Token ID</h3>
              <h3 className="font-semibold">Type</h3>
              <h3 className="font-semibold">Delete</h3>
            </div>

            {isConnected && address && <LegacyList />}

            <div>
              <LegacyAddModal />
              <ResolveDomain />
            </div>
          </>
        ) : (
          <>
            <p>Please Connect Wallet</p>
          </>
        )}
      </main>
    </div>
  );
};

export default index;
