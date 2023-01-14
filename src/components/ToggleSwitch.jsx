import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Switch = styled.div`
  width: 8rem;
  height: 4rem;
  background-color: ${({ theme, isOn }) =>
    isOn ? theme.white : theme.primary};
  display: flex;
  justify-content: ${({ isOn }) => (isOn ? "flex-end" : "flex-start")};
  align-items: center;
  border-radius: 3rem;
  cursor: pointer;
  padding: 0.5rem;
`;

const Handle = styled(motion.div)`
  width: calc(4rem - 0.5rem);
  height: calc(4rem - 0.5rem);
  border-radius: 50%;

  background-color: ${({ theme, isOn }) => (isOn ? theme.primary : theme.body)};
`;

const ToggleSwitch = ({ isOn, setIsOn }) => {
  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <Switch onClick={toggleSwitch} isOn={isOn}>
      <Handle layout transition={spring} isOn={isOn} />
    </Switch>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default ToggleSwitch;
