import { useState } from "react";
import { FiCheck, FiImage } from "react-icons/fi";
import axiosInstance from "../hooks/useAxios";
import { useAdminApi } from "../manager/AdminCotextProvider";

export default function Upload() {
  const { setCandy } = useAdminApi();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(ev.target);
      const result = await axiosInstance
        .post("/products", formData, postOptions)
        .then((res) => res);
      setCandy((prevItems) => {
        return [...prevItems, result.data];
      });
    } catch (error) {
      setMessage(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };

  //AXIOS HEADER OPTIONS
  const postOptions = {
    widthCredentials: true,
    withCredentials: "include",
    onUploadProgress: (percentageLoaded) => {
      const { total, loaded } = percentageLoaded;
      const percent = Math.floor((loaded / total) * 100);
      percent <= 100 && setUploadPercentage(percent);
    },
  };
  return (
    <>
      {loading && (
        <Loader
          uploadPercentage={uploadPercentage}
          setUploadPercentage={setUploadPercentage}
        />
      )}
      <div className="md:w-[40%] mx-auto p-5">
        <h2 className="text-2xl mb-5">Upload product</h2>
        {message && message}
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <input
              className="h-[3rem] w-full border rounded text-right border-cl1 focus:border-none px-3"
              name="name"
              placeholder="إسم المنتج"
            />
          </div>
          <div className="mb-5">
            <input
              className="h-[3rem] w-full border rounded text-right border-cl1 focus:border-none px-3"
              name="category"
              placeholder="category"
            />
          </div>
          <div className="flex-1 mb-6">
            <input
              className="h-[3rem] w-full border rounded text-right border-cl1 focus:border-none px-3"
              name="price"
              placeholder="السعر"
            />
          </div>
          <div className="mb-5">
            <textarea
              className="h-[6.3rem] w-full border rounded border-cl1 focus:border-none p-3"
              name="description"
              placeholder="description"
            ></textarea>
          </div>
          <div className="mb-5">
            <label className="" htmlFor="image">
              <div className="w-[max-content] cursor-pointer bg-cl1 text-white flex items-center px-3 py-2 rounded">
                <FiImage className="text-3xl" />
                Upload Image
              </div>
              <input type="file" name="image" id="image" />
            </label>
          </div>
          <button className="bg-cl1 text-white w-full py-2 rounded">
            Upload
          </button>
        </form>
      </div>
    </>
  );
}

export function Loader({ uploadPercentage, setUploadPercentage }) {
  return (
    <div className="h-screen fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="md:w-[35%] w-[90%] bg-white p-6 text-center rounded-md">
        {uploadPercentage < 100 ? (
          <>
            <span className="md:text-2xl">Uploading...</span>
            <div className="md:h-[1.6rem] h-[1rem] bg-gray-50 rounded-[1rem] overflow-hidden shadow-inner md:my-6 my-4">
              <div
                className="h-full shadow-md rounded-[1rem] bg-gradient-to-l from-cl1 to-lightpink"
                style={{ width: `${uploadPercentage}%` }}
              ></div>
            </div>
            <span className="md:text-3xl">{uploadPercentage}%</span>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <span className="bg-green-200 shadow-md rounded-full md:text-5xl text-3xl p-3 my-4">
              <FiCheck />
            </span>
            Successfully Uploaded!
            <button
              className="bg-green-200 px-6 py-1 rounded mt-4"
              onClick={() => setUploadPercentage(0)}
            >
              Ok
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
