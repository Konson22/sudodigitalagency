import { FiChevronDown, FiShoppingCart, FiUser } from "react-icons/fi";
import IconBox from "./IconBox";
import { useGlobalApi } from "../../manager/ContextProvider";
import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ProfileIcon({ cName }) {
  const { profile, setShowForm, userOrders, signOutUser } = useGlobalApi();
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () =>
    profile ? setIsOpen(!isOpen) : setShowForm("login");
  return (
    <div
      className="relative flex items-center cursor-pointer text-gray-600 md:ml-0 ml-5"
      onClick={toggleProfile}
    >
      <IconBox icon={<FiUser />} count={userOrders.length} cName={cName} />
      <div className="md:flex hidden items-center text-white text-sm">
        <span className="mx-1">{profile?.name}</span>
        <FiChevronDown />
      </div>
      <Dropdown isOpen={isOpen} signOutUser={signOutUser} />
    </div>
  );
}

const Dropdown = ({ isOpen, signOutUser }) => {
  const variants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className="w-[170px] z-40 absolute md:top-full top-[130%] origin-top right-0 bg-white border rounded-md shadow-lg py-2"
        >
          <Link
            className="flex items-center justify-end px-4 py-2"
            to="/my-orders"
          >
            حجزي
            <FiShoppingCart className="ml-3" />
          </Link>
          <div
            className="flex items-center justify-end px-4 py-2 cursor-pointer"
            onClick={signOutUser}
          >
            تسجيل الخروج
            <FaSignOutAlt className="ml-3" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
