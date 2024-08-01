import "./Footer.css";

const Footer = () => {
    return (
        <div class="footer" id="footer">
            <a href="#home" class="active">Home</a>
            <a href="#news" class="option">News</a>
            <a href="#contact" class="option">Contact</a>
            <a href="#about" class="option">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
        </div>
    );
};

export default Footer;