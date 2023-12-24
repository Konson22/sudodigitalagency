import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { animateHeaderVariants, slogansData } from "../../assets/staticData";
import { motion } from "framer-motion";
import { HeadingText } from "../../util/HeadingText";

export default function Header() {
  return (
    <div className="">
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
      <div className="md:flex items-center md:px-[14%] px-4 md:pt-20 pt-10 md:pb-28 pb-14">
        <div className="md:w-[45%] md:text-5xl text-2xl">
          <HeadingText
            text="Welcome to Sudo Digital Agency"
            cName="md:text-left text-center text-greenbg"
          />
        </div>
        <div className="flex-1 md:text-left text-center">
          <p>
            We're not just in the business of providing digital solutions; we're
            in the business of helping you succeed in the digital world. Our
            passion for innovation, commitment to excellence, and client-centric
            approach set us apart as your trusted digital partner.
          </p>
        </div>
      </div>
    </div>
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
/*

Social Media Marketing:

""
"Connect. Engage. Succeed: Elevate Your Brand with Our Social Magic."
"Beyond Clicks, Into Connections: Transforming Audiences into Advocates."
Website Design:

"Designing Dreams, Building Brands: Your Website, Your Identity."
"Where Ideas Meet Interface: Crafting Digital Experiences That Captivate."
"Code Craftsmanship, Design Wizardry: Websites Tailored for Your Success."
Domain and Hosting Services:

"Domains that Define, Hosting that Delivers: Your Online Home, Perfected."
"Seamless Spaces, Effortless Hosting: Where Your Ideas Take Flight."
"Unleash Your Online Potential: Domains, Hosting, Excellence – All in One."
*/
