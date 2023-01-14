import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import useOnScreen from "../../../hooks/useOnScreen";
import {
  defaultSection,
  fadeInLeft,
  fadeInRight,
} from "../../../config/animation";
import { Button } from "../../../components/common";
import {
  swirge,
  swirgeWebp,
  afenWebp,
  afen,
  harmonic,
  harmonicWebp,
  nftngWebp,
  nftng,
  wildAnimalsWebp,
  wildAnimals,
} from "../../../assets/img";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.gray};
  padding: 8vh 0;
  h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
    text-align: center;
    font-size: 4.8rem;
  }

  @media screen and (max-width: 900px) {
    padding: 6vh 0;
    h2 {
      font-size: 3.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    h2 {
      font-size: 2.8rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 4rem 0;
    gap: 9rem;
  }
`;

const Content = styled(motion.div)`
  width: 100%;
  height: 70vh;
  display: flex;
  padding: 0 8vw;
  flex-direction: row;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 900px) {
    gap: 0rem;
    flex-direction: column;
    height: 50vh;
    padding: 0 3rem;
    img {
      position: static;
    }
  }
  @media screen and (max-width: 900px) {
    height: fit-content;
  }
`;

const ContentImage = styled(motion.div)`
  flex: 1;
  position: relative;

  @media screen and (max-width: 900px) {
    display: flex;
    padding: 0 3rem;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 600px) {
    flex: none;
    padding: 0;
  }
`;

const ContentDesc = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5vw;

  @media screen and (max-width: 900px) {
    align-items: flex-start;
    padding: 0;
    text-align: center;
    padding-top: 3rem;
    flex: none;
  }
  @media screen and (max-width: 600px) {
    padding-top: 1.5rem;
  }
`;

const ContentDescWrap = styled.div`
  width: 100%;

  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h3 {
    font-size: 3.8rem;
    line-height: 3.8rem;
  }
  p {
    font-size: 2.2rem;
    line-height: 3rem;
  }
  @media screen and (max-width: 900px) {
    align-items: center;
    padding: 0;
    a {
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 3.5rem;
      line-height: 3.5rem;
    }
    p {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 2.8rem;
      line-height: 2.8rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const ContentContainer = ({
  img,
  imgAlt = null,
  header,
  desc,
  live = true,
  link,
  webp,
}) => {
  const { ref, controls } = useOnScreen(0.5);

  return (
    <Hide>
      <Content
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={defaultSection}
      >
        <ContentImage variants={fadeInLeft}>
          <picture>
            <source srcSet={img} type="image/png" />
            {webp && <source srcSet={webp} type="image/webp" />}
            <img src={img} alt={imgAlt} />
          </picture>
        </ContentImage>
        <ContentDesc variants={fadeInRight}>
          <ContentDescWrap>
            <h3>{header}</h3>
            <p>{desc}</p>
            {live && (
              <a href={link} target="_blank">
                <Button title="Live Site" />
              </a>
            )}
          </ContentDescWrap>
        </ContentDesc>
      </Content>
    </Hide>
  );
};

const OurWork = () => {
  return (
    <Container id="work">
      <h2 className="text-gradient">My Work</h2>
      <Wrapper>
        <ContentContainer
          img={swirge}
          webp={swirgeWebp}
          imgAlt="Swrige website sample image."
          header="Swirge"
          live={false}
          desc="
                Swirge Platform is a decentralized social media, marketplace,
                and payment platform built on the blockchain."
        />
        <ContentContainer
          img={harmonic}
          webp={harmonicWebp}
          imgAlt="Harmonic Studioz website sample image."
          link="https://www.harmonicstudioz.com/"
          header="Harmonic Studioz"
          desc="Harmonic Studioz is a services based company that focus on graphic designs, motion graphics, branding, website and mobile app development as well as maintenance and Solidity and (WEB 3.0) BlockChain development."
        />
        <ContentContainer
          img={nftng}
          webp={nftngWebp}
          imgAlt="NFT NG website sample image."
          header="NFT NG"
          live={false}
          desc="NFT NG brings together digital creators, developers, thought leaders and other Web3 enthusiasts in the African Space and empowering them with opportunities to thrive on a global scale."
        />
        <ContentContainer
          img={wildAnimals}
          webp={wildAnimalsWebp}
          link="https://wildanimalsclub.com/"
          imgAlt="Wild Animals Club website sample image."
          header="Wild Animals Club"
          desc="Wild Animals Club is a private collection of unique digital collectibles NFT's, with Wild Animals being stored on the Aptos blockchain, they will be your friend for all your life.
          "
        />
        <ContentContainer
          img={afen}
          webp={afenWebp}
          imgAlt="Afen website sample image."
          link="https://afengroup.com/"
          header="Afen"
          desc="Afen is a Web3 infrastructure company dedicated to empowering Africas, with financial inclusion as the main driver."
        />
      </Wrapper>
    </Container>
  );
};

export default OurWork;

("Harmonic studioz is a services based company that focus on graphic designs, motion graphics, branding, website and mobile app development as well as maintenance, Solidity and (WEB 3.0) BlockChain development including Maintenance, Product Audit, Creation and strategies, with a host of Web Related Services");
