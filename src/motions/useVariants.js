const variantProps = {
  initial: "hidden",
  animate: "visible",
  hover: "hover",
  exit: "exit",
};

const landRVariant = (direction, delay) => {
  return {
    hidden: {
      x: direction,
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 2,
        delay: delay,
      },
    },
  };
};

const aboutBlockContainer = {
  hidden: {
    backgroundColor: "#fff",
  },

  visible: {
    backgroundColor: "rgb(245, 243, 241)",
    transition: {
      type: "tween",
      duration: 2,
      delay: 2,
    },
  },
};

const backDropVariant = (duration = 2, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        type: "tween",
        duration: 1,
        delay: delay,
      },
    },
  };
};

const itemHover = {
  hover: {
    scale: 1.03,
    transition: {
      type: "tween",
      yoyo: Infinity,
    },
  },
};

const subtleFlash = (duration = 2, delay) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };
};

const feedBackVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2,
      stiffness: 400,
      mass: 0.3,
      damping: 30,
    },
  },

  exit: {
    opacity: 0,
  },
};

const pageVariant = {
  hidden: {
    opacity: 0,
    // x: "100vw",
  },

  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },

  exit: {
    // x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut", duration: 1, type: "spring" },
  },
};

const tableRowVariant = {
  hidden: {
    height: 0,
    // x: "100vw",
  },

  visible: {
    height: "100%",
    // x: 0,
    transition: {
      type: "tween",
      duration: 1,
    },
  },

  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 2, type: "tween" },
  },
};

const dropVariant = {
  hidden: {
    height: "0px",
  },

  visible: {
    height: "120px",
    transition: {
      type: "tween",
      duration: 1,
    },
  },
  exit: { height: "0px", transition: { type: "tween", duration: 1 } },
};

const modalVariant = (duration = 2, delay = 0) => {
  return {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      background: "rgba(0, 0, 0, 0.7)",
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },

    exit: {
      opacity: 0,
      // scale:0,
      background: "rgba(0, 0, 0, 0)",
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};
// custom Hook to export the variants as needed
export const useVariants = () => {
  return {
    modalVariant,
    dropVariant,
    tableRowVariant,
    pageVariant,
    variantProps,
    itemHover,
    landRVariant,
    aboutBlockContainer,
    backDropVariant,
    subtleFlash,
    feedBackVariant,
  };
};
