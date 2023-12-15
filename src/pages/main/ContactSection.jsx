import { FiMail } from "react-icons/fi";
import SocialMedia from "../../components/SocialMedia";
import Input from "../forms/Input";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <div className="md:flex contact-from bg-cl1 text-white  md:px-[20%] px-8 py-10">
      <div className="md:bg-white/50 md:p-10 md:mr-3 rounded-xl flex-1">
        <div className=" md:block hidden">
          <h3 className="text-2xl text-right">الاتصال والعنوان</h3>
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
        <SocialMedia />
      </div>
      <div className="md: bg-white/50 flex-1 md:p-10 p-6 rounded-md md:my-0 my-7 md:ml-3">
        <h3 className="text-2xl text-center">اتصل بنا</h3>
        <p className="text-center my-3">
          لأي استفسار أو للحصول على مزيد من المعلومات، يمكنكم الاتصال بنا عبر:
        </p>
        <div className="mt-3">
          <form>
            <Input
              placeholder="أدخل عنوان البريد الإلكتروني"
              type="text"
              bg="bg-white"
            />
            <Input placeholder="أدخل اسمك" type="text" bg="bg-white" />
            <Input placeholder="email" type="textarea" bg="bg-white" />
            <button className="h-full w-full flex items-center justify-center bg-rd text-white rounded px-4 py-2">
              ارسل
              <FiMail className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/*
<div className="">
      <div className="contact-from bg-cl1 text-white p-10">
        
      </div>
      
    </div>*/
