import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function RevealInView({ children, cName, variants }) {
  const ref = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isView = useInView(ref, { amount: 0.4 });
  const mainControlls = useAnimation();

  useEffect(() => {
    if (isView) {
      mainControlls.start("animate");
    }
  }, [isView, mainControlls]);

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
