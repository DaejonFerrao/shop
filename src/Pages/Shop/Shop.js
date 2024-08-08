import React from 'react'
import "./Shop.css";

import Veg1 from "../../Assets/Veg1.png"
import Veg2 from "../../Assets/Veg2.png"
import Veg3 from "../../Assets/Veg3.png"
import Veg4 from "../../Assets/Veg4.png"
import Veg5 from "../../Assets/Veg5.png"
import Veg6 from "../../Assets/Veg6.png"

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Shop = () => {

    const navigateTo = useNavigate();

    return (
     <div>
        <div className="final">
            <div className='test'>Our Products</div>
            <div className="information">
                Fresh and delicious, our fruits and handpicked<br></br>
                to provide the best quality and flavour.
            </div>
            <div className="article">
                <img src={Veg1} alt="Veg1" className="picture" />
                <header>Yam</header>
            </div>
            <div className="article-2">
            <img src={Veg2} alt="Veg1" className="picture" />
                <header>Cashew Nuts</header>
            </div>
            <div className="article-3">
            <img src={Veg3} alt="Veg1" className="picture" />
                <header>Birdseye Chilies</header>
            </div>
            <div className="article-4">
            <img src={Veg4} alt="Veg1" className="picture" />
                <header>Passion Fruit</header>
            </div>
            <div className="article-5">
                <img src={Veg5} alt="Veg5" className="picture" />
                <header>Coconuts</header>
            </div>
            <div className="article-6">
                <img src={Veg6} alt="Veg6" className="picture" />
                <header>Mangoes</header>
            </div>
           <div>
            <div className='title-3'>Want to make an enquiry?</div>
            <p><a className="button-1" onClick={() => navigateTo("/EnquiryForm")}>Enquire Now</a> </p>
            {/* <button className="button-1">Please enquire here</button> */}
           </div>
        </div>
    </div>
    )
}

export default Shop;