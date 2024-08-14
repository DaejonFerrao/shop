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
import Newsletter from "./Components/Newsletter/Newsletter";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Routes> */}
      <section id='Home'>
       <Home />
        </section>
        <section id="AboutUs">
        <About />
          </section> 
        <section id="ContactUs">
        <ContactUs />
          </section> 
        <section id="Shop">
        <Shop />
        </section>
        <section id="EnquiryForm">
        <EnquiryForm />
        </section> 

    
      {/* </Routes> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
