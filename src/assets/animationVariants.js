

const transition = {
    duration: 0.5,
}
export const animateTop = {
    initial: {
      opacity: 0,
      y: 40,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition
    },
    exit: {
      opacity: 0,
      y: 40,
      transition
    },
};

export const animateLeft = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition
    },
    exit: {
      opacity: 0,
      x: -40,
      transition
    },
};

export const animateRight = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition
    },
    exit: {
      opacity: 0,
      x: 40,
      transition
    },
};

export const animateHeader = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition:{
            delay:0.5,
            duration: 0.5,
        },
    },
    exit: {
      opacity: 0,
      x: 40,
      transition
    },
};
