import { useState } from "react";
import { Button, LoadingButton } from "../components/Buttons";
import { formateTime } from "../components/formateTime";
import { useAdminApi } from "../manager/AdminCotextProvider";

export default function Orders() {
  const { isLoading, orders, deleteProduct } = useAdminApi();
  return (
    <div className="">
      {isLoading && "Loading................."}
      <div className="md:flex justify-between">
        <div className="md:w-[49%] bg-white rounded-md shadow p-5">
          <div className="flex items-center justify-between mb-6">
            <div className="bg-gray-50 overflow-hidden rounded flex md:w-[200px]">
              <input
                type="search"
                className="h-[2.5rem] w-full bg-transparent px-3 border"
                placeholder="Search by code"
              />
            </div>
            <h2 className="text-2xl">الطلبات</h2>
          </div>
          {orders.length > 0 && (
            <table className="w-full border text-right">
              <thead className="border-b">
                <tr className="">
                  <td className="px-3 py-2 text-left">Actions</td>
                  <td className="px-3 py-2">الوقت المتبقي</td>
                  <td className="px-3 py-2">رمز الحجز</td>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <OrderRow order={order} deleteProduct={deleteProduct} />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="md:w-[49%] bg-white  rounded-md shadow p-5 md:mt-0 mt-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl">Served Orders</h2>
            <div className="bg-white flex md:w-[200px]">
              <input
                type="search"
                className="h-[2.5rem] w-full bg-white px-3 border"
                placeholder="Search by code"
              />
            </div>
          </div>
          {!isLoading && orders.length > 0 && (
            <table className="w-full border text-right">
              <thead className="border font-bold">
                <tr>
                  <td className="px-3 py-3 text-left">Actions</td>
                  <td className="px-3 py-3">الوقت المتبقي</td>
                  <td className="px-3 py-3">رمز الحجز</td>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr className="border-b" key={order.id}>
                      <td className="text-left px-3 py-1">
                        <Button text="ازاله" />
                      </td>
                      <td className="flex justify-end px-3 py-1">
                        {formateTime(order.collectionTime).text}
                      </td>
                      <td className="px-3 py-2">{order.code}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

function OrderRow({ order }) {
  const { deleteProduct } = useAdminApi();

  const [loading, setLoading] = useState(false);

  const handleDelete = async (code) => {
    setLoading(true);
    await deleteProduct(code);
    setLoading(false);
  };
  return (
    <tr className="" key={order.id}>
      <td className="text-left px-3 py-1 border-b">
        {loading ? (
          <LoadingButton />
        ) : (
          <button
            className="
            py-1 px-3 flex justify-center items-center  bg-cl4 hover:bg-cl4/50
          focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-sm 
            font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded
          "
            onClick={() => handleDelete(order.code)}
          >
            ازاله
          </button>
        )}
      </td>
      <td className="flex justify-end px-3 py-1 border-b">
        {formateTime(order.collectionTime).text}
      </td>
      <td className="px-3 py-2">{order.code}</td>
    </tr>
  );
}
