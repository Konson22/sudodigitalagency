import { Outlet, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/navigation";
// import Navbar from "./components/nabvar";
import Footer from "./components/Footer";
import { useGlobalApi } from "./manager/ContextProvider";
import Sidebar from "./admin/Sidebar";
import DashNav from "./admin/DashNav";
import AdminCotextProvider from "./manager/AdminCotextProvider";
import { FaWhatsapp } from "react-icons/fa";
import Forms from "./pages/forms";
import Checkout from "./pages/Checkout";
import AuthForm from "./pages/forms/AuthForm";

/***********************************************************************
 THIS IS PROTECTED ROUTE ONLY AUTHENTICATED USER WHO CAN ACCESS IT 
***********************************************************************/
export function AdminRoutes() {
  const { profile } = useGlobalApi();
  const location = useLocation();

  return profile ? (
    <AdminCotextProvider>
      <div className="h-screen flex">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <DashNav />
          <div className="flex-1 overflow-y-scroll md:p-5 p-3">
            <Outlet />
          </div>
        </div>
      </div>
    </AdminCotextProvider>
  ) : (
    <Navigate to="/admin/login" state={{ from: location }} replace />
  );
}

/***********************************************************************
  THIS WILL REDIRECT USER BACK TO WHERE HE CAME FROM 
  IF THE USER IS ALREADY LOGGED IN
***********************************************************************/
export function LoginRoutes() {
  const { profile } = useGlobalApi();
  const location = useLocation();
  return profile ? (
    <Navigate
      to={location.state.from.pathname}
      state={{ from: location }}
      replace
    />
  ) : (
    <Outlet />
  );
}

/***********************************************************************
  THIS ROUTES ARE PUBLIC ANY ONCE CAN ACCESS
***********************************************************************/
export function UsersRoutes() {
  const { sendMessage, showForm, isCheckingOut } = useGlobalApi();
  return (
    <div className="relative min-h-screen">
      {showForm !== null && <AuthForm />}
      {isCheckingOut && <Checkout />}
      <Navbar />
      <Outlet />
      <Footer />
      <div
        className="bg-green-400 p-3 fixed right-2 bottom-5 rounded-full text-white text-3xl z-20"
        onClick={sendMessage}
      >
        <FaWhatsapp />
      </div>
    </div>
  );
}
