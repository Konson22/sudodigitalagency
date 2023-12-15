import { useEffect, useState } from "react";
import axiosInstance from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useGlobalApi } from "../../manager/ContextProvider";

export default function OrderDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItem] = useState([]);
  const { orderCode } = useParams();
  const [totalPrice, setTotalPrice] = useState(0.0);
  const { profile } = useGlobalApi();

  useEffect(() => {
    const getOrder = async () => {
      setIsLoading(true);
      try {
        const results = await axiosInstance
          .post("/orders/single", { orderCode: orderCode })
          .then((res) => res);
        setItem(results.data);
        if (results.data.length) {
          const tPrice = results.data
            .map((i) => i.price * i.quantity)
            .reduce((a, t) => +a + +t);
          setTotalPrice(tPrice);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    profile && getOrder();
  }, [orderCode, profile]);
  return (
    <div className="bg-white p-3 m-4">
      {isLoading && "Loading..."}
      {items.length > 0 && (
        <div className="">
          <div className="flex justify-end items-center">{items[0].code}</div>
          <table className="w-full">
            <thead>
              <tr className="border">
                <td className="p-2 w-[max-content]">price</td>
                <td className="p-2 w-[max-content]">qty</td>
                <td className="p-2 text-right">name</td>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr className={`border`} key={item.order_id}>
                  <td className="w-[max-content] flex items-center p-2">
                    <span>ر.س</span>
                    <span>{item.price}</span>
                  </td>
                  <td className="w-[max-content] p-2">x{item.quantity}</td>
                  <td className="flex justify-end w-full">
                    {item.product_name}
                    <img
                      className="h-10 w-10 ml-3"
                      src={process.env.REACT_APP_API + item.product_image}
                      alt=""
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="px-4 py-3">
        <div className="flex justify-between font-bold">
          <span>{items.length}</span>
          <span>السعر الصافي</span>
        </div>
        <div className="flex justify-between font-bold mt-3">
          <div className="flex items-center">
            <span>ر.س</span>
            <span>{totalPrice}</span>
          </div>
          <span>السعر الإجمالي</span>
        </div>
      </div>
    </div>
  );
}
