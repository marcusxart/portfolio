export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.2 } },
};

export const defaultSection = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
export const defaultSection2 = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export const titleAmin = {
  hidden: { y: 100 },
  show: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export const lineAnim = {
  hidden: { width: "1%", height: 2 },
  show: {
    width: "100%",
    height: 2,
    transition: { duration: 2 },
  },
};

export const fadeInLeft = {
  hidden: {
    x: -100,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  show: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
};

export const fadeInRight = {
  hidden: {
    x: 100,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
  show: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.5 } },
};
