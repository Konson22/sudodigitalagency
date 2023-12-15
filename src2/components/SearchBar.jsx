import { FiChevronDown } from "react-icons/fi";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { categories } from "../assets/staticData";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../manager/ContextProvider";

const menuVars = {
  initial: {
    y: -8,
    transition: {
      duration: 0.4,
      ease: easeInOut,
    },
  },
  animate: {
    y: 0,
    //   transition: {
    //     duration: 0.4,
    //     ease: easeIn,
    //   },
  },
  exit: {
    y: -8,
    transition: {
      delay: 0.2,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export default function SearchBar() {
  const { setShowSearchBar } = useGlobalApi();

  const [showCategory, setShowCategory] = useState(false);
  return (
    <AnimatePresence>
      <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className="flex w-full px-5 absolute left-0 top-[110%]"
      >
        <div
          className="bg-white flex items-center px-3 mr-2 relative"
          onClick={() => setShowCategory(!showCategory)}
        >
          <span className="">
            <FiChevronDown />
          </span>
          فئات
          {showCategory && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-white w-[160px] py-2 absolute top-[110%] left-0"
              onClick={() => setShowSearchBar(false)}
            >
              {categories.map((category, index) => (
                <Link
                  className="block px-5 py-2 text-right"
                  key={index}
                  to={
                    category.name !== "جميع"
                      ? `/store?category=${category.name}`
                      : "/store"
                  }
                >
                  {category.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
        <div className="h-[3rem] flex-1 bg-white flex items-center rounded overflow-hidden">
          <input
            className="w-full bg-transparent px-3 border-none focus:border-none focus:outline-none"
            type="search"
            placeholder="Search"
          />
          <button className="bg-rd text-white px-3 h-full">find</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
