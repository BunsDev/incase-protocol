import React, { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { contractConfig } from "../utils/constants";
import LegacyWrapper from "./legacyWrapper";

const legacyList = () => {
    const { address, isConnected } = useAccount();
    const [legacies, setLegacies] = useState([]);

    // Check If any Beneficiaries
    const { data } = useContractRead({
        ...contractConfig,
        functionName: "legacyCount",
        args: [address],
    });

    useEffect(() => {
        if (!data) {
            // console.log(`LegacyCount: Nothing yet`)
            return;
        }

        // console.log(`LegacyCount: ${data.toString()}`)
        setLegacies(Array.from(Array(data.toNumber()).keys()));
    }, [data])

    // useEffect(() => {
    //     console.log(`Legacies: ${JSON.stringify(legacies)}`)
    // }, [legacies])

    return (
        <>
            {legacies.length > 0 &&
                legacies.map((v, i) => <LegacyWrapper position={v} id={i} key={i} />)
            }
        </>
    )
}

export default legacyList;