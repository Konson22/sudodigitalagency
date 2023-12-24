import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import SocialMediaMarketingPage from "./pages/socialMediaMarketingPage";
import WebDevelopementPage from "./pages/WebDevelopementPage";
import DomainAndHostingPage from "./pages/DomainAndHostingPage";
import MobileAppDevelopementPage from "./pages/MobileAppDevelopementPage";
import CustomAppDevelopementPage from "./pages/CustomAppDevelopementPage";
import Main from "./pages/main";


function App() {

  return (
    <div className="bg-gray-100 md:text-base text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/digital-marketing' element={<SocialMediaMarketingPage />} />
        <Route path='/domain-and-hosting' element={<DomainAndHostingPage />} />
        <Route path='/web-design' element={<WebDevelopementPage />} />
        <Route path='/mobile-app-development' element={<MobileAppDevelopementPage />} />
        <Route path='/custom-app-development' element={<CustomAppDevelopementPage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
