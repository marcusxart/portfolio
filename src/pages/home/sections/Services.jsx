import React, { useContext } from "react";
import styled from "styled-components";

import ThemeContext from "../../../Context/ThemeContext";

import {
  webCode,
  mobileCode,
  stationery,
  socialMedia,
  rocket,
} from "../../../assets/img/index";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 8vh 8vw;
  background-color: ${({ theme }) => theme.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: ${({ theme }) => theme.font.size.h2};
    text-align: center;
    font-size: 4.8rem;
  }

  @media screen and (max-width: 900px) {
    min-height: 80vh;
    padding: 8vh 3rem 5vh;
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
  width: 100%;
  max-width: 120rem;
  justify-content: center;
  display: flex;
  @media screen and (max-width: 900px) {
    padding: 3rem 0;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  @media screen and (max-width: 900px) {
    gap: 2rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, isDark }) =>
    isDark ? theme.white : theme.body};
  width: 35rem;
  height: 21.5rem;
  border-radius: 1rem;
  padding: 3rem;
  @media screen and (max-width: 900px) {
    width: 30rem;
    padding: 2rem;
    height: 19.5rem;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 0;
    min-height: 16.5rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  img {
    width: 5rem;
    height: 5rem;
    opacity: 0.8;
  }
  h3 {
    font-size: ${({ theme }) => theme.font.size.h3};
    color: ${({ theme }) => theme.black};
    word-wrap: break-word;
    font-weight: 400;
    line-height: 2.8rem;
  }
  @media screen and (max-width: 900px) {
    h3 {
      font-size: 2.2rem;
    }
  }
`;

const CardDesc = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.colorLight};

  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
    line-height: 2rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
    line-height: 2rem;
  }
`;

const Services = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container id="services">
      <h2 className="text-gradient">What I Can Offer You</h2>
      <Wrapper>
        <Grid>
          <Card isDark={isDark}>
            <CardHeader isDark={isDark}>
              <img src={webCode} alt="" />
              <h3>
                Design <br />& development
              </h3>
            </CardHeader>
            <CardDesc>
              <p>
                Clean, visual design, and functionality of a new website or web
                application.
              </p>
            </CardDesc>
          </Card>
          <Card isDark={isDark}>
            <CardHeader isDark={isDark}>
              <img src={mobileCode} alt="" />
              <h3>Mobile Friendly</h3>
            </CardHeader>
            <CardDesc>
              <p>
                Having a responsive layout makes your website accessible to all
                users, regardless of their design.
              </p>
            </CardDesc>
          </Card>
          <Card isDark={isDark}>
            <CardHeader isDark={isDark}>
              <img src={socialMedia} alt="" />
              <h3>Wesite Audits</h3>
            </CardHeader>
            <CardDesc>
              <p>
                Looking to improve your page performance, SEO, or user
                experience? Request a free audit.
              </p>
            </CardDesc>
          </Card>
          <Card isDark={isDark}>
            <CardHeader isDark={isDark}>
              <img src={stationery} alt="" />
              <h3>Analyics</h3>
            </CardHeader>
            <CardDesc>
              <p>
                Get insights into who is browsing your site so that you can make
                smarter business decision.
              </p>
            </CardDesc>
          </Card>
          <Card isDark={isDark}>
            <CardHeader isDark={isDark}>
              <img src={rocket} alt="" />
              <h3>Performance</h3>
            </CardHeader>
            <CardDesc>
              <p>
                This includes making the website or web application run faster
                and more efficiently.
              </p>
            </CardDesc>
          </Card>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Services;
