import { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalApi } from "../../manager/ContextProvider";
import axiosInstance from "../../hooks/useAxios";
import { FiX } from "react-icons/fi";
import { LoaderSvg } from "../../components/Buttons";

export default function UserOrders() {
  const { userOrders, setUserOrders } = useGlobalApi();

  const deleteOrder = async (code) => {
    let res = false;
    try {
      const response = await axiosInstance
        .post("/orders/delete", { code })
        .then((res) => res);
      const newOrders = userOrders.filter(
        (order) => order.code !== response.data
      );
      setUserOrders(newOrders);
      console.log(newOrders);
    } catch (error) {
      console.log(error);
    } finally {
      res = true;
    }
    return res;
  };
  return (
    <div className="md:px-[8%] px-3 my-5">
      <h3 className="text-right text-xl font-bold mb-5">
        قائمة التسوق الخاصة بك
      </h3>
      {userOrders.length > 0 ? (
        <table className="border bg-white table-auto w-full text-right">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-2 py-3 text-left">x</th>
              <th className="px-2 py-3">حالة</th>
              <th className="px-2 py-3">السعر</th>
              <th className="px-2 py-3">عدد المنتجات</th>
              <th className="px-2 py-3">رمز الطلب</th>
            </tr>
          </thead>
          <tbody>
            {userOrders.map((order, index) => (
              <OrderTableBody
                deleteOrder={deleteOrder}
                order={order}
                key={order.code}
                index={index}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-right p-6">
          <p className="mb-5">
            قائمة التسوق الخاصة بك فارغة يرجى البدء في التسوق
          </p>
          <Link className="bg-cl1 text-white rounded px-4 py-2" to="/store">
            ابدأ التسوق
          </Link>
        </div>
      )}
    </div>
  );
}

function OrderTableBody({ order, index, deleteOrder }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await deleteOrder(order.code);
    setIsLoading(false);
  };
  return (
    <tr className={index % 2 ? "bg-gray-200" : ""}>
      <td className="p-2">
        <div
          className="w-[max-content] text-xl p-1 bg-red-400 text-white"
          onClick={handleDelete}
        >
          {isLoading ? <LoaderSvg /> : <FiX />}
        </div>
      </td>
      <td className="p-2">{order.served ? " اتخذت" : "المعلقه"}</td>
      <td className="p-2">{order.totalPrice}</td>
      <td className="p-2">{order.items}</td>
      <td className="p-2">{order.code}</td>
    </tr>
  );
}

// function OrderCard({ order, deleteOrder }) {

//   return (
//     <div className="bg-white p-5">
//       <div className="flex items-center justify-between mb-3">
//         <span
//           className={`px-4 py-1 text-white rounded ${
//             order.served ? "bg-green-400" : "bg-rose-500"
//           }`}
//         >
//           {order.served ? "Served" : "Pending"}
//         </span>
//         <div className="flex">
//           <span>{order.code}</span>
//           <span>رمز الطلب</span>
//         </div>
//       </div>
//       <div className="flex items-center mb-3">
//         <span>{order.items}</span>
//         <span className="border border-dotted flex-1 mx-3"></span>
//         <span>عدد المنتجات</span>
//       </div>
//       <div className="flex items-center mb-3">
//         <span>{order.totalPrice}</span>
//         <span className="border border-dotted flex-1 mx-3"></span>
//         <span>السعر الإجمالي</span>
//       </div>
//       <div className="flex items-center mb-3">
//         <span>{formateTime(order.collectionTime).text}</span>
//         <span className="border border-dotted flex-1 mx-3"></span>
//         <span>وقت الاستلام</span>
//       </div>
//       <div className="flex items-center mb-3">
//         <span>{order.collectionMethod}</span>
//         <span className="border border-dotted flex-1 mx-3"></span>
//         <span>طريقة الاستلام</span>
//       </div>
//       <div className="flex items-center justify-end mt-3">
//         <Link
//           className="
//           py-1 px-3 flex justify-center items-center  bg-green-500 hover:bg-green-500/80 focus:ring-blue-500
//           focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm
//           font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 mr-2 rounded
//         "
//           to={`/view-order/${order.code}`}
//         >
//           View
//         </Link>
//         {isLoading ? (
//           <LoadingButton />
//         ) : (
//           <button
//             className="
//           py-1 px-3 flex justify-center items-center  bg-cl4 hover:bg-cl4/80 focus:ring-blue-500
//           focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm
//           font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded
//         "
//
//           >
//             remove
//           </button>
//         )}
//       </div>
//     </div>
//   );
// }
