import React from 'react';
import Navigation from "../components/Navigation";
import "./Contact.css";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className='contact'>
        <Navigation/>
        <div className="contact-content">
            <div className="contact-header">
                <h1>Contact Me</h1>
                <p>Reach out to get a Quote for your authentic business solutions! </p>
            </div>
            <div className="contact-form">
                <form action="" method="POST">
                    <div className="form-data">
                        <div className="form-data-input">
                            <label>Name</label>
                            <input type="text" placeholder='Enter your name'/>
                        </div>
                        <div className="form-data-input">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your Email"/>
                        </div>
                    </div>
                    <div className="form-data">
                        <div className='form-data-input'>
                            <label>Phone Number</label>
                            <input type="number" placeholder="Enter your number"/>
                        </div>
                        <div className='form-data-input'>
                            <label>Subject</label>
                            <select>
                                <option disabled selected>Pick a subject</option>
                                <option>Web Development</option>
                                <option>Mobile App Development</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-data-msg">
                        <label>Message</label>
                        <textarea col="20" row="4" placeholder='Write your query here'></textarea>
                    </div>
                    <div className="form-data-btn">
                        <button type="submit" className="contact-button">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact