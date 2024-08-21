import "./Home.css";

import Fruit1 from "../../Assets/fruit1.png";
import Button from "../../Components/Button/Button";
import FRUIT from "../../Assets/FRUIT.png"

import { useNavigate } from "react-router-dom";

const Home = () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const navigateTo = useNavigate();

    return (
        <div className="home">
            <div className="home-inner">
                <div className="title1">
                    <h1> Cedi Fruit and Veg</h1>
                    <p>
                        FRESH LOCAL NATURAL
                    </p>
                    <a href="#Shop" className="home-button">View Our Produce</a>
                </div>
            </div>
        </div>
    );
};

export default Home;