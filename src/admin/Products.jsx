import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FiTrash } from "react-icons/fi";
import { LoadingButton } from "../components/Buttons";
import axiosInstance from "../hooks/useAxios";
// import { useAdminApi } from "../manager/AdminCotextProvider";
import { categories } from "../assets/staticData";
import { useGlobalApi } from "../manager/ContextProvider";

export default function Products() {
  const { isLoading, candy } = useGlobalApi();
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (candy.length > 0) {
      setData(candy);
      setMessage("");
    } else {
      setMessage("No data found!.");
    }
  }, [candy, isLoading]);

  const deleteProduct = async (id) => {
    setLoading(true);
    try {
      const results = await axiosInstance
        .post("/products/delete", { id })
        .then((res) => res);
      setData(() => candy.filter((c) => c.productID !== results.data.id));
      setLoading(false);
    } catch (error) {
      if (
        error.status === 404 ||
        error.status === 403 ||
        error.status === 500
      ) {
        return setMessage(error?.response?.data);
      }
      setMessage("Error Occures!");
    }
  };

  return (
    <div className="md:mt-8">
      {message && <div className="">{message}</div>}
      <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-1">
        {isLoading && <div className="">Loading...</div>}
        {!isLoading &&
          data.length > 0 &&
          data.map((item) => (
            <div
              className="bg-white rounded-md overflow-hidden shadow-md mb-1 p-2"
              key={item.productID}
            >
              <div className="block md:h-[200px] h-[160px] md:w-full">
                <img
                  src={`${process.env.REACT_APP_API}/${item.product_image}`}
                  alt=""
                />
              </div>
              <div className="md:p-3 p-3">
                <p className="text-xl text-right font-bold text-slate-500 line-clamp-1">
                  {item.name}
                </p>
                <p className="text-right line-clamp-1">{item.description}</p>
                <div className="md:flex items-center justify-between mt-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="md:fontbold flex items-center justify-end md:w-auto w-full">
                      <span>ر.س</span>
                      <h4 className="md:text-2xl text-xl text-cl4">
                        {item.price}
                      </h4>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Link
                      className="flex items-center bg-green-500 text-white px-2 text-sm py-1 rounded mr-2"
                      to={`/admin/edit/${item.productID}`}
                    >
                      <span className="">
                        <FaRegEdit />
                      </span>
                      Edit
                    </Link>
                    {loading ? (
                      <LoadingButton />
                    ) : (
                      <button
                        className="
                        py-1 px-3 flex justify-center items-center  bg-cl4 hover:bg-cl4/80 focus:ring-blue-500 
                        focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm 
                        font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded
                      "
                        onClick={() => deleteProduct(item.productID)}
                      >
                        <FiTrash />
                        ازاله
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function CategoriesLinks({ handleAction }) {
  return (
    <div className="md:flex hidden flex-wrap justify-end">
      {categories.map((category) => (
        <span
          className="md:h-[3rem] h-auto bg-whitee rounded cursor-pointer flex items-center ml-2 px-4 border"
          onClick={() => handleAction(category.name)}
        >
          {category.name}
        </span>
      ))}
      <span
        className="bg-whitee rounded cursor-pointer flex items-center ml-2 px-4 border"
        onClick={() => handleAction("all")}
      >
        All
      </span>
    </div>
  );
}
