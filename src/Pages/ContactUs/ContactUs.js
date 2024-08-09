import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div>
        <div className='enquiry-title'>Need some help</div>
        <div className="enquiry-desc">Please send us any questions or concerns that<br></br> 
            you may have, we will be happy to assist or help with any errors. 
        </div>
        <form className="Enquiry">
            <div className="contact">Contact Us</div>
            <div className="row-name">
                <label for="First Name" placeholder="First Name" name="Name" required>
                    <input type='text' placeholder='First Name' name="psw" required />
                </label>
            </div>
            <div className='row-laname'>
                <label for="Last Name" placeholder="Last Name" name="Name" required>
                    <input type='text' placeholder='Last Name' name="psw" required />
                </label>
            </div>
            <div className='row-contactmessage'>
                <label for="email" placeholder="Enter Email" name="email" required>
                    <input type='text' placeholder='Message' name="psw" required className="row-contactmessage" />
                </label>
            </div>
            <button className="contact-button">SUMBIT</button>
        </form>
    </div>
    );
};

export default ContactUs;