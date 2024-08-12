import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";


import LandingPage from "./Pages/LandingPage/LandingPage";
import BrowserPage from "./Pages/BrowserPage/BrowserPage";


import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Shop from "./Pages/Shop/Shop";
import EnquiryForm from "./Pages/EnquiryForm/EnquiryForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<BrowserPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/EnquiryForm" element={<EnquiryForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
