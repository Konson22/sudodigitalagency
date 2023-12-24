import { Route, Routes } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Navbar from "./components/navbar";
import HomePage from "./pages/home";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";


function App() {

  return (
    <div className="bg-gray-100 md:text-base text-sm">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
