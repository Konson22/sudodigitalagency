import { FiX } from "react-icons/fi";
import { servicesInfo } from "../assets/data";
import { FaPaperPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: -80,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -80,
    transition: {
      duration: 0.5,
    },
  },
};
export default function QuotationForm({ toggleModal }) {
  const containerRef = useRef(null);
  useEffect(() => {
    document.addEventListener(
      "click",
      () => (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
          toggleModal();
        }
      },
      true
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatePresence onExitComplete={true}>
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="origin-top fixed inset-0 z-50 backdrop-blur-md bg-black/10 flex items-center justify-center"
      >
        <div className="md:w-[75%] w-[90%] flex bg-white rounded-md shadow-lg md:p-5 relative">
          <div
            className="absolute md:left-full left-[90%] bottom-full bg-white rounded-full p-2 z-50"
            onClick={toggleModal}
          >
            <FiX />
          </div>
          <div className="md:block hidden flex-1">
            <img
              src={process.env.PUBLIC_URL + "/images/Web-Design-PNG-Photo.png"}
              alt=""
            />
          </div>
          <div className="md:w-[45%] w-full md:bg-greenbg form-container rounded-md p-8 md:ml-6">
            <h3 className="text-2xl md:text-white mb-4">Quotation form</h3>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  id="voice-search"
                  className="cursor-pointer rounded-md bg-gray-100 w-full duration-300 border border-greenbg h-[3rem] px-4"
                  placeholder="Your Name"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  id="voice-search"
                  className="cursor-pointer rounded-md bg-gray-100 w-full duration-300 border border-greenbg h-[3rem] px-4"
                  placeholder="E-mail address"
                  required
                ></input>
              </div>
              <div className="mb-5">
                <select className="cursor-pointer rounded-md bg-gray-100 w-full duration-300 border border-greenbg h-[3rem] px-4">
                  <option value="">Choose Service</option>
                  {servicesInfo.map((s) => (
                    <option value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div className="mb-5">
                <textarea
                  class="cursor-pointer rounded-md bg-gray-100 w-full duration-300 border border-greenbg h-[7rem] px-4"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
              <button className="w-full flex items-center justify-center bg-white px-5 py-2 rounded">
                <FaPaperPlane /> Send
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
