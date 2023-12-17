import { Route, Routes } from "react-router-dom";
import ScrollToTop from './hooks/ScrollToTop';
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import WebDevPage from "./pages/WebDev";
import SocialMediaAd from "./pages/SocialMediaAd";


function App() {

  return (
    <div className="text-slate-600 md:text-base text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/web-developement' element={<WebDevPage />} />
        <Route path='/social-media-advert' element={<SocialMediaAd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
