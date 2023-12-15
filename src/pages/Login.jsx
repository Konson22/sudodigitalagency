import { FaUser } from "react-icons/fa";
import { FiLock, FiUser } from "react-icons/fi";
import axiosInstance from "../hooks/useAxios";
import { useRef, useState } from "react";
import { useGlobalApi } from "../manager/ContextProvider";

export default function Login() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { setProfile } = useGlobalApi();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    const fields = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const result = await axiosInstance
        .post("/auth/login", fields)
        .then((res) => res);
      setProfile(result.data);
    } catch (error) {
      if (error?.response) {
        setMessage(error?.response?.data);
      } else {
        setMessage("Error");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="login-container h-screen fixed inset-0 bg-cl3 flex items-center justify-center z-50">
      <div className="bg-cl5 md:w-[30%] w-[90%] p-8 rounded-md">
        <div className="text-center text-white mb-4">
          <div className="h-[6rem] w-[6rem] text-4xl flex items-center justify-center rounded-full border-8 border-cl4 bg-cl4 mx-auto mt-[-4.5rem]">
            <FaUser />
          </div>
          <span className="text-2xl">Sign in</span>
          {message && (
            <span className="block text-center bg-red-500 py-1 mt-3">
              {message}
            </span>
          )}
          {isLoading && "Loading..."}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-6">
            <span className="flex items-center text-cl4 text-xl bg-gray-200 px-3">
              <FiUser />
            </span>
            <input
              className="h-[3rem] bg-white w-full focus:border-none px-3"
              type="text"
              ref={emailRef}
              placeholder="User name"
            />
          </div>
          <div className="flex mb-6">
            <span className="flex items-center text-cl4 text-xl bg-gray-100 px-3">
              <FiLock />
            </span>
            <input
              className="h-[3rem] bg-white w-full focus:border-none px-3"
              type="password"
              ref={passwordRef}
              placeholder="Enter password"
            />
          </div>
          <button className="bg-lightred w-full py-2">Login</button>
        </form>
      </div>
    </div>
  );
}
