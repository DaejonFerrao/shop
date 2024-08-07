import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

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
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/EnquiryForm" element={<EnquiryForm />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
