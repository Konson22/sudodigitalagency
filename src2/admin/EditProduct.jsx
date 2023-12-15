import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiImage } from "react-icons/fi";
import axiosInstance from "../hooks/useAxios";
import { Loader } from "./Upload";
// import { useAdminApi } from "../manager/AdminCotextProvider";
import { useGlobalApi } from "../manager/ContextProvider";

export default function EditProduct() {
  const { id } = useParams();
  const { candy } = useGlobalApi();
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const handleInput = (e) =>
    setSelectedItem({ ...selectedItem, [e.target.name]: e.target.value });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData(ev.target);
      formData.append("id", id);
      const result = await axiosInstance
        .post("/products/edit", formData, postOptions)
        .then((res) => res);
      console.log(result);
    } catch (error) {
      setMessage(error?.response?.data);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line eqeqeq
    const item = candy.filter((c) => c.productID == id)[0];
    if (item) {
      setSelectedItem(item);
    }
  }, [candy, id]);

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
    <div>
      {loading && (
        <Loader
          uploadPercentage={uploadPercentage}
          setUploadPercentage={setUploadPercentage}
        />
      )}
      {message && <span className="text-red-500 mb-3">{message}</span>}
      {selectedItem && (
        <div className="md:w-[45%] md:mx-0 mx-auto bg-white md:p-8 p-4">
          <h3 className="text-4xl">Edit product</h3>
          <form onSubmit={handleSubmit}>
            <div className="text-right mb-5">
              <label htmlFor="name">Product name</label>
              <input
                className="h-[3rem] border border-cl4 bg-lightgray w-full text-right px-3"
                name="name"
                type="text"
                value={selectedItem["name"]}
                onChange={handleInput}
              />
            </div>
            <div className="text-right mb-5">
              <label htmlFor="name">Category</label>
              <input
                className="h-[3rem] border border-cl4 bg-lightgray w-full text-right px-3"
                type="text"
                name="category"
                value={selectedItem["category"]}
                onChange={handleInput}
              />
            </div>
            <div className="flex mb-5">
              <div className="text-right mr-2">
                <label htmlFor="name">Quantity</label>
                <input
                  className="h-[3rem] border border-cl4 bg-lightgray w-full text-right px-3"
                  type="number"
                  name="quantity"
                  value={selectedItem["quantity"]}
                  onChange={handleInput}
                />
              </div>
              <div className="text-right ml-2">
                <label htmlFor="name">Price</label>
                <input
                  className="h-[3rem] border border-cl4 bg-lightgray w-full text-right px-3"
                  type="number"
                  name="price"
                  value={selectedItem["price"]}
                  onChange={handleInput}
                />
              </div>
            </div>
            <div className="text-right mb-5">
              <label htmlFor="name">Description</label>
              <textarea
                className="h-[6.3rem] border border-cl4 bg-lightgray w-full text-right p-3"
                name="description"
                value={selectedItem["description"]}
                onChange={handleInput}
              ></textarea>
            </div>
            <div className="mb-2">
              <img
                className="md:h-[200px] md:w-full border border-cl4"
                src={`${process.env.REACT_APP_API}/${selectedItem.product_image}`}
                alt=""
              />
              <label className="" htmlFor="image">
                <div className="flex items-center justify-end my-4">
                  <div className="w-[max-content] cursor-pointer bg-lightgray text-cl5 flex items-center px-3 py-2 rounded">
                    <FiImage className="text-3xl" />
                    Change Image
                  </div>
                </div>
                <input
                  type="file"
                  name="image"
                  filename={selectedItem.product_image}
                  id="image"
                />
              </label>
            </div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              type="submit"
            >
              Save Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
