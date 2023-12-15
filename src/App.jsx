import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";
import Notfound from "./pages/Notfound";
import { AdminRoutes, LoginRoutes, UsersRoutes } from "./AppRoutes";
import Dashboard from "./admin/Dashboard";
import Login from "./pages/Login";
import Orders from "./admin/Order";
import Products from "./admin/Products";
import EditProduct from "./admin/EditProduct";
import { CheckoutPage } from "./admin/Checkout";
import Upload from "./admin/Upload";
import ShoppingCard from "./pages/ShoppingCard";
import ShopPage from "./pages/ShopPage";
// import Checkout from "./pages/Checkout";
import HomePage from "./pages/main";
import UserOrders from "./pages/userOrders";
import OrderDetails from "./pages/userOrders/OrderDetails";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-gray-100 text-gray-500">
        <ScrollToTop />
        <Routes>
          {/* PROTECTED ROUTES */}
          <Route path="/admin" element={<AdminRoutes />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="checkout/:code" element={<CheckoutPage />} />
            <Route path="upload" element={<Upload />} />
          </Route>
          {/* UNPROTECTED ROUTES */}
          <Route path="/" element={<UsersRoutes />}>
            <Route index element={<HomePage />} />
            <Route path="store" element={<ShopPage />} />
            <Route path="my-orders" element={<UserOrders />} />
            <Route path="view-order/:orderCode" element={<OrderDetails />} />
            <Route path="shopping-cart" element={<ShoppingCard />} />
          </Route>
          <Route path="admin/login" element={<LoginRoutes />}>
            <Route path="" element={<Login />} />
          </Route>
          {/* <Route path="/admin/login" element={<Login />} /> */}
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

function Loader() {
  return (
    <div className="bg-white text-xl flex items-center justify-center h-[100dvh]">
      <div className="flex">
        <div className="rounded-full mx-2 loader l1 border border-cl1"></div>
        <div className="rounded-full mx-2 loader l2 border border-cl1"></div>
        <div className="rounded-full mx-2 loader l3 border border-cl1"></div>
        <div className="rounded-full mx-2 loader l4 border border-cl1"></div>
      </div>
    </div>
  );
}
export default App;
