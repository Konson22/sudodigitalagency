import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { mobileNavigationLinks } from "../assets/staticData";

export default function Footer() {
  return (
    <footer className="footer text-white md:flex justify-between md:px-[8%] px-4 py-10">
      <div className="">
        <h3 className="text-xl text-right mb-3">الاشتراك</h3>
        <div className="h-[3rem] flex p-1 rounded bg-white">
          <button className="h-full flex items-center bg-rd text-white rounded px-4">
            ارسل
            <FiMail className="ml-2" />
          </button>
          <input
            className="h-full w-full text-right border-none bg-transparent focus:border-none focus-within:border-none focus:outline-none"
            type="email"
            placeholder="البريد الإلكتروني"
          />
        </div>
        <p className="text-right mt-2">
          اشترك واحصل على تحديث المثيل حول منتجاتنا وعروضنا الخاصة
        </p>
      </div>
      <div className="md:my-0 my-6">
        <h3 className="text-xl text-right">روابط سريعة</h3>
        <ul>
          {mobileNavigationLinks.map((link) => (
            <li className="text-right py-2">{link.text}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-right">الاتصال والعنوان</h3>
        <ul>
          <li className="flex items-center justify-end my-2">
            somewhare, near something
            <span className="border p-2 rounded-full ml-2">
              <FaMapMarkerAlt />
            </span>
          </li>
          <li className="flex items-center justify-end my-2">
            +966544024948
            <span className="border p-2 rounded-full ml-2">
              <FaPhoneAlt />
            </span>
          </li>
          <li className="flex items-center justify-end my-2">
            +966544024948
            <span className="border p-2 rounded-full ml-2">
              <FaWhatsapp />
            </span>
          </li>
          <li className="flex items-center justify-end my-2">
            info@leeethree.com
            <span className="border p-2 rounded-full ml-2">
              <FiMail />
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
}
