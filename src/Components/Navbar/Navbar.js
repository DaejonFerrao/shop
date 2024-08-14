import "./Navbar.css";

import { NavLink } from "react-router-dom";
import Logo from "../../Assets/C4.png";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <NavLink to="/" className="logo-link">  {/* This link navigates to the home page */}
                    <img src={Logo} alt="Logo" className="Logo" />
                </NavLink>
            </div>
           
            <div className="topnav">
                <ul>
                <li><a href="#AboutUs" className="nav-list">About Us</a></li>
                <li><a href="#Shop" className="nav-list">Services</a></li>
                <li><a href="#ContactUs" className="nav-list">Enquire</a></li>
                <li><a href="#EnquiryForm" className="nav-list">Order Now</a></li>
                </ul>
            </div>
        </div> 
    //  </div>
    );
};

export default Navbar;