import React from "react";
import { WavyBackground } from "./ui/wavy-background";

export function TitleCard() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        On Chain Risk Analyser
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Risk Analysis using the ORA Protocol
      </p>
    </WavyBackground>
  );
}
