import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background-color: ${({ theme }) => theme.primary};
  border: none;
  padding: 1.2rem 3.5rem;
  border-radius: 5rem;
  cursor: pointer;
  width: fit-content;
  transition: background-color 0.3s ease;
  box-shadow: 2px 8px 31px -10px ${({ theme }) => theme.textGradient};
  -webkit-box-shadow: 2px 8px 31px -10px ${({ theme }) => theme.textGradient};
  -moz-box-shadow: 2px 8px 31px -10px ${({ theme }) => theme.textGradient};
  &:hover {
    background-color: ${({ theme }) => theme.textGradient};
  }

  @media screen and (max-width: 900px) {
    padding: 1rem 3rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0.8rem 2.5rem;
  }
`;

const Wrapper = styled.div`
  span {
    color: #fff !important;
    font-size: 2rem;
  }

  @media screen and (max-width: 900px) {
    span {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    span {
      font-size: 1.6rem;
    }
  }
`;

const Button = ({ title, onClick = null, alt, fullWidth = false, type }) => {
  return (
    <Container onClick={onClick} alt={alt} fullWidth={fullWidth} type={type}>
      <Wrapper>
        <span>{title}</span>
      </Wrapper>
    </Container>
  );
};

export default Button;
