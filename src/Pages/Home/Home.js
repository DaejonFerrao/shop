import "./Home.css";

import Fruit1 from "../../Assets/fruit1.png";
import Button from "../../Components/Button/Button";
import FRUIT from "../../Assets/FRUIT.png"

import { useNavigate } from "react-router-dom";

const Home = () => {
 
    const navigateTo = useNavigate();

    return (
        <div className="home">
            <div>
            <img src={FRUIT} alt="Fruit1" className="fruit"/>
            <div className="overlay"></div>
            </div>
            <h1 className="title1"> Cedi Fruit and Veg</h1>
            <p className="description1">
            FRESH LOCAL NATURAL
            </p>
            <div className="button-container1">
                <button className="home-button" onClick={() => navigateTo("Shop")}>Produce</button> 
            </div>
        </div>
    );
};

export default Home;