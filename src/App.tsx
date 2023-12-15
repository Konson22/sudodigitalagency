import { Route, Routes } from "react-router-dom";
import ScrollToTop from './hooks/ScrollToTop';
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="text-slate-600 md:text-base text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
