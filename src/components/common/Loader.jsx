import React, { useContext } from "react";
import { MutatingDots as LoaderAnim } from "react-loader-spinner";
import styled from "styled-components";

import ThemeContext from "../../Context/ThemeContext";

const Container = styled.div`
  position: absolute;
  z-index: 60;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Loader = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <Container>
      <Wrapper>
        <LoaderAnim
          height="100"
          width="100"
          color={isDark ? "#ffffffde" : "#941fc6db"}
          secondaryColor={isDark ? "#ffffffde" : "#941fc6db "}
          radius="12.5"
          ariaLabel="mutating-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </Wrapper>
    </Container>
  );
};

export default Loader;
