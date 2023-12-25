import Logo from "./Logo";
import MainNavbar from "./MainNavbar";
import { FiBarChart2 } from "react-icons/fi";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { useContextApi } from "../../context-manager/ContextProvider";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const { toggleModal } = useContextApi();

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const sendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent("Hii");
    const confirmationMessage = "سيتم توجيهك إلى واتساب هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href =
        "https://wa.me/+211910207213?text=" + encodedMessage;
    }
  };

  return (
    <div
      className={`bg-darkbg text-white flex items-center justify-between py-2 px-[5%] sticky left-0 top-0 z-40`}
    >
      <Logo />
      <MainNavbar />
      <MobileNav openMenu={openMenu} toggleMenu={toggleMenu} />
      <div className="flex items-center">
        <button
          className="flex bg-greenbg text-white md:px-5 px-3 md:py-2 py-1 rounded-sm"
          onClick={toggleModal}
        >
          Contact us
        </button>
        <span
          className="text-2xl text-greenbg mx-4"
          onClick={sendWhatsAppMessage}
        >
          <FaWhatsapp />
        </span>
        {/* <span className="text-2xl text-greenbg mx-4">
          <FiMail />
        </span> */}
        <div
          className="md:hidden block text-3xl text-greenbg -rotate-90"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FiBarChart2 />
        </div>
      </div>
    </div>
  );
}
