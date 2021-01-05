import React, { useState, useEffect } from "react";
import { HeroSection, HeroText, HeroContent } from "./Hero.elements";

const Hero = ({ galleryData }) => {
  // BACKGROUND IS DEFAULT INDEX FOR IMAGE
  const [background, setBackground] = useState(0);
  // GENERATE IN INTERVALS INDEX FOR BACKGROUND
  useEffect(() => {
    const interval = setInterval(() => {
      setBackground(Math.floor(Math.random() * 10));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <HeroSection image={galleryData[background].image2} />
      <HeroContent>
        <HeroText>Amay Sweets</HeroText>
      </HeroContent>
    </>
  );
};

export default Hero;
