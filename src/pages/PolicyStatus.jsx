import React from "react";
import { useFormContext } from "../context/FormContext";
import { generateReqProm, defaultPrompt } from "../constants/reqPrompt";
import { BigNumber, ethers } from "ethers";
import { useState } from "react";
import { Notation, Midi } from "react-abc";
import ConnectButton from "../components/ConnectButton";
import { abi, nftAbi, prompt } from "../constants/abis";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers5/react";
import { TitleCard } from "../components/TitleCard";
import { Boxes } from "../components/ui/background-boxes";

let promptNew = "";
const PolicyStatus = () => {
  const { formData, setFormData } = useFormContext();
  const [notation, setNotation] = useState();
  const [view, setView] = useState(0);

  let contract = null;
  let contractAddress = "0x64BF816c3b90861a489A8eDf3FEA277cE1Fa0E82";
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const calculateAIResult = async (prompt) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let fee = await contract.estimateFee(11);
    let result = await contract.calculateAIResult(11, prompt, { value: fee });
    console.log(result);
  };

  const getAIResult = async (prompt) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let result = await contract.getAIResult(11, prompt);
    console.log(result);
    setNotation(result);
  };

  const isFormDataEmpty = (formData) => {
    for (let key in formData) {
      if (!formData[key]) {
        return true;
      }
    }
    return false;
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        onClick={() => {
          if (isConnected) {
            console.log(promptNew);
            console.log(formData);
            console.log(isFormDataEmpty(formData));
            if (!isFormDataEmpty(formData)) {
              promptNew = generateReqProm(formData);
            } else {
              promptNew = defaultPrompt;
            }
            console.log(promptNew);

            calculateAIResult(promptNew);
          } else {
            alert("Please connect your wallet");
          }
        }}
        className="mt-5 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
      >
        Generate Report
      </button>
      <span className="z-50 mt-5 mb-5">
        <p className="text-white font-light">
          (Click Generate Report and wait 30-40s)
        </p>
      </span>

      <button
        onClick={() => {
          if (!isFormDataEmpty(formData)) {
            promptNew = generateReqProm(formData);
          } else {
            promptNew = defaultPrompt;
          }
          console.log(formData);
          getAIResult(promptNew);
          setView(1);
        }}
        className=" inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
      >
        Get Report
      </button>
      {notation && (
        <div className="mt-10 w-[600px] md p-6 bg-white border rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Report</h2>
          <p className="text-lg">{notation}</p>
        </div>
      )}
    </div>
  );
};

export default PolicyStatus;
