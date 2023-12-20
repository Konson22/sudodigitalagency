import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Header() {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      stopOnHover={true}
    >
      {slogans.map((slogan, index) => (
        <motion.div
          key={index}
          className={`curve md:h-[70vh] h-[40vh] flex items-center px-[10%] social-media ${slogan.bg} text-white`}
        >
          <div className="md:w-[70%] w-full text-left">
            <h2 className="md:text-5xl text-2xl">{slogan.text}</h2>
          </div>
        </motion.div>
      ))}
    </Carousel>
  );
}

const slogans = [
  {
    text: "Seamless Spaces, Effortless Hosting: Where Your Ideas Take Flight.",
    bg: "social-media1",
  },
  {
    text: "Ignite Your Presence, Spark Conversations: Your Social Success Story Starts Here!",
    bg: "social-media2",
  },
  {
    text: "Designing Dreams, Building Brands: Your Website, Your Identity.",
    bg: "social-media3",
  },
  {
    text: "Domains that Define, Hosting that Delivers: Your Online Home, Perfected.",
    bg: "social-media4",
  },
];
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
