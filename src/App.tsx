import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import WebDesignPage from "./pages/WebDesignPage";
import DigitalMarketingPage from "./pages/DigitalMarketingPage";
import GraphicDesignPage from "./pages/GraphicDesignPage";
import MobileAppDevelopmentPage from "./pages/MobileAppDevelopmentPage";
import SeoPage from "./pages/SeoPage";
import CustomAppDevelopmentPage from "./pages/CustomAppDevelopmentPage";
import LegalInfo from "./pages/LegalInfo";
import { useContextApi } from "./context-manager/ContextProvider";
import QuotationForm from "./components/QuotationForm";
import TermAndCondition from "./pages/TermAndCondition";


function App() {

  const { openModal, toggleModal } = useContextApi()
  return (
    <div className="bg-gray-100 md:text-base">
      <ScrollToTop />
      {openModal && <QuotationForm toggleModal={toggleModal} />}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/seo' element={<SeoPage />} />
        <Route path='/web-design' element={<WebDesignPage />} />
        <Route path='/digital-marketing' element={<DigitalMarketingPage />} />
        <Route path='/graphic-design' element={<GraphicDesignPage />} />
        <Route path='/legal-info' element={<LegalInfo />} />
        <Route path='/term-and-condition' element={<TermAndCondition />} />
        <Route path='/custom-app-development' element={<CustomAppDevelopmentPage />} />
        <Route path='/mobile-app-development' element={<MobileAppDevelopmentPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
