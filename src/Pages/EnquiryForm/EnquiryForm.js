import React from 'react'

import "./EnquiryForm.css"
import Veg1 from "../../Assets/Veg2.png"

const EnquiryForm = () => {
    return (

        <div>
            <div className='enquiry-title'>Request a Quote</div>
            <div className="enquiry-desc">Make an inquiry personal for you.
                We provide <br></br>fresh and delicious products to all our customers.
            </div>
            <form className="Enquiry">
                <div className="row-fname">
                    <label for="First Name" placeholder="First Name" name="Name" required>
                        <input type='text' placeholder='First Name' name="psw" required />
                    </label>
                </div>
                <div className='row-lname'>
                    <label for="Last Name" placeholder="Last Name" name="Name" required>
                        <input type='text' placeholder='Last Name' name="psw" required />
                    </label>
                </div>
                <div className='row-email'>
                    <label for="email" placeholder="Enter Email" name="email" required>
                        <input type='text' placeholder='Email Address' name="psw" required />
                    </label>
                </div>
                <div className='row-quantity'>
                    <label for="Enter Quantity" placeholder="Enter Email" name="email" required>
                        <input type='text' placeholder='Quantity' name="psw" required />
                    </label>
                </div>
                <div className='row-product'>
                    <label for="email" placeholder="Enter Email" name="email" required>
                        <input type='text' placeholder='Product Name' name="psw" required />
                    </label>
                </div>
                <div className='row-message'>
                    <label for="email" placeholder="Enter Email" name="email" required>
                        <input type='text' placeholder='Message' name="psw" required />
                    </label>
                </div>
                <button className='enquiry-button'>Send A Request</button>
            </form>
        </div>
    )
}

export default EnquiryForm;