import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Products from '../Products/Products';
import Shop from "../Shop/Shop";


const LandingPage = () => {
  return (
    <div>
      <section id="/">
        <Home />
        </section>
        <section id="/About">
        <About />
        </section>
        <section>
        <Shop id="/Shop" />
        </section>
    </div>
  )
}

export default LandingPage;
