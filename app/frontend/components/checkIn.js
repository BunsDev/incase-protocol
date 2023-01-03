import React, { useEffect, useState } from "react";
import { useAccount, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { contractConfig, contractWriteConfig } from "../utils/constants";

const checkIn = () => {
  const [checkingIn, setCheckingIn] = useState(false)
  const [executionDay, setExecutionDay] = useState(0);

  const { isConnected, address } = useAccount();

  const { data: execDay } = useContractRead({
    ...contractConfig,
    functionName: "executionDay",
    args: [address],
  });

  const { config: checkInTask, error: checkInError, } = usePrepareContractWrite({
    ...contractWriteConfig,
    functionName: "checkIn",
    onError(error) {
      console.log("Error", error);
    },
  });

  const {
    data: checkInData,
    isCheckInDataLoading,
    write: checkIn, isError, isSuccess
  } = useContractWrite(checkInTask);

  const handleClick = () => {
    if (!isConnected || !address || checkIn == undefined) return;
    setCheckingIn(true);
    checkIn()
  }

  const dateLookup = (dayOfYear) => {
    const today = new Date();
    const diff = dayOfYear - Math.floor((today) / (24 * 60 * 60 * 1000)) % 365;
    if (diff < 0) diff += 365;
    today.setDate(today.getDate() + diff)
    return today
  }

  useEffect(() => {
    if (!isError && !isSuccess) return;
    setCheckingIn(false);
  }, [isError, isSuccess])

  useEffect(() => {
    if (!execDay) return;
    setExecutionDay(execDay.toNumber())
    // console.log(execDay.toNumber());
    // console.log(dateLookup(execDay.toNumber()));
  }, [execDay])

  return (
    <>
      <h2 className=" text-xl font-bold p-5">
        Day of will execution: {dateLookup(executionDay).toDateString()}
      </h2>
      <button
        onClick={handleClick}
        disabled={checkingIn}
        className="bg-purple-700 hover:bg-blue-700 disabled:bg-blue-400 text-white text-bold rounded-full px-12 py-2 sm:w-auto mt-2 mb-12"
      >
        Check In
      </button>
    </>
  );
};

export default checkIn;
