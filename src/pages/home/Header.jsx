import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import { servicesInfo } from "../../assets/data";
import { animateHeader } from "../../assets/animationVariants";

export default function Header() {
  return (
    <div className="header-container bg-darkbg text-white">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        stopOnHover={true}
      >
        {servicesInfo.map((slogan, index) => (
          <HeaderCard slogan={slogan} key={index} />
        ))}
      </Carousel>
    </div>
  );
}

function HeaderCard({ slogan }) {
  const headerText = (cName) => {
    return (
      <div className={`md:flex-1 ${cName} md:text-left text-center`}>
        <h2 className="md:text-5xl text-2xl text-greenbg">{slogan.title}</h2>
        <p className="md:text-2xl text-2xl line-clamp-2">{slogan.slogan}</p>
        <button className="border border-greenbg text-greenbg px-5 py-2 rounded mt-5 ml-auto">
          get started
        </button>
      </div>
    );
  };
  return (
    <motion.div
      className="md:h-[70vh] h-[45vh] flex md:flex-row flex-col md:items-center justify-evenly px-[8%] md:py-0 py-16"
      variants={animateHeader}
      initial="initial"
      animate="animate"
    >
      {headerText("md:block hidden")}
      <div className="md:h-[70%] md:w-[45%] md:px-0 px-10 mt-5">
        <img src={slogan.image} alt="" />
      </div>
      {headerText("md:hidden block text-center pb-5")}
    </motion.div>
  );
}
