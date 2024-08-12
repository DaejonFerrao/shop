import "./Navbar.css";

import { NavLink } from "react-router-dom";
import Logo from "../../Assets/C2.png";

const Navbar = () => {
    return (
    <div className="navbar-container">
        <div className="logo-container">
        <NavLink to="/" className="logo-link">  {/* This link navigates to the home page */}
                <img src={Logo} alt="Logo" className="Logo" />
            </NavLink>
        </div>
        <div className="topnav">
            <NavLink
            to="/Shop" 
            className="nav-list" /*href="Shop" */
            activeClassName="active"
            >Produce
            </NavLink>
            <NavLink 
            to="/ContactUs"
            className="nav-list" /*href="ContactUs" */
            activeClassName="active"
            >Enquire
            </NavLink>
            <NavLink
            to="/EnquiryForm"
            className="nav-list"
            activeClassName="active" /*href="EnquiryForm"*/
            >Order Online
            </NavLink>
        </div>
        <div className="underline"></div>
    </div>
    );
};

export default Navbar;