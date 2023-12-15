import { FaBars } from "react-icons/fa";
import IconBox from "./IconBox";
import NavCart from "./NavCart";
import { Logo } from "./Logo";
import ProfileIcon from "./ProfileIcon";
import { mobileNavigationLinks } from "../../assets/staticData";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";
import { useGlobalApi } from "../../manager/ContextProvider";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const { showSearchBar, setShowSearchBar } = useGlobalApi();
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const menuVars = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  return (
    <div className="md:hidden flex justify-between items-center md:py-3 py-2 bg-white px-4">
      <div className="flex items-center">
        <div
          className="border border-gray-400 p-1 rounded text-xl mr-4"
          onClick={toggleMenu}
        >
          <FaBars />
        </div>
        <Logo cName="" />
      </div>
      <div className="flex items-center">
        <span onClick={() => setShowSearchBar(!showSearchBar)}>
          <IconBox icon={<FiSearch />} cName="text-2xl mr-4" />
        </span>
        <NavCart />
        <ProfileIcon />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 w-full h-screen flex justify-end origin-right bg-black/50 backdrop-blur-md "
          >
            <div className="flex bg-white w-[80%] h-full flex-col">
              <div className="flex items-center justify-between mb-5 border-b border-200 px-5 py-3">
                <p
                  className="cursor-pointer text-md text-2xl border border-gray-400 p-1 rounded"
                  onClick={toggleMenu}
                >
                  <FiX />
                </p>
                Menu
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-start font-lora items-end gap-4 p-5"
              >
                {mobileNavigationLinks.map((link, index) => {
                  return (
                    <div className="overflow-hidden py-2">
                      <MobileNavLink
                        key={index}
                        link={link}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {showSearchBar && <SearchBar />}
    </div>
  );
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

// mobile navb links
const MobileNavLink = ({ link, toggleMenu }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-right"
    >
      <Link className="flex items-center" to={link.path} onClick={toggleMenu}>
        {link.text}
        <div className="h-8 w-8 ml-3">
          <img src={link.icon} alt="" />
        </div>
      </Link>
    </motion.div>
  );
};
