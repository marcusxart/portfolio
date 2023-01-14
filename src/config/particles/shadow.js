const shadow = {
  background: {
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "contain",
  },
  fullScreen: {
    enable: false,
    zIndex: 1,
  },
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ffffff",
    },
    shadow: {
      enable: true,
      color: "#000000",
      blur: 5,
      offset: {
        x: 3,
        y: 3,
      },
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: false,
        speed: 10,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
      shadow: {
        enable: true,
        blur: 5,
        color: "#000000",
      },
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    events: {
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
        speed: 3,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  fpsLimit: 120,
  retina_detect: true,
};

export default shadow;