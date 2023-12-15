import { useEffect, useState } from "react";
import axiosInstance from "../hooks/useAxios";
import { useParams } from "react-router-dom";


export function CheckoutPage(){

    const [orders, setOrder] = useState([])
    const { code } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await axiosInstance.post(`/products/reservation/code`, {code}).then(res => res)
                setOrder(results.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [code])


    const handleCheckout = async () => {
        if(!code) return
        try {
            const results = await axiosInstance.post(`/products/reservation/checkout`, {code}).then(res => res)
            if(results.status === 200){
                window.location = '../'
            }
        } catch (error) {
            console.log(error)
        }
    }
    const totalPrice = orders.length > 0 && orders.map(o => parseInt(o.price) * parseInt(o.qty)).reduce((i, t) => i + t)

    return(
        <div className="md:flex">
            <div className="flex-1 bg-white shadow border rounded md:mr-3">
                <div className="border-b-2 flex items-center justify-end px-5 py-3">
                    <span className="text-2xl">
                        {code} رمز الحجز
                    </span>
                </div>
                <div className="p-5">
                    <table className="w-full">
                        <thead className="">
                            <tr className="text-right border-b">
                                <th className="px-2 py-3">السعر الكلي</th>
                                <th className="px-2 py-3">السعر</th>
                                <th className="px-2 py-3">الكمية</th>
                                <th className="px-2 py-3">إسم المنتج</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 && orders.map(order => (
                                <tr className="border-t">
                                    <td className="py-2 text-right">{order.price * order.qty}</td>
                                    <td className="py-2 text-right">{order.price}</td>
                                    <td className="py-2 text-right">{order.qty}</td>
                                    <td className="py-2 flex items-center justify-end">
                                        <span>{order.product_name}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-end mt-7 border-t">
                        <div className="w-[250px]">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-xl ">{orders.length}</span>
                                <span>عدد المنتجات</span>
                            </div>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex">
                                    <span>ر.س</span>
                                    <span className="font-bold text-xl">{totalPrice}</span>
                                </div>
                                <span>السعر الكلي</span>
                            </div>
                            <div className="flex justify-end mt-6">
                                <button className="bg-red-500 text-white px-5 py-1 rounded mr-1">Cancel</button>
                                <button className="bg-green-500 text-white px-5 py-2 rounded" onClick={handleCheckout}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow border h-[max-content] md:w-[40%] p-5 md:mt-0 mt-4">
                <div className="">
                    Map
                </div>
            </div>
        </div>
    )
}

