import Login from "./Login";
import Register from "./Register";
import { useGlobalApi } from "../../manager/ContextProvider";
import { FiX } from "react-icons/fi";

export default function AuthForm() {
  const { showForm, setShowForm } = useGlobalApi();

  return (
    <div className="h-[dvh] fixed inset-0 bg-cl5/40 backdrop-blur-md z-50 flex items-center justify-center">
      <div className="md:w-[35%] w-[85%] bg-white relative">
        <div
          className="border border-red-500 bg-white rounded-full absolute -right-1 -top-8 p-2 md:text-xl z-50"
          onClick={() => setShowForm(null)}
        >
          <FiX />
        </div>
        <div className="flex justify-between">
          <div
            className={`flex-1 md:pr-10 pr-5 py-4 cursor-pointer border-b-4 ${
              showForm === "register"
                ? "border-cl1 text-cl1"
                : "text-cl1/50 border-cl1/20"
            }`}
            onClick={() => setShowForm("register")}
          >
            <h4 className="text-right">إنشاء حساب جديد</h4>
          </div>
          <div
            className={`flex-1 md:pr-10 pr-5 py-4 cursor-pointer border-b-4 ${
              showForm === "login" ? "border-cl1" : "border-cl1/20"
            }`}
            onClick={() => setShowForm("login")}
          >
            <h4 className="text-right">تسجيل الدخول </h4>
          </div>
        </div>
        <div className="px-10 py-5">
          {showForm === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
}
