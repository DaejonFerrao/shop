import "./About.css";

import Fruit1 from "../../Assets/storage.png"
import tick from "../../Assets/tick.png"
import boxes from "../../Assets/boxes.png"
import bucket from "../../Assets/bucket.png"

const About = () => {
    return (
        <div className="About">
        <div>
        <img src={Fruit1} alt="Fruit1" className="storage"/>
        </div>
        <h1 className="title">Who we are?</h1>
        <p className="description">
            We pride ourselves on delivering 
            high-quality fruits and
            vegetables straight from the farm to your table
        </p>
        <div className="mobile-title">Natural Fresh and Local</div>
        <div className="property">
            <img src={tick} alt="tick" className="tick" />
            <p className="tick-description">Only the finest produce, handpicked for your table</p>
            <p2 className="mobile-description">Quality</p2>
            <img src={bucket} alt="tick" className="tick" />
            <p className="tick-description">Fresh fruits and veggies, packed with flavour</p>
            <p2 className="mobile-description">Fruit & Veg</p2>
            <img src={boxes} alt="tick" className="tick" />
            <p className="tick-description">Top-grade produce, reliably delivered</p>
            <p2 className="mobile-description">Delivery</p2>
        </div>
        <div className="button-container">
            <button className="about-button">View Our Produce</button>
        </div>
    </div>
    );
};

export default About;