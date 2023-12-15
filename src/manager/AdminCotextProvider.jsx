import { useState, useContext, createContext, useEffect } from "react";
import axiosInstance from "../hooks/useAxios";

const contextApi = createContext();

export default function AdminCotextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openSidebar, setOpenSidebar] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchData() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/products/reservation").then(
          (res) => res
        );
        if (isMuted) {
          if (results.data.length > 0) {
            const rawData = results.data.map((item) => item.code);
            const ids = [...new Set(rawData)];
            const dt = ids.map((id) => {
              const res = results.data.find((order) => order.code === id);
              return {
                code: id,
                served: res.served,
                collectionTime: res.collectionTime,
                collectionMethod: res.collectionMethod,
              };
            });
            setOrders(dt);
          }
        }
      } catch (error) {
        setMessage("Message");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    return () => {
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteProduct = async (code) => {
    try {
      const results = await axiosInstance
        .post("/products/reservation/delete", { code })
        .then((res) => res);
      if (results.status === 200) {
        setOrders(() => orders.filter((c) => c.code !== results.data.code));
      }
      return { status: true };
    } catch (error) {
      return { status: true, message: "Error Occures!" };
    }
  };

  const values = {
    orders,
    isLoading,
    message,
    openSidebar,
    setOpenSidebar,
    deleteProduct,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useAdminApi = () => useContext(contextApi);
