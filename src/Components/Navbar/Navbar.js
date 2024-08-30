import "./Navbar.css";
import { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import Logo from "../../Assets/C1.png";

const Navbar = () => {


    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false);
    }

    return (
        <div className="navbar-container">
            <li className="logo-container">
                <a href="#Home" className="logo-link">
                    <img src={Logo} alt="Logo" className="Logo" />
                </a>
            </li>
            <div className={`topnav ${isActive ? "active" : ""}`}>
                <ul>
                    <li><a href="#AboutUs" className="nav-link" onClick={closeMenu}>About Us</a></li>
                    <li><a href="#Shop" className="nav-link" onClick={closeMenu}>Services</a></li>
                    <li><a href="#ContactUs" className="nav-link" onClick={closeMenu}>Enquire</a></li>
                    <li><a href="#EnquiryForm" className="nav-link" onClick={closeMenu}>Order Now</a></li>
                </ul>
            </div>
            <div className={`hamburger ${isActive ? "active" : ""}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Navbar;