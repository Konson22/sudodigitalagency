import { FaBars, FaUpload } from "react-icons/fa";
import { FiBell, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAdminApi } from "../manager/AdminCotextProvider";

export default function DashNav() {
  const { openSidebar, setOpenSidebar } = useAdminApi();

  return (
    <nav className="h-[4rem] flex items-center md:justify-end justify-between bg-white px-5">
      <div className="md:hidden flex items-center flex-1">
        <img
          className="md:h-16 w-14 h-12"
          src={process.env.PUBLIC_URL + "/images/cupcake.png"}
          alt=""
        />
        <p className="logo-text text-2xl font-bold w-full grad grad1">لي ثري</p>
      </div>
      <div className="flex items-center text-cl5">
        <Link
          className="flex items-center md:bg-cl5 text-white md:px-5 py-2"
          to="/admin/upload"
        >
          <FaUpload className="md:text-base text-2xl mr-2" />
          <span className="md:block hidden">Upload</span>
        </Link>
        <span className="text-3xl mx-5">
          <FiMail />
        </span>
        <span className="text-3xl relative">
          <FiBell />
          <span className="h-4 w-4 flex items-center justify-center text-white text-[0.7rem] rounded-full bg-rose-600 absolute -top-1 -right-1">
            5
          </span>
        </span>
        <span
          className="text-3xl ml-5"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FaBars />
        </span>
      </div>
    </nav>
  );
}
