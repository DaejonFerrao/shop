import "./Navbar.css";

import Logo from "../../Assets/C4.png";

const Navbar = () => {
    return (
        <div class="topnav" id="myTopnav">
            <img src={Logo} alt="Logo" className="Logo"/>
            <a href="/" class="active">Home</a>
            <a className="nav-list" href="Products">Products</a>
            <a className="nav-list" href="ContactUs">Contact</a>
            <a className="nav-list" href="about">About</a>
            <a className="nav-list" href="Shop">Shop</a>
            <a className="nav-list" href="EnquiryForm">Enquiry</a>
        </div>
    );
};

export default Navbar;