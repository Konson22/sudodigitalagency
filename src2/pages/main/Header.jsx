import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { animateHeaderVariants, slogansData } from "../../assets/staticData";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      stopOnHover={true}
    >
      {slogansData.map((slogan, index) => (
        <HeaderCard slogan={slogan} key={index} />
      ))}
    </Carousel>
  );
}

function HeaderCard({ slogan }) {
  return (
    <div
      className={`md:h-[65vh] h-[40vh] flex items-center text-white px-[10%] py-20 social-media`}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/images/pexels-mateusz-dach-450035.jpg"
        })`,
        backgroundPosition: "center",
        backgroundSize: "100% 100%",
      }}
    >
      <motion.div
        className="md:w-[65%] text-left"
        variants={animateHeaderVariants}
        initial="initial"
        animate="animate"
      >
        <h2 className="md:text-5xl text-2xl">{slogan.title}</h2>
        <p className="md:text-2xl text-2xl">{slogan.text1}</p>
      </motion.div>
    </div>
  );
}
