/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimateInView({ children, cName }) {
  const textAnimate = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      initial={"offscreen"}
      whileInView={"onscreen"}
      variants={textAnimate}
      viewport={{ once: true, amount: 0.3 }}
      className={cName}
    >
      {children}
    </motion.div>
  );
}

export function AnimateWhileInViewLeft({ children, cName }) {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isView = useInView(ref, { once: false });
  const mainControlls = useAnimation();

  const variants = {
    initial: {
      opacity: 0,

      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (isView) {
      mainControlls.start("animate");
    }
  }, [isView]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={mainControlls}
      ref={ref}
      className={cName}
    >
      {children}
    </motion.div>
  );
}
export function AnimateWhileInViewRight({ children, cName }) {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isView = useInView(ref, { once: false });
  const mainControlls = useAnimation();

  const variants = {
    initial: {
      opacity: 0,
      x: 40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      x: 40,
      transition: {
        delay: 0.8,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (isView) {
      mainControlls.start("animate");
    }
  }, [isView]);

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={mainControlls}
      ref={ref}
      className={cName}
    >
      {children}
    </motion.div>
  );
}
