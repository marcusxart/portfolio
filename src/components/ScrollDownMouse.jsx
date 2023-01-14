import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "../Context/ThemeContext";

const Container = styled.div`
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
  margin: 20px 0;
  @media screen and (max-width: 900px) {
    height: 14vh;
  }

  @-webkit-keyframes mouse-wheel {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translateY(6px);
      -ms-transform: translateY(6px);
      transform: translateY(6px);
    }
  }
  @-moz-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @-o-keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }
  @keyframes mouse-wheel {
    0% {
      top: 1px;
    }
    25% {
      top: 2px;
    }
    50% {
      top: 3px;
    }
    75% {
      top: 2px;
    }
    100% {
      top: 1px;
    }
  }

  @-webkit-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-moz-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @-o-keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes mouse-scroll {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ArrowWrapper = styled.div`
  .m_scroll_arrows {
    display: block;
    width: 5px;
    height: 5px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
    border-right: 2px solid
      ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
    border-bottom: 2px solid
      ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
    margin: 0 0 3px 4px;

    width: 16px;
    height: 16px;
  }

  .unu {
    margin-top: 1px;
  }

  .unu,
  .doi,
  .trei {
    -webkit-animation: mouse-scroll 1s infinite;
    -moz-animation: mouse-scroll 1s infinite;
    animation: mouse-scroll 1s infinite;
  }

  .unu {
    -webkit-animation-delay: 0.1s;
    -moz-animation-delay: 0.1s;
    -webkit-animation-direction: alternate;

    animation-direction: alternate;
    animation-delay: alternate;
  }

  .doi {
    -webkit-animation-delay: 0.2s;
    -moz-animation-delay: 0.2s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.2s;
    animation-direction: alternate;

    margin-top: -6px;
  }

  .trei {
    -webkit-animation-delay: 0.3s;
    -moz-animation-delay: 0.3s;
    -webkit-animation-direction: alternate;

    animation-delay: 0.3s;
    animation-direction: alternate;

    margin-top: -6px;
  }
`;

const MouseWrapper = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  transform: none;
  border: 2px solid
    ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
  top: 170px;
  .wheel {
    height: 5px;
    width: 2px;
    display: block;
    margin: 5px auto;
    background: ${({ theme, isDark }) =>
      isDark ? theme.white : theme.primary};
    position: relative;

    height: 4px;
    width: 4px;
    border: 2px solid
      ${({ theme, isDark }) => (isDark ? theme.white : theme.primary)};
    -webkit-border-radius: 8px;
    border-radius: 8px;
  }

  .wheel {
    -webkit-animation: mouse-wheel 0.6s linear infinite;
    -moz-animation: mouse-wheel 0.6s linear infinite;
    animation: mouse-wheel 0.6s linear infinite;
  }
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const ScrollDownMouse = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Container>
      <MouseWrapper isDark={isDark}>
        <div className="wheel"></div>
      </MouseWrapper>
      <ArrowWrapper isDark={isDark}>
        <span className="m_scroll_arrows unu"></span>
        <span className="m_scroll_arrows doi"></span>
        <span className="m_scroll_arrows trei"></span>
      </ArrowWrapper>
    </Container>
  );
};

export default ScrollDownMouse;
