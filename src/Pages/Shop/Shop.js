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
        <div class='shop-container'>
        <div class='shop-header'>
            <p>Take a look at our <br />Produce</p>
        </div>
        <div class='picture-container'>
            <div class='picture-container-inner'>
                <div class='picture-container-content'>
                <img src={Yam} alt="Yam"></img>
                    <p>Yam</p>
                </div>
                <div class='picture-container-content'>
                <img src={PassionFruit} alt="PassionFruit"></img>
                    <p>PassionFruit</p>
                </div>
            </div>
            <div class='picture-container-inner'>
                <div class='picture-container-content'>
                <img src={Coconuts} alt="Coconuts"></img>
                    <p>Coconuts</p>
                </div>
                <div class='picture-container-content'>
                <img src={Cashew} alt="Cashew"></img>
                    <p>Cashew</p>
                </div>
            </div>
            <div class='picture-container-inner'>
                <div class='picture-container-content'>
                <img src={Birdseye} alt="Birdseye"></img>
                    <p>Birdseye</p>
                </div>
                <div class='picture-container-content'>
                <img src={Mangoes} alt="Manoges"></img>
                    <p>Mangoes</p>
                </div>
            </div>
        </div>
        <a href="#EnquiryForm" class='shop-button'>Order</a>
    </div>
    )
}

export default Shop;