import { FaPaperPlane } from "react-icons/fa";
import { FiAtSign, FiUser } from "react-icons/fi";
import SocialMedia from "../../components/SocialMedia";

export default function ContactSection() {
  return (
    <div className="message-style -mb-10 bg-greenbg text-white md:px-[15%] px-5 py-10">
      <div className="md:flex items-center">
        <div className="flex-1 mr-8">
          <h2 className="text-4xl mb-2">Let's get in touch</h2>
          <p>
            we are a passionate team of creative minds specializing in web,
            mobile app, and graphic design. Our mission is to transform your
            ideas into stunning digital experiences that captivate and engage
            your audience.
          </p>
          <SocialMedia cName="md:block hidden mt-7" />
        </div>
        <div className="flex-1 bg-white/30 rounded-md shadow-md backdrop-blur-md p-8 mb-8">
          <h2 className="text-2xl text-center mb-4">How can we help you?</h2>
          <form>
            <div className="flex bg-white mb-5">
              <span className="flex items-center bg-gray-200 px-3">
                <FiUser />
              </span>
              <input
                className="md:h-[3rem] h-[3rem] w-full bg-transparent px-3 focus:border-none focus:outline-none "
                type="text"
                placeholder="Your name"
              />
            </div>
            <div className="flex bg-white mb-5">
              <span className="flex items-center bg-gray-200 px-3">
                <FiAtSign />
              </span>
              <input
                className="md:h-[3rem] h-[3rem] w-full bg-transparent px-3 focus:border-none focus:outline-none "
                type="text"
                placeholder="E-mail address"
              />
            </div>
            <div className="flex bg-white mb-5">
              <textarea
                className="md:h-[6.5rem] h-[6.5rem] w-full bg-transparent p-3 focus:border-none focus:outline-none "
                type="text"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button className="w-full flex justify-center items-center text-white py-2 bg-darkbd ">
              <FaPaperPlane className="mr-2" />
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
