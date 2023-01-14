import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { defaultSection2, fade } from "../../../config/animation";
import useOnScreen from "../../../hooks/useOnScreen";
import {
  Html,
  Css,
  Javascript,
  Sass,
  ReactSvg,
  Firebase,
  NodeSvg,
  MongoDb,
  Express,
  Framer,
  Git,
  Github,
  Responsive,
  Accessible,
  Restful,
} from "../../../assets/svg";

const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 8vh 8vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    text-align: center;
    font-size: 4.8rem;
  }

  @media screen and (max-width: 900px) {
    padding: 6vh 3rem;
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
  padding: 4rem 0;
  max-width: 120rem;
  width: 100%;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  justify-items: center;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Content = styled(motion.div)`
  text-align: center;
  svg {
    width: 9rem;
    height: 9rem;
    fill: ${({ theme }) => theme.color};
    transition: fill 0.2s ease-in;

    &:hover {
      fill: ${({ theme }) => theme.textGradient};
    }
  }
  p {
    text-transform: uppercase;
    font-size: 1.8rem;
  }

  @media screen and (max-width: 600px) {
    svg {
      width: 7rem;
      height: 7rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const Skills = () => {
  const { ref, controls } = useOnScreen(0.2, true);

  return (
    <Container>
      <h2 className="text-gradient">Skills</h2>
      <Wrapper>
        <Grid
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={defaultSection2}
        >
          <Content variants={fade}>
            <Html />
            <p>html5</p>
          </Content>
          <Content variants={fade}>
            <Css />
            <p>css</p>
          </Content>
          <Content variants={fade}>
            <Javascript />
            <p>Javascript + Es6</p>
          </Content>
          <Content variants={fade}>
            <Sass />
            <p>sass</p>
          </Content>
          <Content variants={fade}>
            <ReactSvg />
            <p>React</p>
          </Content>
          <Content variants={fade}>
            <Firebase />
            <p>Firebase</p>
          </Content>
          <Content variants={fade}>
            <NodeSvg />
            <p>Node</p>
          </Content>
          <Content variants={fade}>
            <Express />
            <p>Express</p>
          </Content>
          <Content variants={fade}>
            <MongoDb />
            <p>Mongo DB</p>
          </Content>
          <Content variants={fade}>
            <Framer />
            <p>Framer Motion</p>
          </Content>
          <Content variants={fade}>
            <Git />
            <p>Git</p>
          </Content>
          <Content variants={fade}>
            <Github />
            <p>Github</p>
          </Content>
          <Content variants={fade}>
            <Restful />
            <p>Restful Api</p>
          </Content>
          <Content variants={fade}>
            <Responsive />
            <p>Responsive Design</p>
          </Content>
          <Content variants={fade}>
            <Accessible />
            <p>Accessible</p>
          </Content>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Skills;
