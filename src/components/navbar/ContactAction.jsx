import { FaWhatsapp } from "react-icons/fa";
import { FiBarChart2, FiMail } from "react-icons/fi";

export default function ContactAction() {
  return (
    <div className="flex items-center">
      <span className="text-2xl text-greenbg">
        <FaWhatsapp />
      </span>
      <span className="text-2xl text-greenbg mx-4">
        <FiMail />
      </span>
      <div className="md:hidden block text-3xl -rotate-90">
        <FiBarChart2 />
      </div>
    </div>
  );
}
