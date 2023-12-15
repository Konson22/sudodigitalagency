import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="md:px-4">
      <h3 className="text-2xl text-center mb-4">follow us</h3>
      <div className="md:bg-transparent bg-white/50 py-4 rounded-md flex justify-evenly text-3xl">
        <span className="bg-cl1 rounded-md p-2">
          <FaFacebook />
        </span>
        <span className="bg-cl1 rounded-md p-2">
          <FaInstagram />
        </span>
        <span className="bg-cl1 rounded-md p-2">
          <FaTwitter />
        </span>
        <span className="bg-cl1 rounded-md p-2">
          <FaWhatsapp />
        </span>
      </div>
    </div>
  );
}
