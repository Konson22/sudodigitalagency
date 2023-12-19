import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex items-center">
      <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 mr-4">
        <FaFacebook />
      </span>
      <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 mr-4">
        <FaTwitter />
      </span>
      <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 mr-4">
        <FaInstagram />
      </span>
      <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 mr-4">
        <FaYoutube />
      </span>
      <span className="border border-greenbg text-greenbg text-2xl rounded-full p-2 mr-4">
        <FaPinterestP />
      </span>
    </div>
  );
}
