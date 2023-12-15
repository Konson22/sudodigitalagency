import { useState, useContext, createContext, useEffect } from "react";
import axiosInstance from "../hooks/useAxios";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config";

const contextApi = createContext();

export default function GlobalContextProvider({ children }) {
  const [cartData, setCartData] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [showForm, setShowForm] = useState(null);
  const [message, setMessage] = useState("");
  const [candy, setCandy] = useState([]);
  const [userOrders, setUserOrders] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const savedCartItem = JSON.parse(localStorage.getItem("candy-cart"));
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setProfile(null);
      })
      .catch((err) => console.log(err));
    logOut();
    setUserOrders([]);
  };

  const logOut = async () => {
    try {
      const response = await axiosInstance("/auth/logout").then((res) => res);
      console.log(response.data);
    } catch (error) {}
  };
  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;
    async function fetchResumies() {
      setIsLoading(true);
      try {
        const results = await axiosInstance("/products").then((res) => res);
        if (isMuted) {
          setCandy(results.data);
        }
      } catch (error) {
        if (
          error.status === 404 ||
          error.status === 403 ||
          error.status === 500
        ) {
          return setMessage(error?.response?.data);
        }
        setMessage("Error Occures!");
      } finally {
        setIsLoading(false);
      }
    }
    savedCartItem && setCartData(savedCartItem);
    fetchResumies();
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setProfile({
          name: user.displayName,
          email: user.email,
          userID: user.uid,
          avatar: user.photoURL,
        });
      }
    });
    verifyAuth();
    return () => {
      listen();
      controller.abort();
      isMuted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let isMuted = true;

    // GET CURRENT USER ORDERS
    const myOrders = async () => {
      try {
        const results = await axiosInstance
          .post("/orders/user-orders", { userID: profile.userID })
          .then(async (res) => res);

        const rawData = results.data.map((item) => item.code);
        const ids = [...new Set(rawData)];
        const dt = ids.map((id) => {
          const res = results.data.filter((order) => order.code === id);
          const totalPrice = res
            .map((i) => i.price * i.quantity)
            .reduce((a, b) => +a + +b, 0);
          return {
            totalPrice,
            userID: res[0].userID,
            items: res.length,
            code: res[0].code,
            served: res[0].served,
            collectionTime: res[0].collectionTime,
            collectionMethod: res[0].collectionMethod,
          };
        });
        isMuted && setUserOrders(dt);
      } catch (error) {
        if (error.response) {
          console.log(error.response?.data);
        } else {
          console.log(error.message);
        }
      }
    };
    profile && myOrders();
    return () => {
      controller.abort();
      isMuted = false;
    };
  }, [profile]);

  const verifyAuth = async () => {
    try {
      const results = await axiosInstance.get("/auth").then(async (res) => res);
      setProfile(results.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response?.data);
      } else {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  //  ADD NEW ITEM INTGO CART
  const addItemToCart = (item) => {
    let respose = null;
    if (cartData.length > 0) {
      const result = cartData.find((i) => i.productID === item.productID);
      if (result) {
        respose = "تمت الإضافة مرة أخرى";
      }
      const newCart = [...cartData, { ...item, id: generateCode() }];
      setCartData(newCart);
      saveToLocalStorage("candy-cart", newCart);
    } else {
      setCartData([item]);
      localStorage.setItem(
        "candy-cart",
        JSON.stringify([{ ...item, id: generateCode() }])
      );
    }
    return respose;
  };

  // REMOVE ITEM FROM CART
  const removeItem = (id) => {
    const result = savedCartItem.filter((item) => item.id !== id);
    setCartData(result);
    if (result.length > 0) {
      saveToLocalStorage("candy-cart", result);
    } else {
      localStorage.clear("candy-cart");
    }
  };

  const clearSavedCartItem = () => {
    localStorage.removeItem("candy-cart");
    setCartData([]);
  };

  const sendMessage = () => {
    const encodedMessage = encodeURIComponent("Hii");
    const confirmationMessage =
      "سيتم توجيهك إلى واتساب. يرجى مشاركة موقعك للتوصيل. هل ترغب في المتابعة؟";
    if (window.confirm(confirmationMessage)) {
      window.location.href =
        "https://wa.me/+249919913063?text=" + encodedMessage;
    }
  };

  const values = {
    cartData,
    profile,
    candy,
    isLoading,
    message,
    userOrders,
    showForm,
    isCheckingOut,
    showSearchBar,
    setShowSearchBar,
    setIsCheckingOut,
    setShowForm,
    signOutUser,
    sendMessage,
    setUserOrders,
    setCandy,
    setCartData,
    setProfile,
    removeItem,
    addItemToCart,
    clearSavedCartItem,
  };
  return <contextApi.Provider value={values}>{children}</contextApi.Provider>;
}

export const useGlobalApi = () => useContext(contextApi);

export const saveToLocalStorage = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

function generateCode() {
  return Math.floor(1000 + Math.random() * 9000);
}
// const saveReservationToLocalStorage = (data) => {
//   localStorage.setItem("candy-cart", JSON.stringify(data));
// };
