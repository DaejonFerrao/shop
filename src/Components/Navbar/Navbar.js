import "./Navbar.css";

import Logo from "../../Assets/C4.png";

const Navbar = () => {
    return (
    <div>
        <div>
        <a href="/">  {/* This link navigates to the home page */}
                <img src={Logo} alt="Logo" className="Logo" />
            </a>
        </div>
        <div className="topnav">
            <a className="nav-list" href="about">About Us</a>
            <a className="nav-list" href="Shop">Produce</a>
            <a className="nav-list" href="ContactUs">Contact Us</a>
            <a className="nav-list" href="EnquiryForm">Order Online</a>
        </div>
    </div>
    );
};

export default Navbar;