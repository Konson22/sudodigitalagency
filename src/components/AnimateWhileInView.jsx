/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimateWhileInView({ children }) {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isView = useInView(ref, { once: false });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControlls.start("visible");
    }
  }, [isView]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 1.5, delay: 0.25, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function WhileInView({ children }) {
  const textAnimate = {
    offscreen: {
      y: 100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
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
    >
      {children}
    </motion.div>
  );
}
