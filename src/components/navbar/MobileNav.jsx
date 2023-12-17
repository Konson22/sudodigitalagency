import { Link } from "react-router-dom";
import { navigationsLinksData } from "../../assets/staticData";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";

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
      delay: 0.8,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function MobileNav({ openMenu, toggleMenu }) {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="h-screen w-full origin-top fixed right-0 top-0 z-50 bg-white text-gray-700 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-2xl">Menu</span>
            <div
              className="md:hidden block text-3xl -rotate-90"
              onClick={() => toggleMenu(false)}
            >
              <FiX />
            </div>
          </div>
          <motion.ul
            variants={containerVars}
            initial="initial"
            animate="open"
            exit="initial"
          >
            {navigationsLinksData.map((link, index) => (
              <div className="overflow-hidden py-2">
                <MobileNavLink
                  key={index}
                  link={link}
                  toggleMenu={toggleMenu}
                />
              </div>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// mobile navb links
const MobileNavLink = ({ link, toggleMenu }) => {
  const mobileLinkVars = {
    initial: {
      y: "80px",
      transition: {
        duration: 0.3,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div variants={mobileLinkVars} className="uppercase ">
      <Link className="" to={link.path} onClick={toggleMenu}>
        {link.text}
      </Link>
    </motion.div>
  );
};
