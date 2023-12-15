import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function SocialMedia({ cName = "md:hidden block" }) {
  return (
    <div className={cName}>
      <h2 className="md:text-4xl text-2xl md:text-left text-center mb-3">
        Follow us on
      </h2>
      <div className="flex justify-between bg-greenbg/50 border border-greenbg rounded-md md:p-0 p-4">
        <span className="md:text-4xl text-2xl bg-darkbd border border-greenbg md:text-white text-greenbg rounded-full p-2">
          <FaTwitter />
        </span>
        <span className="md:text-4xl text-2xl bg-darkbd border border-greenbg md:text-white text-greenbg rounded-full p-2">
          <FaInstagram />
        </span>
        <span className="md:text-4xl text-2xl bg-darkbd border border-greenbg md:text-white text-greenbg rounded-full p-2">
          <FaFacebook />
        </span>
        <span className="md:text-4xl text-2xl bg-darkbd border border-greenbg md:text-white text-greenbg rounded-full p-2">
          <FaYoutube />
        </span>
        <span className="md:text-4xl text-2xl bg-darkbd border border-greenbg md:text-white text-greenbg rounded-full p-2">
          <FaWhatsapp />
        </span>
      </div>
    </div>
  );
}
