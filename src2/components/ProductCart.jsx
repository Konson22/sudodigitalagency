import { useGlobalApi } from "../manager/ContextProvider";
import { FiHeart, FiMinus, FiPlus, FiShoppingCart, FiX } from "react-icons/fi";
import { useState } from "react";

export default function ProductCart({ item }) {
  const { addItemToCart } = useGlobalApi();
  const [isOpen, setIsOpen] = useState(false);
  const [qty, setQty] = useState(1);
  const [message, setMessage] = useState("");

  const handleAddItem = () => {
    const obj = {
      productID: item.productID,
      name: item.name,
      price: item.price,
      qty,
      product_image: item.product_image,
    };
    const res = addItemToCart(obj);
    res ? setMessage(res) : setIsOpen(false);
  };

  const displayItemDetails = () => (
    <div className="h-screen flex items-center justify-center bg-black/50 fixed inset-0 z-50">
      <div className="md:w-[50%] w-[90%] md:flex bg-white relative rounded-md shadow-md shadow-black/50 p-2">
        <span
          className="absolute right-[-.7rem] top-[-.7rem] bg-gray-200 hover:bg-rose-700 border border-rose-700 text-rose-700 hover:text-white text-2xl hover:text-xl rounded-full p-1"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </span>
        <div className="md:h-[350px] h-[250px] flex-1 rounded-md overflow-hidden">
          <img
            className="rounded-md"
            src={`${process.env.REACT_APP_API}/${item.product_image}`}
            alt=""
          />
        </div>
        <div className="md:w-[40%] md:flex flex-col justify-evenly p-4">
          <h3 className="md:text-2xl text-right font-bold mb-3">{item.name}</h3>
          <p className="text-right">{item.description}</p>
          <h4 className="font-bold text-right text-rose-600 my-4">
            ر.س {item.price}
          </h4>
          <div className="flex justify-end">
            <div className="flex items-center mr-3">
              <span
                className="cursor-pointer flex items-center justify-center rounded-full bg-gray-100 p-1"
                onClick={() => qty !== 1 && setQty(qty - 1)}
              >
                <FiMinus />
              </span>
              <span className="text-xl font-bold px-3">{qty}</span>
              <span
                className="cursor-pointer flex items-center justify-center rounded-full bg-gray-200 p-1"
                onClick={() => setQty(qty + 1)}
              >
                <FiPlus />
              </span>
            </div>
            <button
              className="bg-cl1 text-white rounded px-3 py-1"
              onClick={handleAddItem}
            >
              Add to cart
            </button>
          </div>
          {message && <div className="text-rose-600 mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-md mb-2">
      {isOpen && displayItemDetails()}
      <div className="block md:h-[200px] h-[170px] md:w-full">
        <img
          src={`${process.env.REACT_APP_API}/${item.product_image}`}
          alt=""
        />
      </div>
      <div className="p-3">
        <p className="text-xl text-right font-bold text-slate-500 line-clamp-1">
          {item.name}
        </p>
        <div className="md:fontbold flex items-center justify-end">
          <span>ر.س</span>
          <h4 className="md:text-2xl text-xl text-rose-600">{item.price}</h4>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="flex items-center">
            <FiHeart className="text-3xl" />
            <span className="text-">20</span>
          </span>
          <button
            className="flex items-center justify-center bg-cl1 text-white py-1 px-3 rounded ml-4"
            onClick={() => setIsOpen(true)}
          >
            إضافة
            <FiShoppingCart className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
