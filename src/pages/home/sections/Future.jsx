import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import useOnScreen from "../../../hooks/useOnScreen";
import Particle from "../../../components/Particle";
import { line } from "./../../../config/particles";
import { lineAnim } from "../../../config/animation";

const Container = styled.section`
  background: rgb(145, 30, 194);
  background: linear-gradient(
    90deg,
    rgba(145, 30, 194, 1) 50%,
    rgba(69, 69, 217, 1) 100%
  );
  width: 100%;
  height: 60vh;
  padding: 0 8vw;
  display: flex;
  overflow: hidden;
  justify-content: center;

  @media screen and (max-width: 900px) {
    height: 40vh;
    padding: 0 3rem;
  }
  @media screen and (max-width: 900px) {
    height: 30rem;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 120rem;
  width: 100%;
  height: 100%;
  display: flex;
  .line {
    width: 100%;
    height: 2px;
    margin-top: 1rem;
    background-color: #fff;
    @media screen and (max-width: 900px) {
      margin-top: 0.5rem;
    }
  }
`;

const LeftBox = styled.div`
  flex: 1;
  padding: 5rem;
  padding-left: 0;
  #tsparticles-line {
    position: static;
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 900px) {
    padding-left: 6rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const RightBox = styled.div`
  flex: 1;
  position: relative;
  padding: 0 5vw 0 0;

  h2 {
    position: relative;
    z-index: 2;
    font-size: ${({ theme }) => theme.font.size.h2};
    color: #fff;
    line-height: calc(${({ theme }) => theme.font.size.h2} - 2rem);
  }
  p {
    position: relative;
    z-index: 2;
    font-size: ${({ theme }) => theme.font.size.normal};
    color: #f0ecf8;
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    padding: 0 6rem 0 5vw;
    img {
      width: 120%;
      height: 120%;
    }
    h2 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 0 3rem;
    h2 {
      font-size: 2.8rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const Desc = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const Future = () => {
  const { ref, controls } = useOnScreen();
  return (
    <Container>
      <Wrapper>
        <LeftBox>
          <Particle config={line} id="tsparticles-line" />
        </LeftBox>
        <RightBox>
          <Desc>
            <h2>
              <span>The Future</span>
            </h2>
            <motion.div
              variants={lineAnim}
              animate={controls}
              initial="hidden"
              ref={ref}
              className="line"
            ></motion.div>
            <p>
              To help you create a website that is easy to use, secure, and
              visually appealing and be able to be optimized for mobile devices
              and have features such as search engine optimization , social
              media integration, and e-commerce capabilities.
            </p>
          </Desc>
        </RightBox>
      </Wrapper>
    </Container>
  );
};

export default Future;
