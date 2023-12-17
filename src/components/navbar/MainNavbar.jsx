import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { navigationsLinksData } from "../../assets/staticData";
import { AnimatePresence, motion } from "framer-motion";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:block hidden">
      <ul className="flex">
        {navigationsLinksData.map((link) => (
          <li className="flex items-center">
            {link.sublinks ? (
              <div
                className="flex items-center relative py-3 px-5"
                onClick={() => setIsOpen(!isOpen)}
              >
                {link.text}
                <FiChevronDown className="ml-2" />
                {isOpen && <DropDownCard link={link} />}
              </div>
            ) : (
              <Link className="px-5 py-3 block" to={link.path}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DropDownCard({ link }) {
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
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex absolute top-full left-0 origin-top w-[500px] bg-gray-50"
      >
        <div className="flex-1">
          {link.sublinks.map((subl) => (
            <div className="p-3">{subl.title}</div>
          ))}
        </div>
        <div className="flex-1">
          <img
            src={
              process.env.PUBLIC_URL + "/images/pexels-ali-pazani-2777898.jpg"
            }
            alt=""
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
