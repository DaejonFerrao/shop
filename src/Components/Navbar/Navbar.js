import "./Navbar.css";

import { NavLink } from "react-router-dom";
import Logo from "../../Assets/C4.png";

const Navbar = () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <div className="navbar-container">
            {/* <div className="logo-container"> */}
                <li> <a href="#Home" className="logo-link">
                    <img src={Logo} alt="Logo" className="Logo" />
                </a>
                </li>
            {/* </div> */}
            <div className="topnav">
                <ul>
                    <li><a href="#AboutUs">About Us</a></li>
                    <li><a href="#Shop">Services</a></li>
                    <li><a href="#ContactUs">Enquire</a></li>
                    <li><a href="#EnquiryForm">Order Now</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;