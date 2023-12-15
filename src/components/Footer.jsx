import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import { FiChevronDown, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { faqData, navigationsLinksData } from "../assets/staticData";
import { useState } from "react";

export default function Footer() {
  return (
    <footer className="bg-darkbd text-white pt-16">
      <FaqContent cName="md:block hidden" />
      <div className="md:px-[6%] px-4">
        <SocialMedia />
        <div className="md:flex justify-between">
          <div className="flex-1 md:my-0 my-6">
            <h3 className="text-2xl mb-3">About us</h3>
            <p>
              At Sudo Agency, we believe in the power of innovation and design
              to transform businesses and create exceptional digital
              experiences. Our dedicated team of skilled designers, developers,
              and creatives work collaboratively to turn your ideas into reality
              and help you achieve your goals.
            </p>
          </div>
          <FaqContent />
          <div className="md:mx-14 md:my-0 my-6">
            <h3 className="text-2xl">Quick links</h3>
            <ul>
              {navigationsLinksData.map((link) => (
                <li>
                  <Link className="py-3 block" to={link.path}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl">Contacts & address</h3>
            <ul className="mt-4">
              <li className="flex items-center py-2">
                <span className="border border-greenbg bg-greenbg/10 rounded-full p-2 mr-2">
                  <FaMapMarkerAlt />
                </span>
                Juba market near etc
              </li>
              <li className="flex items-center py-2">
                <span className="border border-greenbg bg-greenbg/10 rounded-full p-2 mr-2">
                  <FaPhoneAlt />
                </span>
                +211920079070
              </li>
              <li className="flex items-center py-2">
                <span className="border border-greenbg bg-greenbg/10 rounded-full p-2 mr-2">
                  <FaWhatsapp />
                </span>
                +211920079070
              </li>
              <li className="flex items-center py-2">
                <span className="border border-greenbg bg-greenbg/10 rounded-full p-2 mr-2">
                  <FiMail />
                </span>
                info@sudodigitalagency.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="md:flex justify-evenly items-center py-4">
        <ul className="flex justify-center mt-3">
          <li className="">Privacy</li>
          <li className="border-x-2 border-greenbg mx-3 px-3">Policy</li>
          <li className="">Privacy</li>
        </ul>
        <div className="text-center md:mt-0 mt-4">
          &copy; copy right reserved for sudo digital agency{" "}
          {new Date().getUTCFullYear()}
        </div>
      </div>
    </footer>
  );
}

function FaqContent({ cName = "md:hidden block" }) {
  return (
    <div className={`${cName} md:px-[15%]`}>
      <div className="md:flex">
        <div className="flex-1 md:mr-8 md:mb-0 mb-8">
          <h3 className="text-2xl">Subcribe to our news</h3>
          <div className="flex bg-white/90 rounded-md p-2 my-2">
            <input
              className="md:h-[2.9rem] h-[2.4rem] w-full bg-transparent border-none focus:border-none focus:outline-none px-4"
              type="email"
              placeholder="E-mail addess"
            />
            <button className="flex items-center bg-greenbg px-6 rounded-md">
              Send
            </button>
          </div>
          <p>
            developers, and creatives work collaboratively to turn your ideas
            into reality and help you achieve your goals.
          </p>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl">FAQ</h3>
          <div className="mt-3">
            {faqData.map((faq) => (
              <FaqCard data={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-white/5 p-2 mb-2 rounded"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <span className="font-bold">{data.question}</span>
        <FiChevronDown />
      </div>
      {isOpen && (
        <div className="p-2">
          <p>{data.text}</p>
        </div>
      )}
    </div>
  );
}
