import { useRef, useState } from "react";
import { useGlobalApi } from "../../manager/ContextProvider";
import axiosInstance from "../../hooks/useAxios";
import { LoadingButton } from "../../components/Buttons";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../config";

export default function Login() {
  const { setShowForm, setProfile } = useGlobalApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    const fields = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (passwordRef.current.value && emailRef.current.value) {
      try {
        const userCredential = await axiosInstance
          .post("/auth/login", fields)
          .then((res) => res);
        setProfile(userCredential.data);
        setShowForm(null);
      } catch (error) {
        if (error.response) {
          setMessage(error?.response?.data);
        } else {
          setMessage("Error");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage("Please fill all fields");
    }
  };
  return (
    <div className="">
      <h3 className="text-center text-2xl mb-4">التسجيل</h3>
      {message && (
        <span className="block text-center text-red-400 mb-5">{message}</span>
      )}
      <form onSubmit={handleSubmit}>
        <div className="flex rounded overflow-hidden mb-6">
          <input
            className="md:h-[2.5rem] h-[2.5rem] text-right bg-gray-100 drop-shadow-md w-full border-none focus:outline-none focus:border-none px-3"
            type="text"
            ref={emailRef}
            disabled={isLoading}
            placeholder="أدخل عنوان البريد الإلكتروني"
            required
          />
        </div>
        <div className="flex rounded overflow-hidden mb-6">
          <input
            className="md:h-[2.5rem] h-[2.5rem] text-right bg-gray-100 drop-shadow w-full border-none focus:outline-none focus:border-none px-3"
            type="text"
            placeholder="أدخل كلمة المرور"
            required
            disabled={isLoading}
            ref={passwordRef}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <button
            className="w-full bg-cl1 text-white rounded py-2"
            type="submit"
            disabled={isLoading}
          >
            تسجيل الدخول
          </button>
        )}
      </form>
      <SocilaMediaAuth />
      <button
        className="w-full text-center mt-7"
        onClick={() => setShowForm("register")}
      >
        ليس لديك حساب؟ إنشاء حساب
      </button>
    </div>
  );
}

function SocilaMediaAuth({ cName = "" }) {
  const { setProfile, setShowForm } = useGlobalApi();
  const [message, setMessage] = useState("");

  const GoogleAuthHandler = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then(
      (credential) => {
        const user = {
          name: credential.user.displayName,
          email: credential.user.email,
          userID: credential.user.uid,
          avatar: credential.user.photoURL,
        };
        setProfile(user);
        setShowForm(null);
      },
      (err) => {
        console.dir(err);
        setMessage(err?.code?.split("/")[1]);
      }
    );
  };

  return (
    <div className={`text-center mt-8 ${cName}`}>
      <h3 className="mb-3 font-thin text-xl">أو سجيل الدخول باستخدام</h3>
      {message && message}
      <div className="flex justify-evenly">
        <button className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-sky-600 text-white">
          <FaFacebook className="text-xl" />
        </button>
        <button
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-red-600 text-white"
          onClick={GoogleAuthHandler}
        >
          <FaGoogle className="text-2xl" />
        </button>
        <button
          className="w-[40px] h-[40px] rounded-full flex items-center justify-center border bg-red-600 text-white"
          onClick={GoogleAuthHandler}
        >
          <FaTwitter className="text-2xl" />
        </button>
      </div>
    </div>
  );
}
