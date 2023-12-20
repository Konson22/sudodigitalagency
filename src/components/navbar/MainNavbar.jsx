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
                className="flex items-center relative cursor-pointer py-3 px-5"
                onClick={() => setIsOpen(!isOpen)}
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
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
        className="absolute top-full left-0 origin-top w-[max-content] bg-gray-50 text-gray-600"
      >
        {link.sublinks.map((subl) => (
          <Link className="block px-5 py-3" to={subl.path}>
            {subl.title}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
