import "./About.css";

import Fruit1 from "../../Assets/storage.png"
import tick from "../../Assets/tick.png"
import boxes from "../../Assets/boxes.png"
import bucket from "../../Assets/bucket.png"

const About = () => {
    return (
        <div className="About">
            <div className="about-header">
                <h1>Natural and Fresh</h1>
                <p>We pride ourselves on delivering high-quality fruits<br></br>
                    and vegetables straight from the farm to your table.
                </p>
            </div>
            <div className="about-description">
                <div className="about-left">
                    <div className="tick">
                        <img src={tick}></img>
                        <p> Only the finest produce,<br></br> handpicked for your table</p>
                    </div>
                    <div className="tick">
                        <img src={boxes}></img>
                        <p>Fresh fruits and veggies,<br></br> packed with flavour. </p>
                    </div>
                    <div className="tick">
                        <img src={bucket}></img>
                        <p>Top-grade produce,<br></br> reliably delivered.</p>
                    </div>
                </div>
                <div className="about-right">
                    <img src={Fruit1}></img>
                </div>
            </div>
        </div>
    );
};

export default About;