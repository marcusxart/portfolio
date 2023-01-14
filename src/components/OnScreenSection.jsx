import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const OnScreenSection = ({ children, handler, threshold = 0.3 }) => {
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (inView) {
      handler();
    }
  }, [inView]);
  return <div ref={ref}>{children}</div>;
};

export default OnScreenSection;
