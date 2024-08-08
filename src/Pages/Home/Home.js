import "./Home.css";

import Fruit1 from "../../Assets/fruit1.png";
import Button from "../../Components/Button/Button";



const Home = () => {
 

    return (
        <div className="home">
            <div>
            <img src={Fruit1} alt="Fruit1" className="fruit"/>
            </div>
            <h1 className="title">Welcome to Cedi Fruit and Veg</h1>
            <p className="description">
            Cedi Fruit and Veg is your go-to source for fresh, 
            local and natural produce. We pride ourselves on 
            delivering high-quality fruits and vegetables straight 
            from the farm to your table.
            </p>
            <div className="button-container">
                <Button path="/Shop" text="Products"/>
                <Button path="/Products" text="Services" />
            </div>
        </div>
    );
};

export default Home;