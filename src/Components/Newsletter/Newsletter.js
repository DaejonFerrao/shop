import React from 'react'
import "./Newsletter.css";

const newsletter = () => {
  return (
    <div className="news-container">
    <div className='heading'>Want to keep updated on what's new?</div>
        <p className='news-description'>Sign Up to our newsletter today</p>
         <input className='news-email' type="text" placeholder="Email Address" name="mail" required></input>
         <button className="news-button">SUMBIT</button>
    </div>
  )
}

export default newsletter;