import React from "react";
import HeroSection from "../../components/HeroSection";
import Pricing from "../../components/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
