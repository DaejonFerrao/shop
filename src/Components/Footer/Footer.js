import "./Footer.css";
import Logo from "../../Assets/C2.png"
import { NavLink } from "react-router-dom";

const Footer = () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    return (
        <div>
            <div className="footer">

                <div className="footer-logo">
                    <img src={Logo} alt="logo" href="#Home" />
                </div>

                <div className="footer-content">
                    <div className="footer-contact">
                        <div>
                            <h5>Address</h5>
                            <p>Unit 12 Park Royal Works, <br></br> Park Royal,
                                London NW10 7LQ
                            </p>
                        </div>
                        <div>
                            <h5>Contact</h5>
                            <p>+44 7305767571</p>
                        </div>
                    </div>
                    <div className="vertical-line">

                    </div>
                    <div className="footer-navigation">
                        <ul>
                            <li><a href="">Terms & Agreements</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="#AboutUs">About Us</a></li>
                            <li><a href="">Policy</a></li>
                            <li><a href="">FAQs</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Footer;