import "./Footer.css";
import Logo from "../../Assets/C2.png"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <NavLink to="/" className="logo-link">  {/* This link navigates to the home page */}
                <img src={Logo} alt="Logo" className="footer-Logo" />
            </NavLink>
            <div>
                <div className="address">Address</div>
                <p className="address-p">Unit 12 Park Royal Works, Park Royal,<br></br>
                    London NW10 7LQ
                </p>
                <div>
                    <div className="footer-contact">Contact</div>
                    <p className="footer-contact-p">+44 7305767571</p>
                </div>
            </div>
        <div className="footer-nav">
            <a href="/" class="nav-list">Home</a>
            <a href="/contact" class="nav-list">Contact</a>
            <a href="/About" class="nav-list">About</a>
        </div>
        </div>
    );
};

export default Footer;