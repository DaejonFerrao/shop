import React from 'react'
import "./Shop.css";

import Veg1 from "../../Assets/Veg1.png"
import Veg2 from "../../Assets/Veg2.png"
import Veg3 from "../../Assets/Veg3.png"
import Veg4 from "../../Assets/Veg4.png"
import Veg5 from "../../Assets/Veg5.png"
import Veg6 from "../../Assets/Veg6.png"

import Passion from "../../Assets/passion.png";
import Coconuts from "../../Assets/coconuts.png";
import Cashew from "../../Assets/cashew.png";
import Mangoes from "../../Assets/mangoes.jpg";
import Chillies from "../../Assets/chillies.png";
import Yam from "../../Assets/yam.jpg";
import Birdseye from "../../Assets/birdseye.png";
import PassionFruit from "../../Assets/PassionFruit.jpg"
import Yams from "../../Assets/Yams.png";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Shop = () => {

    const navigateTo = useNavigate();

    return (
        <div>
            <div className='shop-container'>
                <div className='shop-header'>
                    <p>Take a look at our <br></br>Produce</p>
                </div>
                <div className='picture-container'>
                    <img src={Yam} alt="Yam"></img>
                    <p>Yam</p>
                    <img src={Coconuts} alt="Coconuts"></img>
                    <p>Coconuts</p>
                    <img src={PassionFruit} alt="PassionFruit"></img>
                    <p>Passion Fruit</p>
                    <img src={Cashew} alt="Cashew"></img>
                    <p>Cashew Nuts</p>
                    <img src={Mangoes} alt="Mangoes"></img>
                    <p>Mangoes</p>
                </div>
                <div className="shop-button-container">
                    <li><a href="#EnquiryForm" className='shop-button' >Order Now</a></li>
                </div>
            </div>
        </div>
    )
}

export default Shop;