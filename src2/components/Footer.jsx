import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import SocialMedia from "./SocialMedia";
import { FiMail } from "react-icons/fi";
import { servicesData } from "../assets/staticData";

export default function Footer() {
  return (
    <footer className="bg-darkbg text-gray-300 md:px-[5%] px-5 md:pt-20 pt-10">
      <div className="md:flex mb-14">
        <div className="flex-1 md:mr-10 md:mb-0 mb-10">
          <div className="flex items-center">
            <img
              className="md:h-[3.5rem] h-[3rem] md:w-[3.5rem] w-[3rem]"
              src={process.env.PUBLIC_URL + "/images/logo.jpg"}
              alt=""
            />
            <div className="">
              <span className="block md:text-xl text-greenbg">
                Sudo Digital
              </span>
              <p className="text-white text-sm text-right">Agency</p>
            </div>
          </div>
          <p className="my-5">
            Your online presence starts with a captivating website. Our
            developers blend creativity with technical proficiency to build
            websites that not only look stunning but
          </p>
          <SocialMedia />
        </div>
        <div className="">
          <h3 className="text-white text-xl mb-2">Quick Contacts</h3>
          <ul>
            <li className="flex items-center py-2">
              <span className="border-greenbg border rounded-full p-2 mr-4">
                <FaMapMarkerAlt />
              </span>
              Juba Market, near SS Bank
            </li>
            <li className="flex items-center py-2">
              <span className="border-greenbg border rounded-full p-2 mr-4">
                <FaPhoneAlt />
              </span>
              +211920079070
            </li>
            <li className="flex items-center py-2">
              <span className="border-greenbg border rounded-full p-2 mr-4">
                <FaWhatsapp />
              </span>
              +211920079070
            </li>
            <li className="flex items-center py-2">
              <span className="border-greenbg border rounded-full p-2 mr-4">
                <FiMail />
              </span>
              info@sudodigitalagency.com
            </li>
          </ul>
        </div>
        <div className="md:mx-10 md:my-0 my-10">
          <h3 className="text-white text-xl mb-2">Usefull Links</h3>
          <ul>
            <li className="py-2">About us</li>
            <li className="py-2">Sudo Investors</li>
            <li className="py-2">Our Clients</li>
            <li className="py-2">Legal Information</li>
            <li className="py-2">Portfolio</li>
            <li className="py-2">Terms & Conditions</li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-white text-xl mb-2">Services</h3>
          <ul>
            {servicesData.map((service, index) => (
              <li className="mb-2" key={index}>
                {service.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:flex items-center md:justify-between justify-evenly border-t border-gray-400 py-10">
        <div className="flex md:mb-0 mb-5">
          <span className="">Privacy Polocy</span>
          <span className="md:mx-5 mx-2 md:px-4 px-2 border-x">
            Terms & Conditions
          </span>
          <span className="">Legal info</span>
        </div>
        <div className="text-center">
          &copy; sudodigitalagency.com All rights reserved
        </div>
      </div>
    </footer>
  );
}
