import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { useGlobalApi } from "../../manager/ContextProvider";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useRef, useState } from "react";
import { auth } from "../../config";
import { FiX } from "react-icons/fi";
import { LoadingButton } from "../../components/Buttons";
import axiosInstance from "../../hooks/useAxios";
import { AnimatePresence, motion } from "framer-motion";

export default function Forms() {
  const { showForm, setShowForm } = useGlobalApi();
  return (
    <AnimatePresence onExitComplete={false}>
      <div className="h-[dvh] fixed inset-0 bg-cl5/50 backdrop-blur-md z-50 flex items-center justify-center">
        {showForm !== "login" ? (
          <RegisterForm setShowForm={setShowForm} />
        ) : (
          <LoginForm setShowForm={setShowForm} />
        )}
      </div>
    </AnimatePresence>
  );
}

const menuVars = {
  initial: {
    x: "20%",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      // ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    x: "-20%",
    opacity: 0,
    transition: {
      // delay: 0.5,
      duration: 0.3,
      // ease: [0.22, 1, 0.36, 1],
    },
  },
};
// LOGIN USER
function LoginForm() {
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
    <motion.div
      className="flex h-[max-content] md:w-[60%] w-[85%] bg-white rounded-md overflow-hidden shadow-lg relative"
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CloseForm setShowForm={setShowForm} />
      <div className="flex-1 px-8 py-5 md:mt-0 mt-6">
        <h3 className="text-2xl text-center">تسجيل الدخول</h3>
        {message && (
          <span className="text-center text-red-600 block mt-3">{message}</span>
        )}
        <div className="my-5">
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
        </div>
        <SocilaMediaAuth />
        <button
          className="w-full text-center mt-7"
          onClick={() => setShowForm("signup")}
        >
          ليس لديك حساب؟ إنشاء حساب
        </button>
      </div>
      <div className="md:flex hidden flex-1 form-sidebar"></div>
    </motion.div>
  );
}

// REGISTER NEW USER
function RegisterForm() {
  const { setShowForm, setProfile } = useGlobalApi();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsLoading(true);
    const fields = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    if (
      nameRef.current.value &&
      passwordRef.current.value &&
      emailRef.current.value
    ) {
      try {
        const userCredential = await axiosInstance
          .post("/auth/register", fields)
          .then((res) => res);
        setProfile(userCredential.data);
        console.log("User signed up successfully:", userCredential.data);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data);
        } else {
          setMessage("Opps something went wrong try again");
        }
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage("Please fill all fields");
    }
  };
  return (
    <motion.div
      className="flex items-cente h-[max-content] md:w-[60%] w-[85%] bg-white rounded-md overflow-hidden shadow-lg relative"
      variants={menuVars}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <CloseForm setShowForm={setShowForm} />
      <div className="flex-1 px-8 py-5 md:mt-0 mt-6">
        <h3 className="text-2xl font-thin text-right">التسجيل</h3>
        {message && (
          <span className="text-center text-red-600 block mt-3">{message}</span>
        )}
        <div className="my-5">
          <form onSubmit={handleSubmit}>
            <div className="flex rounded overflow-hidden mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-100 text-right w-full focus:outline-none border-none focus:border-none px-3"
                type="text"
                placeholder="أدخل اسمك"
                disabled={isLoading}
                ref={nameRef}
                required
              />
            </div>
            <div className="flex rounded overflow-hidden mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-100 text-right w-full focus:outline-none border-none focus:border-none px-3"
                type="text"
                placeholder="إضافة البريد الإلكتروني"
                ref={emailRef}
                disabled={isLoading}
                required
              />
            </div>
            <div className="flex rounded overflow-hidden mb-6">
              <input
                className="md:h-[2.5rem] h-[2.5rem] bg-gray-100 text-right w-full focus:outline-none border-none focus:border-none px-3"
                type="text"
                placeholder="إنشاء كلمة مرور"
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
                إنشاء حساب
              </button>
            )}
          </form>
        </div>
        <SocilaMediaAuth />
        <button
          className="w-full text-center mt-8"
          onClick={() => setShowForm("login")}
        >
          Already have account <span className="text-blue-500">Login</span>
        </button>
      </div>
      <div className="md:flex hidden flex-1 form-sidebar"></div>
    </motion.div>
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
    <div className={`text-center ${cName}`}>
      <h3 className="mb-3 font-thin text-xl">أو تسجيل الدخول باستخدام</h3>
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

function CloseForm({ setShowForm }) {
  return (
    <div
      className="border border-red-500 bg-white rounded-full absolute right-2 top-2 p-2 md:text-xl z-50"
      onClick={() => setShowForm(null)}
    >
      <FiX />
    </div>
  );
}

function mapAuthCodeToMessage(authCode) {
  switch (authCode) {
    case "auth/invalid-login-credentials":
      return "invalid login credentials";
    case "auth/too-many-requests":
      return "too many failed login attempts";
    case "auth/email-already-in-use":
      return "this E-mail exists";
    case "auth/invalid-password":
      return "Password provided is not corrected";
    case "auth/invalid-email":
      return "Email provided is invalid";
    case "auth/weak-password":
      return "weak-password";
    default:
      return "";
  }
}
