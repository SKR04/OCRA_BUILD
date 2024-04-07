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
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

function Home() {
  let abcstring = `X: 1
  T: Cooley's
  M: 4/4
  L: 1/8
  K: Emin
  |:D2|"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
  "Em"EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|"Em"DEFD E2:|
  |:gf|"Em"eB B2 efge|eB B2 gedB|"D"A2 FA DAFA|A2 FA defg|
  "Em"eB B2 eBgB|eB B2 defg|"D"afe^c dBAF|"Em"DEFD E2:|`;

  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  let [character, setCharacter] = useState("");
  let [mood, setMood] = useState("");
  const [notation, setNotation] = useState();
  const [artURL, setArtURL] = useState("");
  const [view, setView] = useState(0);

  let contract = null;
  let contractAddress = "0x64BF816c3b90861a489A8eDf3FEA277cE1Fa0E82";

  const createArt = async (character, mood) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let fee = await contract.estimateFee(50);
    let result = await contract.calculateAIResult(
      50,
      `A character with the following characteristics: ${character} and mood: ${mood}.`,
      { value: fee }
    );
    // console.log(result);
  };

  const getArt = async (character, mood) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let result = await contract.getAIResult(
      50,
      `A character with the following characteristics: ${character} and mood: ${mood}.`
    );
    // console.log(`https://ipfs.io/ipfs/${result}`);
    setArtURL(`https://ipfs.io/ipfs/${result}`);
  };

  //SONG
  const calculateAIResult = async (prompt) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let fee = await contract.estimateFee(11);
    let result = await contract.calculateAIResult(11, prompt, { value: fee });
    // console.log(result);
  };

  const getAIResult = async (prompt) => {
    let provider = new ethers.providers.Web3Provider(walletProvider);
    let signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);
    let result = await contract.getAIResult(11, prompt);
    // console.log(result);
    setNotation(result);
  };

  return (
    <div className="">
      <TitleCard />

      {/* <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <form className="p-5 flex flex-col justify-center items-center z-50">
          <label className="block mb-2 text-white font-bold">
            Character:
            <input
              type="text"
              value={character}
              onChange={(e) => setCharacter(e.target.value)}
              className="mt-1 ml-2 rounded-md bg-black border border-white py-2"
            />
          </label>
          <label className="mt-5 block text-white font-bold ml-8">
            Mood:
            <input
              type="text"
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="mt-1 ml-2 rounded-md bg-black border border-white py-2"
            />
          </label>
        </form>
        <button
          onClick={() => {
            if (isConnected) {
              if (mood && character) {
                calculateAIResult(prompt);
                createArt(character, mood);
              } else {
                alert("Please fill in the character and mood fields");
              }
            } else {
              alert("Please connect your wallet");
            }
          }}
          className="mt-5 ml-16 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
        >
          Create song and Art
        </button>
        <span className="z-50 mt-5 ml-16 mb-5">
          <p className="text-white font-light">
            (First Click Create song and Art and wait 30-40s before clicking
            below)
          </p>
        </span>
        <div className="z-50">
          <button
            onClick={() => {
              getAIResult(prompt);
              setView(1);
            }}
            className=" ml-16 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
          >
            Get Song
          </button>
          <button
            onClick={() => {
              getArt(character, mood);
              setView(2);
            }}
            className=" ml-16 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-600 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 z-50"
          >
            Get Art
          </button>
        </div>
      </div>

      <div className="mt-5 mb-10 z-50">
        {notation && <Midi notation={notation} />}
      </div>

      <div className="flex items-center justify-center">
        {view == 1 && notation && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <div className="flex bg-white justify-center items-center">
                <Notation notation={notation} />
              </div>
            </div>
          </BackgroundGradientAnimation>
        )}

        {view == 2 && artURL && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
              <div className="flex items-center justify-center">
                <img src={artURL} alt="" />
              </div>
            </div>
          </BackgroundGradientAnimation>
        )}
      </div> */}
    </div>
  );
}

export default Home;
