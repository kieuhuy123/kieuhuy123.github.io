import React from "react";
import HeroSection from "../../components/HeroSection";
import { homeObjOne } from "./Data";
import Pricing from "../../components/Pricing";
function Servies() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Servies;
