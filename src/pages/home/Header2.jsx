import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimatePresence, motion } from "framer-motion";
import { servicesInfo } from "../../assets/data";
import { useContextApi } from "../../context-manager/ContextProvider";
import { FiArrowRight } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Header2() {
  const [currentSlogan, setCurrentSlogan] = useState(servicesInfo[0]);

  useEffect(() => {
    let count = 0;
    setInterval(() => {
      if (count < servicesInfo.length) {
        count++;
      } else {
        count = 0;
      }
      setCurrentSlogan(servicesInfo[count > 0 ? count - 1 : count]);
      // console.log(count);
    }, 4000);
  }, [currentSlogan]);

  return (
    <div className="header-container bg-darkbg text-white circle overflow-x-hidden">
      <HeaderCard slogan={currentSlogan} key={currentSlogan.path} />
    </div>
  );
}

function HeaderCard({ slogan }) {
  const { toggleModal } = useContextApi();
  const animateHeaderText = {
    initial: {
      opacity: 0,
      x: 80,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      x: -80,
      transition: {
        duration: 0.5,
      },
    },
  };

  const animateHeader = {
    initial: {
      opacity: 0,
      x: 80,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: -80,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const headerText = (cName) => {
    return (
      <AnimatePresence mode="wait" initial={true}>
        <motion.div
          variants={animateHeaderText}
          initial="initial"
          animate="animate"
          exit="exit"
          className={`md:flex-1 ${cName} md:text-left text-center`}
        >
          <h2 className="md:text-5xl text-2xl text-greenbg">{slogan.title}</h2>
          <p className="md:text-2xl text-2xl line-clamp-2">{slogan.slogan}</p>
          <button
            className="border border-greenbg text-greenbg md:text-xl flex items-center px-5 py-2 rounded mt-5 md:mx-0 mx-auto"
            onClick={toggleModal}
          >
            get started
            <FiArrowRight className="ml-2" />
          </button>
        </motion.div>
      </AnimatePresence>
    );
  };
  return (
    <div className="md:h-[70vh] h-[45vh] flex md:flex-row flex-col md:items-center justify-evenly px-[8%] md:py-0 py-16">
      {headerText("md:block hidden")}
      <motion.div
        variants={animateHeader}
        initial="initial"
        animate="animate"
        exit="exit"
        className="md:h-[70%] md:w-[45%] md:px-0 px-10 mt-5"
      >
        <img src={slogan.image} alt="" />
      </motion.div>
      {headerText("md:hidden block text-center pb-5")}
    </div>
  );
}
