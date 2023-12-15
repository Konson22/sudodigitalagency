import { FaTruckMoving, FaUber, FaUsers } from "react-icons/fa";
import { FiChevronDown, FiHome, FiMail, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAdminApi } from "../manager/AdminCotextProvider";

export default function Sidebar() {
  const { openSidebar, setOpenSidebar } = useAdminApi();

  return (
    <div
      className={`
            md:static fixed  md:w-auto w-full
            md:bg-cl5 bg-cl5/50 md:text-white md:translate-x-0 duration-300
            ${openSidebar ? "translate-x-0" : "translate-x-[-100%]"}
        `}
    >
      <div className="h-screen flex flex-col md:w-full w-[75%] md:bg-transparent bg-white">
        <div className="flex items-center justify-between px-3">
          <div className="h-[4rem] flex items-center">
            <img
              className="md:h-14 w-14 h-9"
              src={process.env.PUBLIC_URL + "/images/cupcake.png"}
              alt=""
            />
            <p className="logo-text text-2xl font-bold w-full">لي ثري</p>
          </div>
          <span
            className="md:hidden border p-1 block  text-3xl"
            onClick={() => setOpenSidebar(false)}
          >
            <FiX />
          </span>
        </div>
        <div className="flex-1 my-5">
          <ul>
            {links.map((link) => (
              <li>
                <Link
                  className="flex items-center hover:bg-white hover:text-cl5 px-5 py-2"
                  to={link.path}
                  onClick={() => setOpenSidebar(false)}
                >
                  <span className="text-4xl mr-3">{link.icon}</span>
                  <span className="md:block hiddenn">{link.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center px-5 py-2">
          {/* <img 
                    className="h-[40px] w-[40px] rounded-full mr-2" 
                    src={profile.profile_image} 
                    alt="" 
                /> */}
          {/* <span className="md:block hiddenn flex-1">{profile.name}</span> */}
          <span className="text-2xl">
            <FiChevronDown />
          </span>
        </div>
      </div>
    </div>
  );
}

const links = [
  { text: "Dashboard", path: "/admin", icon: <FiHome /> },
  { text: "Products", path: "/admin/products", icon: <FaUber /> },
  { text: "الطلبات", path: "/admin/orders", icon: <FaTruckMoving /> },
  { text: "Messages", path: "/", icon: <FiMail /> },
  { text: "Stuff", path: "/", icon: <FaUsers /> },
  { text: "Report", path: "/", icon: <FaUber /> },
  { text: "الزبائن", path: "/", icon: <FaUber /> },
];
