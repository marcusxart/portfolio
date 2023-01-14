import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  padding: 0 8vw;
  height: 14vh;
`;

const Wrapper = styled.div``;

const Links = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2rem;

  li {
    font-size: 1.8rem;
    opacity: 0.8;
    color: ${({ theme }) => theme.color};
    transition: color 0.3s;
    a {
      color: inherit;
      text-decoration: none;
    }
    &:hover {
      color: ${({ theme }) => theme.textGradient};
    }
  }
  @media screen and (max-width: 600px) {
    li {
      font-size: 1.6rem;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <li>
            <a
              href="https://www.linkedin.com/in/chinonso-emerenwa-111b4a23a/"
              target="_blank"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:cemeji64@gmail.com" target="_blank">
              Email
            </a>
          </li>
          <li>
            <a href="https://github.com/marcusxart" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://wa.me/message/7FCE33SKTCRNK1" target="_blank">
              Whatsapp
            </a>
          </li>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Footer;
