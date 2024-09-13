import React, { useState } from 'react';
import Navigation from "../components/Navigation";
import "./Contact.css";
import Footer from "../components/Footer";
import axios from 'axios';

function Contact() {
    const [values, setValues] = useState({
        full_name: '',
        email: '',
        phone_number: '',
        message: '',
    })
    const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/clients/', values)
        .then(res => console.log("Message sent!"))
        .catch(err => console.error("Error sending message:", err.response ? err.response.data : err.message));

        
    }
  return (
    <div className='contact'>
        <Navigation/>
        <div className="contact-content">
            <div className="contact-header">
                <h1>Contact Me</h1>
                <p>Reach out to get a Quote for your authentic business solutions! </p>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit} action="" method="POST">
                    <div className="form-data">
                        <div className="form-data-input">
                            <label htmlFor='full_name'>Name</label>
                            <input type="text" placeholder='Enter your name' name='full_name'  onChange={handleChange}/>
                        </div>
                        <div className="form-data-input">
                            <label htmlFor='email'>Email</label>
                            <input type="email" placeholder="Enter your Email" name='email'  onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="form-data">
                        <div className='form-data-input'>
                            <label htmlFor='phone_number'>Phone Number</label>
                            <input type="number" placeholder="Enter your number" name='phone_number'  onChange={handleChange}/>
                        </div>
                        {/* <div className='form-data-input'>
                            <label>Subject</label>
                            <select>
                                <option disabled selected>Pick a subject</option>
                                <option>Web Development</option>
                                <option>Mobile App Development</option>
                            </select>
                        </div> */}
                    </div>
                    <div className="form-data-msg">
                        <label htmlFor='message'>Message</label>
                        <textarea col="20" row="4" placeholder='Write your query here' name='message' onChange={handleChange}></textarea>
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