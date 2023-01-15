import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import ThemeContext from "../Context/ThemeContext";
import config from "../config/scroll";
import { defaultSection, titleAmin } from "../config/animation";

const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 4rem;
  right: 4vw;
  top: 50%;
  transform: translateY(-50%);
  display: block;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2.5rem;
  .active {
    background-color: transparent;
    width: 1.4rem;
    height: 1.4rem;
    transform: rotate(0);
    border: 0.2rem solid
      ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
  }
`;

const Square = styled(motion.div)`
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.white : theme.primary};
  transform: rotate(45deg);
  transition: all 0.3s;
`;

const Hide = styled.div`
  overflow: hidden;
  cursor: pointer;
`;

const SideNav = () => {
  const { homeSection, isDark } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper
        isDark={isDark}
        variants={defaultSection}
        animate="show"
        initial="hidden"
      >
        <Hide>
          <Link to="home" {...config}>
            <Square
              variants={titleAmin}
              className={homeSection === "" ? "active" : null}
              isDark={isDark}
            />
          </Link>
        </Hide>
        <Hide>
          <Link to="services" {...config}>
            <Square
              variants={titleAmin}
              className={homeSection === "services" ? "active" : null}
              isDark={isDark}
            />
          </Link>
        </Hide>
        <Hide>
          <Link to="about" {...config}>
            <Square
              variants={titleAmin}
              className={homeSection === "about" ? "active" : null}
              isDark={isDark}
            />
          </Link>
        </Hide>

        <Hide>
          <Link to="work" {...config}>
            <Square
              variants={titleAmin}
              className={homeSection === "work" ? "active" : null}
              isDark={isDark}
            />
          </Link>
        </Hide>
        <Hide>
          <Link to="contact" {...config} offset={0}>
            <Square
              variants={titleAmin}
              className={homeSection === "contact" ? "active" : null}
              isDark={isDark}
            />
          </Link>
        </Hide>
      </Wrapper>
    </Container>
  );
};

export default SideNav;
