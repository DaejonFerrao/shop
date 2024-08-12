import React from 'react';
import { Link } from 'react-router-dom';

const BrowserPage = () => {
  return (
    <div>
        <h1>Browse More Pages</h1>
        <ul>
            <li><Link to="/ContactUs">ContactUs</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/enuiryform">Enquiry Form</Link></li>
        </ul>
    </div>
  );
};

export default BrowserPage;