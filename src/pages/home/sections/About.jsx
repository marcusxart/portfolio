import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import useOnScreen from "../../../hooks/useOnScreen";
import { fadeInLeft, fadeInRight } from "../../../config/animation";
import { profile } from "../../../assets/img";

const Container = styled.section`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.gray};
  overflow-x: hidden;
  h2 {
    margin-top: 8vh;
    font-size: ${({ theme }) => theme.font.size.h2};
    text-align: center;
    font-size: 4.8rem;
  }

  @media screen and (max-width: 900px) {
    gap: 5rem;
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

const Wrapper = styled(motion.div)`
  display: flex;
  padding: 4vw 8vw;
  flex: 1;
  margin-bottom: 8vh;
  @media screen and (max-width: 900px) {
    gap: 7vh;
    padding: 4vw 6rem;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    padding: 4vw 3rem;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  .border {
    border: 2px solid ${({ theme }) => theme.textGradient};
    width: 30rem;
    height: 40rem;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    border-radius: 1rem;
    opacity: 0.6;
  }
  .border1 {
    transform: translate(-50%, -50%) rotateZ(12deg);
  }
  .border2 {
    transform: translate(-50%, -50%) rotateZ(25deg);
  }

  @media screen and (max-width: 600px) {
    .border {
      width: 20rem;
      height: 28rem;
    }
  }
`;

const Profile = styled.div`
  width: 30rem;
  height: 40rem;
  position: relative;
  z-index: 6;
  border-radius: 1rem;
  border: 2px solid ${({ theme }) => theme.textGradient};
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 5;
  }
  @media screen and (max-width: 600px) {
    width: 20rem;
    height: 28rem;
  }
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5vw 0 0;
  h3 {
    font-size: ${({ theme }) => theme.font.size.h2};
  }
  p {
    font-size: 2rem;
    opacity: 0.8;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    padding: 0;
    h3 {
      font-size: 2.2rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.6rem;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
`;

const About = () => {
  const { ref, controls } = useOnScreen(0.4, true);
  return (
    <Container id="about">
      <h2 className="text-gradient">About Me</h2>
      <Wrapper ref={ref} animate={controls} initial="hidden">
        <Hide>
          <Left variants={fadeInLeft}>
            <Profile>
              <div className="border border1"></div>
              <div className="border border2"></div>
              <img src={profile} alt="" />
            </Profile>
          </Left>
        </Hide>
        <Hide>
          <Right variants={fadeInRight}>
            <h3>I'm Chinonso Emerenwa</h3>
            <p>
              I am an experienced full-stack developer from Nigeria with over 3
              years of experience. I specialize in developing web applications
              using a variety of technologies, including HTML, CSS, JavaScript,
              Node.js and more. I'm also knowledgeable in front-end frameworks
              like React and framer-motion. My experience also includes working
              with database systems, such as MongoDB . I am also experienced in
              developing web services and APIs. I have a passion for creating
              innovative solutions that make a difference. I am always looking
              for new challenges and opportunities to further my skills.
            </p>
          </Right>
        </Hide>
      </Wrapper>
    </Container>
  );
};

export default About;

{
  /* <div>
About
<p>
  Hello, my name is [Name]. I'm an experienced full-stack developer with
  over [Number] years of experience. I specialize in developing web
  applications using a variety of technologies, including HTML, CSS,
  JavaScript, PHP, MySQL, and more. I'm also knowledgeable in front-end
  frameworks like React and Angular. My experience also includes working
  with database systems, such as MongoDB, and cloud platforms like AWS.
  I'm passionate about creating efficient and user-friendly applications
  and I'm always eager to learn new technologies.
</p>
<p>
  Hello, my name is [NAME]. I am an experienced full-stack developer from
  Nigeria with over 5 years of experience. I specialize in developing web
  applications and mobile applications using technologies like HTML, CSS,
  JavaScript, PHP, and MySQL. I am also experienced in developing web
  services and APIs. I have a passion for creating innovative solutions
  that make a difference. I am always looking for new challenges and
  opportunities to further my skills.
</p>
<p>
  what is the list of services a full-stack developer offer to a client
</p>
</div> */
}
