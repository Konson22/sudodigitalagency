import { Link } from "react-router-dom";
import { formateTime } from "../components/formateTime";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { useAdminApi } from "../manager/AdminCotextProvider";

export default function Dashboard() {
  const { isLoading, orders } = useAdminApi();

  const headingData = [
    {
      title: "جميع الطلبات",
      bg: "bg-cl2/50",
      text: "grad grad1",
      count: orders.length,
      iconImage: "/images/admin_dashboard/all-orders.png",
      path: "/admin/orders",
    },
    {
      title: "الطلبات المعلقة",
      bg: "bg-cl5/50",
      text: "grad grad2",
      count: orders.length,
      iconImage: "/images/test.png",
      path: "/admin",
    },
    {
      title: "الطلبات المكتملة",
      bg: "bg-cl1/50",
      text: "grad grad3",
      count: 0,
      iconImage: "/images/confirm.png",
      path: "/admin",
    },{
    title: "الطلبات المسترجعة",
    bg: "bg-cl3/50",
    text: "grad grad4",
    count: 25,
    iconImage: "/images/admin_dashboard/cancelled-orders",
    path: "/admin",
  },
  {
    title: "الطلبات الملغية",
    bg: "bg-cl3/50",
    text: "grad grad4",
    count: 25,
    iconImage: "/images/admin_dashboard/cancelled-orders.png",
    path: "/admin/orders",
  },
    {
      title: "الزبائن",
      bg: "bg-cl3/50",
      text: "grad grad4",
      count: 25,
      iconImage: "/images/target.png",
      path: "/admin",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {headingData.map((c, index) => (
          <Link
            className={`md:flex justify-between items-center bg-white rounded md:py-5 shadow p-4`}
            key={index}
            to={c.path}
          >
            <div className="md:h-[70px] md:w-[70px] h-[50px] w-[50px]">
              <img src={process.env.PUBLIC_URL + c.iconImage} alt="" />
            </div>
            <div className="md:flex-col flex items-end justify-between">
              <span className={`${c.text} md:text-6xl text-4xl font-bold`}>
                {c.count}
              </span>
              <div
                className={`${c.text} md:text-xl font-bold mb-2 text-center`}
              >
                {c.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="md:flex mt-5">
        {!isLoading && orders.length > 0 && (
          <PendingOrderCard orders={orders.filter((i) => i.served === 0)} />
        )}
        <div className="flex-1 bg-white rounded border md:mt-0 mt-6">
          <div className="bg-lightgray/30 flex justify-between items-center border-b px-5 py-2">
            <h3 className="text-xl font-bold flex-1 text-right">
              قائمة الطلبات
            </h3>
          </div>
          <div className="p-3">
            <img
              className="md:h-[300px] w-full"
              src={process.env.PUBLIC_URL + "/images/map.png"}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

function PendingOrderCard({ orders }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex-1 bg-white rounded border md:mr-5">
      <div className="bg-lightgray/30 flex justify-between items-center border-b px-5 py-2">
        <h3 className="text-xl font-bold flex-1 text-right">قائمة الطلبات</h3>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-end mb-8">
          <div className="bg-lightgray/50 flex md:w-[150px]">
            <input
              type="search"
              className="h-[2.2rem] w-full bg-transparent text-right px- border"
              placeholder="...البحث"
            />
          </div>
          <div
            className="h-[2.2rem] flex items-center relative bg-lightgray px-3 ml-2"
            onClick={() => setOpen(!open)}
          >
            <span className="mx-2">Filter</span>
            <FiFilter />
            {open && (
              <div className="absolute left-0 top-full bg-gray-200 rounded w-[150px]">
                <div className="px-5 py-2 border-b">All orders</div>
                <div className="px-5 py-2 border-b">Served orders</div>
                <div className="px-5 py-2 border-b">Served orders</div>
              </div>
            )}
          </div>
        </div>
        <table className="w-full text-right">
          <thead>
            <tr>
              <th className="text-left">الاجراء</th>
              <th>الوقت المتبقي</th>
              <th>رمز الحجز</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 &&
              orders.map((item) => {
                const fTime = formateTime(item.collectionTime);
                return (
                  <tr className={`border-y ${fTime.bg}`} id={item.id}>
                    <td className="text-left">
                      <Link
                        className="bg-cl4 text-white rounded px-3 py-2 mr-2"
                        to={`/admin/checkout/${item.code}`}
                      >
                        حفظ
                      </Link>
                    </td>
                    <td className="">{fTime.text}</td>
                    <td className="py-1">{item.code}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
