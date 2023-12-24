import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { animateHeaderVariants } from "../../assets/staticData";
import { motion } from "framer-motion";
import { slogansInfo } from "../../assets/data";

export default function Header() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      stopOnHover={true}
    >
      {slogansInfo.map((slogan, index) => (
        <HeaderCard slogan={slogan} key={index} />
      ))}
    </Carousel>
  );
}

function HeaderCard({ slogan }) {
  return (
    <motion.div
      className="md:py-20 bg-darkbg text-white px-[10%] flex items-center text-left"
      variants={animateHeaderVariants}
      initial="initial"
      animate="animate"
    >
      <div className="flex-1 md:block flex flex-col justify-center md:static absolute inset-0 md:px-0 px-8">
        <h2 className="md:text-5xl text-2xl">{slogan.title}</h2>
        <p className="md:text-2xl text-2xl">{slogan.text1}</p>
      </div>
      <div className="md:h-[60vh] h-[35vh] flex-1">
        <img src={slogan.image} alt="" />
      </div>
    </motion.div>
  );
}
