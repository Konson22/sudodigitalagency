import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";

export default function OurTeam() {
  return (
    <div className="py-16">
      <div className="md:flex md:px-[5%]">
        <h3 className="md:text-5xl text-3xl md:w-[40%]">Meet Our Team</h3>
        <p className="flex-1">
          Behind every successful project is a team of dedicated professionals.
          Get to know the faces behind [Your Company Name], each contributing
          their unique skills and perspectives to our collective success.
        </p>
      </div>
      <div className="md:grid grid-cols-3 gap-5 mt-8">
        {data.map((user) => (
          <UserCard user={user} key={user.name} />
        ))}
      </div>
    </div>
  );
}

function UserCard({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const animateLeft = {
    initial: {
      opacity: 0,
      x: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
  };
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      className="relative bg-white md:p-0 p-4 md:mb-0 mb-6"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <img className="md:h-[300px] h-[250px]" src={user.image} alt="" />
      <div className="md:absolute bottom-0 left-0 right-0 md:bg-black/50 md:text-white md:px-5 py-2">
        <h3 className="text-xl">{user.name}</h3>
        <p>{user.title}</p>
        {/* <p className="md:hidden block line-clamp-6">{user.about}</p> */}
      </div>
      {isOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="md:flex hidden flex-col justify-between absolute inset-0 origin-bottom-right bg-greenbg text-white p-5"
          >
            <motion.p
              variants={animateLeft}
              initial="initial"
              animate="animate"
              exit="exit"
              className="line-clamp-6"
            >
              {user.about}
            </motion.p>
            <div className="flex items-center justify-between">
              <button className="">Contact me</button>
              <span className="">
                <FaLinkedinIn />
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

const data = [
  {
    name: "Bush Andrew",
    title: "Digital Marketer/CEO",
    about: `Hi there! I'm a results-driven digital marketer with a passion for crafting compelling online experiences. With a knack for data analysis and a creative mindset, I thrive on optimizing digital campaigns to reach and engage target audiences. From social media strategy to SEO finesse, I bring a holistic approach to digital marketing, always adapting to the ever-evolving landscape. Let's connect and take your brand to new heights in the digital realm.`,
    image: process.env.PUBLIC_URL + "/images/bush.jpeg",
  },
  {
    name: "Konson Ak",
    title: "Software Engineer",
    about: `Hello world! I'm a passionate software engineer with a love for coding and problem-solving. Proficient in multiple programming languages, I specialize in developing robust, scalable, and efficient software solutions. From designing architecture to debugging intricate lines of code, I thrive on the challenges of creating innovative applications. Let's build something remarkable together – where logic meets creativity in the world of software engineering.`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-2.png",
  },
  {
    name: "Bush Andrew",
    title: "Graphic Designer",
    about: `Greetings! I'm a visual storyteller and graphic designer who believes in the power of aesthetics to convey messages. Proficient in translating ideas into captivating visuals, I bring a unique blend of creativity and technical skill to every project. Whether it's designing sleek logos, eye-catching marketing collateral, or immersive web graphics, I'm dedicated to making your brand stand out. Let's collaborate and turn your visions into visually stunning realities.`,
    image: process.env.PUBLIC_URL + "/images/avatars/Image-3.png",
  },
];
