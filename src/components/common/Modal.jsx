import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie-player";

import { success, error } from "../../config/lottie";
import { Return } from "../../assets/svg";

const Container = styled.div``;

const Wrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: -8rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Box = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  gap: 1rem;
  border-radius: 1rem;
  height: 20rem;

  font-size: ${({ theme }) => theme.font.size.h3};
  svg {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    fill: ${({ theme }) => theme.color};
  }
  @media screen and (max-width: 600px) {
    font-size: ${({ theme }) => theme.font.size.normal};
  }
`;

const Modal = ({ res, close }) => {
  return (
    <Container>
      <Wrapper>
        <Icon>
          <Lottie
            loop={res.status === "error"}
            animationData={res.status === "error" ? error : success}
            play
            style={{ width: 150, height: 150 }}
          />
        </Icon>
        <Box>
          <p>{res.message}</p>
          <Return onClick={close} />
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Modal;
