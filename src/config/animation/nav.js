const nav = {
  scroll: {
    height: "10vh",
    transition: {
      height: { duration: 0.5 },
      default: { ease: "easeIn" },
    },
  },
  scrollMobile: {
    height: "8vh",
    transition: {
      height: { duration: 0.5 },
      default: { ease: "easeIn" },
    },
  },
  notScroll: {
    height: "14vh",
    transition: {
      height: { duration: 0.5 },
      default: { ease: "easeIn" },
    },
  },
  notScrollMobile: {
    height: "10vh",
    transition: {
      height: { duration: 0.5 },
      default: { ease: "easeIn" },
    },
  },
};
const navToggle = {
  toggle: {
    display: "flex",
    transition: {
      default: { ease: "easeIn" },
    },
  },
  notToggle: {
    display: "none",
    transition: {
      default: { ease: "easeIn" },
    },
  },
  default: {
    display: "flex",
  },
};

export { nav, navToggle };
