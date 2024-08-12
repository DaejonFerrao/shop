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

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Shop = () => {

    const navigateTo = useNavigate();

    return (
     <div>
        <div className="final">
            {/* <div className='test'>Produce</div> */}
            <div className="information">
               Take a look at our Produce
            </div>
            <div className="article">
                <img src={Cashew} alt="Veg1" className="picture-1" />
                <header className="name">Cashew Nuts</header>
            </div>
            <div className="article-2">
            <img src={Coconuts} alt="Veg1" className="picture-2" />
                <header className='name-1'>Coconuts</header>
            </div>
            <div className="article-3">
            <img src={Passion} alt="Veg1" className="picture-3" />
                <header className='name-2'>Passion Fruit</header>
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
           </div>
        </div>
    </div>
    )
}

export default Shop;