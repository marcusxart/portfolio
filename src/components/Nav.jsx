import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Twirl as Hamburger } from "hamburger-react";
import { Link } from "react-scroll";

import useOnScrollPosition from "../hooks/useOnScrollPosition";
import config from "../config/scroll";
import useScreenSize from "../hooks/useScreenSize";
import ToggleSwitch from "./ToggleSwitch";
import { navToggle } from "../config/animation/nav";
import ThemeContext from "../Context/ThemeContext";

const Container = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.body};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  font-size: ${({ theme }) => theme.font.size.normal};
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 900px) {
    height: ${({ toggle }) => (toggle ? "100vh" : "fit-content")};
  }
`;

const BoxWrapper = styled.div`
  width: 100%;
  padding: 0 8vw;
  height: 12vh;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 0 6rem;
    height: 10vh;
  }
  @media screen and (max-width: 600px) {
    padding: 0 3rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 120rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.color};
`;

const Logo = styled.div`
  cursor: pointer;
  p,
  a {
    font-family: ${({ theme }) => theme.font.family.saira};
    font-weight: 600;
    span,
    a {
      font-family: ${({ theme }) => theme.font.family.lobster};
      font-size: 2.5rem;
      color: ${({ theme }) => theme.primary};
      @media screen and (max-width: 900px) {
        font-size: 2.2rem;
      }
    }
  }
`;

const NavLink = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  height: 100%;
  font-weight: 400;
  gap: 0.5rem;

  li {
    height: 4rem;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 1rem;
    overflow: hidden;
    transition-property: transform, opacity;
    transition: 0.1s ease;

    span,
    a {
      font-family: 600;
      cursor: pointer;
      color: ${({ theme }) => theme.color};
      transition: color 0.3s;
    }
  }
  .active {
    span,
    a {
      color: ${({ theme }) => theme.primary};
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: fit-content;
    font-weight: 600;
    gap: 1rem;
    font-size: 2.5rem;
  }
  @media screen and (min-width: 900px) {
    li {
      &:hover {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }
`;

const Burger = styled.div`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Right = styled(motion.div)`
  display: flex;
  gap: 3rem;
  @media screen and (max-width: 900px) {
    display: none;
    gap: 4rem;
    position: absolute;
    top: 14vh;
    left: 0;
    right: 0;
    bottom: 14vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Nav = () => {
  const { isDark, setIsDark, homeSection } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const scrollPosition = Math.floor(useOnScrollPosition());
  const { width } = useScreenSize();

  useEffect(() => {
    if (width > 900) {
      setToggle(false);
    }
  }, [width]);

  return (
    <Container>
      <Box toggle={toggle}>
        <BoxWrapper scrollPosition={scrollPosition}>
          <Wrapper>
            <Logo>
              <Link to="home" {...config}>
                <span
                  className="text-gradient"
                  onClick={() => setToggle(false)}
                >
                  Chinonso
                </span>
                .
              </Link>
            </Logo>
            <Burger>
              <Hamburger
                direction="left"
                size={22}
                toggled={toggle}
                toggle={setToggle}
              />
            </Burger>
            <Right
              variants={navToggle}
              animate={
                width > 900 ? "default" : toggle ? "toggle" : "notToggle"
              }
            >
              <NavLink>
                <li className={homeSection === "services" ? "active" : null}>
                  <Link to="services" {...config}>
                    <span onClick={() => setToggle(false)}>Services</span>
                  </Link>
                </li>
                <li className={homeSection === "about" ? "active" : null}>
                  <Link to="about" {...config}>
                    <span onClick={() => setToggle(false)}>About</span>
                  </Link>
                </li>

                <li className={homeSection === "work" ? "active" : null}>
                  <Link to="work" {...config}>
                    <span onClick={() => setToggle(false)}>My Works</span>
                  </Link>
                </li>
                <li className={homeSection === "contact" ? "active" : null}>
                  <Link to="contact" {...config} offset={0}>
                    <span onClick={() => setToggle(false)}>Contact</span>
                  </Link>
                </li>
              </NavLink>
              <ToggleSwitch isOn={isDark} setIsOn={setIsDark} />
            </Right>
          </Wrapper>
        </BoxWrapper>
      </Box>
    </Container>
  );
};

export default Nav;
