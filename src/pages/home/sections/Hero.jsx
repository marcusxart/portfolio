import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import ThemeContext from "../../../Context/ThemeContext";
import { Button } from "../../../components/common";
import ScrollDownMouse from "../../../components/ScrollDownMouse";
import { titleAmin, defaultSection, fade } from "../../../config/animation";
import { Wave } from "../../../assets/svg";
import config from "../../../config/scroll";

const Container = styled(motion.section)`
  height: 100vh;
  overflow: hidden;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding-bottom: 20vh;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 120rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color};
  position: relative;
  padding: 0 7vw;
  @media screen and (max-width: 900px) {
    padding: 0 3rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
`;

const Desc = styled.div`
  position: relative;
  z-index: 5;
  text-align: center;
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.font.size.h1};
    font-family: ${({ theme }) => theme.font.family.saira};
    line-height: ${({ theme }) => theme.font.size.h1};
  }
  p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.font.size.h2};
    line-height: ${({ theme }) => theme.font.size.h2};
  }
  .sub-text {
    font-size: calc(${({ theme }) => theme.font.size.h2} - 1rem);
  }
  span {
    color: ${({ theme }) => theme.primary};
    font-family: ${({ theme }) => theme.font.family.saira};
  }

  @media screen and (max-width: 900px) {
    gap: 1rem;
    h1 {
      font-size: 4.5rem;
      line-height: 4.5rem;
    }

    p {
      font-size: 3.5rem;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 0.5rem;
    h1 {
      font-size: 3rem;
      line-height: 3rem;
    }

    p {
      font-size: 2.5rem;
    }
  }
`;

const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 3;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const WaveBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -50vh;
  overflow: hidden;
  svg {
    fill: ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    svg {
      transform: scale(2.5) translateX(-150px);
    }
  }

  @media screen and (max-width: 600px) {
    svg {
      transform: scale(4) translateX(-100px);
    }
  }
`;

const Opacity = styled(motion.div)``;

const Hero = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container
      variants={defaultSection}
      animate="show"
      initial="hidden"
      id="home"
    >
      <Wrapper>
        <Desc>
          <Hide>
            <motion.p variants={titleAmin}>Hello,</motion.p>
          </Hide>
          <Hide>
            <motion.h1 variants={titleAmin} className="text-gradient">
              I'm <span>Chinonso Emerenwa.</span>
            </motion.h1>
          </Hide>
          <Hide>
            <motion.p variants={titleAmin}>Full-stack web developer.</motion.p>
          </Hide>
          <Opacity variants={fade}>
            <Link to="contact" {...config} offset={0}>
              <Button title="Let's chat." />
            </Link>
          </Opacity>
        </Desc>
      </Wrapper>
      <Footer>
        <ScrollDownMouse />
      </Footer>
      <WaveBox isDark={isDark}>
        <Wave />
      </WaveBox>
    </Container>
  );
};

export default Hero;
