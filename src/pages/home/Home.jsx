import React, { useContext } from "react";

import {
  Hero,
  Services,
  OurWork,
  Future,
  Skills,
  Contact,
  About,
} from "./sections";
import ThemeContext from "../../Context/ThemeContext";
import OnScreenSection from "../../components/OnScreenSection";

const Home = () => {
  const { setHomeSection } = useContext(ThemeContext);

  const handleSection = (value) => {
    setHomeSection(value);
  };
  return (
    <>
      <OnScreenSection handler={() => handleSection("")}>
        <Hero />
      </OnScreenSection>
      <OnScreenSection handler={() => handleSection("services")}>
        <Services />
        <Future />
      </OnScreenSection>
      <OnScreenSection handler={() => handleSection("about")}>
        <About />
        <Skills />
      </OnScreenSection>
      <OnScreenSection handler={() => handleSection("work")} threshold={0.1}>
        <OurWork />
      </OnScreenSection>
      <OnScreenSection handler={() => handleSection("contact")} threshold={0.9}>
        <Contact />
      </OnScreenSection>
    </>
  );
};

export default Home;
