import "./About.css";

import Fruit1 from "../../Assets/fruit3.png"

const About = () => {
    return (
        <div className="About">
        <div>
        <img src={Fruit1} alt="Fruit1" className="fruit1"/>
        </div>
        <h1 className="title">Uncover the Best in Fresh Produce</h1>
        <p className="description">
        Cedi Fruit and Veg is your go-to source for fresh, 
        local and natural produce. We pride ourselves on 
        delivering high-quality fruits and vegetables straight 
        from the farm to your table.
        </p>
        <div className="button-container">
            <button className="button">Read More</button>
        </div>
    </div>
    );
};

export default About;