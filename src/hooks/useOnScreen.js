import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const useOnScreen = (threshold = 0.4, startOnly = false) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold,
  });

  useEffect(() => {
    if (startOnly) {
      if (inView) {
        controls.start("show");
      }
    }
    if (!startOnly) {
      if (inView) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }
  }, [inView]);
  return { ref, controls, inView };
};

export default useOnScreen;
