import { Link } from "react-router-dom";
import { navigationLinks } from "../../assets/staticData";
import { Logo } from "./Logo";
import NavCart from "./NavCart";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useGlobalApi } from "../../manager/ContextProvider";
import ProfileIcon from "./ProfileIcon";

export default function MainNavbar() {
  const { setShowForm, profile } = useGlobalApi();

  return (
    <div className="md:block hidden">
      <div className="py-2 bg-cl1 text-white flex justify-between items-center px-[5%]">
        <div className="">something about leee</div>
        <div className="flex items-center">
          <span className="px-3 border-l cursor-pointer text-white">
            <FaTwitter />
          </span>
          <span className="px-3 border-l cursor-pointer text-white">
            <FaInstagram />
          </span>
          <span className="px-3 border-l cursor-pointer text-white">
            <FaLinkedinIn />
          </span>
          <span className="px-3 border-l cursor-pointer text-white">
            <FaFacebook />
          </span>
          {!profile ? (
            <>
              <span className="flex items-center px-3 border-l cursor-pointer text-white">
                <FiUser className="" />
                إنشاء حساب جديد
              </span>
              <span
                className="flex items-center px-3 border-l cursor-pointer"
                onClick={() => setShowForm("login")}
              >
                تسجيل الدخول
                <FiUser className="" />
              </span>
            </>
          ) : (
            <>
              <ProfileIcon cName="text-white text-xl" />
            </>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between bg-white px-[5%] py-2">
        <NavCart />
        <div className="">
          <ul className="flex">
            {navigationLinks.map((link, index) => (
              <li className="" key={index}>
                <Link className="flex items-center px-5" to={link.path}>
                  {link.text}
                  <div className="h-8 w-8 ml-3">
                    <img src={link.icon} alt="" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Logo cName="flex items-center" />
      </div>
    </div>
  );
}
