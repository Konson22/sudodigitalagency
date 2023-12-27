import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Heading3 } from "../util/HeadingTitle";

export default function SocialMedia() {
  return (
    <div className="">
      <Heading3 text="Follow us on" cName="text-center mb-4 text-white" />
      <div className="flex items-center justify-evenly">
        <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 md:mr-4">
          <FaFacebook />
        </span>
        <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 md:mr-4">
          <FaTwitter />
        </span>
        <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 md:mr-4">
          <FaInstagram />
        </span>
        <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 md:mr-4">
          <FaYoutube />
        </span>
        <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 md:mr-4">
          <FaPinterestP />
        </span>
      </div>
    </div>
  );
}
