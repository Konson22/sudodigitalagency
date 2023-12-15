import { useState } from "react";
import { useGlobalApi } from "../manager/ContextProvider";

export default function ItemCard({ item }) {
  const [val, setVal] = useState(1);
  const { addItemToCart } = useGlobalApi();
  const [message, setMessage] = useState("");

  const handleAddItem = () => {
    const res = addItemToCart({
      productID: item.productID,
      name: item.name,
      price: item.price,
      qty: val,
      product_image: item.product_image,
    });
    res && setMessage(res);
  };

  message &&
    setTimeout(() => {
      setMessage("");
    }, 4000);

  return (
    <div>
      <div className="md:h-[150px] h-[150px] rounded overflow-hidden relative">
        <img
          src={`${process.env.REACT_APP_API}/${item.product_image}`}
          alt=""
        />
        {message && (
          <span className="absolute bottom-0 right-0 text-white bg-cl1/70 rounded-md p-3 text-sm mb-2 block">
            {message}
          </span>
        )}
      </div>
      <div className="bg-white p-3">
        <p className="text-right line-clamp-2">
          قائمتنا مليئة بالكعك الطازج، من الكعك الكلاسيكي إلى الإبداعات الفريدة
          التي تناسب جميع الأذواق. يتم اختيار
        </p>
        <div className="flex justify-between">
          <span className="flex items-center justify-end mb-3">
            <span className="font-bold">{item.quantity}5</span>
            <span> متبقية</span>
          </span>
          <span className="flex items-center justify-end mb-3">
            <span>ر.س</span>
            <span className="font-bold">{item.price}</span>
          </span>
        </div>
        <div className="flex items-center justify-between h-7">
          <div className="flex items-center">
            <div
              className="
                text-xl bg-cl1 text-white flex items-center justify-center h-6 w-6 rounded
              "
              onClick={() => val !== 1 && setVal(val - 1)}
            >
              -
            </div>
            <div className="mx-2">{val}</div>
            <div
              className="text-xl bg-cl1 text-white flex items-center justify-center h-6 w-6 rounded"
              onClick={() => setVal(val + 1)}
            >
              +
            </div>
          </div>
          <div
            className="h-full flex items-center border border-cl1 px-3 rounded -3"
            onClick={handleAddItem}
          >
            <span>إضافة</span>
            {/* <FiShoppingCart /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
