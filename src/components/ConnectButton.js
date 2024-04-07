import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { Link, useNavigate } from "react-router-dom";

export default function ConnectButton() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 right-4 bg-black h-20 z-30">
      <div className="flex flex-direction sticky justify-end pt-5 pb-5 pr-5 gap-3">
        <button
          onClick={() => navigate("client-forms")}
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6  text-white inline-block"
        >
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white ">
            <span>Forms</span>
          </div>
        </button>

        <button
          onClick={() => open()}
          className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-s font-semibold leading-6  text-white inline-block"
        >
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white ">
            <span>{isConnected ? "Connected" : "Connect Wallet"}</span>
          </div>
        </button>
      </div>
    </div>
  );
}
