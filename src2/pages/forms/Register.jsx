import { useRef, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { useGlobalApi } from "../../manager/ContextProvider";
import { LoadingButton } from "../../components/Buttons";

export default function Register() {
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
        setShowForm(null);

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
    <div>
      <h3 className="text-center text-2xl mb-4">إنشاء حساب جديد</h3>
      {message && (
        <span className="block text-center text-red-400 mb-5">{message}</span>
      )}
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
      <button
        className="w-full text-center mt-7"
        onClick={() => setShowForm("login")}
      >
        لدي حساب التسجيل
      </button>
    </div>
  );
}
