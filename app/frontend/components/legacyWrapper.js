import React, { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { contractConfig } from "../utils/constants";
import LegacyData from "./legacyData";

const legacyWrapper = (props) => {
    const { position } = props;
    const { address, isConnected } = useAccount();
    const [nftId, setNftId] = useState(0);

    // Check If any Beneficiaries
    const { data } = useContractRead({
        ...contractConfig,
        functionName: "legacies",
        args: [address, position],
    });

    useEffect(() => {
        // console.log(`Legacy[${position}]: ${data}`)
        setNftId(data);
    }, [data])

    return (
        <>
            {isConnected && address && nftId &&
                <LegacyData nftId={nftId} position={position} />
            }
        </>
    )
}

export default legacyWrapper;