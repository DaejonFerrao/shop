import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div>
        <div className='enquiry-title'>Need some help</div>
        <div className="enquiry-desc">we are available to help.we are available to help.we are available to help.<br></br>
            we are available to help.we are available to help.we are available to help.we are available to help.<br></br>
            we are available to help.we are available to help.we are available to help.we are available to help.<br></br>
            we are available to help.
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
                    <input type='text' placeholder='Message' name="psw" required />
                </label>
            </div>
            <button className="contact-button">SUMBIT</button>
        </form>
    </div>
    );
};

export default ContactUs;