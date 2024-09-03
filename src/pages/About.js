import React from 'react';
import Navigation from "../components/Navigation";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFile } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className='about'>
      <Navigation/>
      <div className='about-hero'>
        <div className='about-hero-content'>
          <h2>All the features need</h2>
          <p>
             I build responsive, dynamic and authentic website to fit Business needs.
          </p>
          <button className="about-button">Get a Quote</button>
        </div>
        <div className='about-hero-image'>
          <img src="https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Drusilla" className='overlay-image'/>
          <img src="https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Khulwael" className='overlay-image1'/>
        </div>
      </div> 
      <div className="benefits">
        <div className='benefit-header'>
          <FontAwesomeIcon icon={faFile} />
          <h2>The benefit of working with Me</h2>
          <FontAwesomeIcon icon={faUsers}/>
        </div>
        <div className="benefit-contents">
          <div className='benefit-content'>
            <h5>Dynamic Features</h5>
            <p>
               I deliver websites and mobile apps with dynamic, cutting-edge features
               that adapt to user needs, ensuring an engaging and interactive experience.
            </p>
            <p></p>
          </div>
          <div className="benefit-content">
            <h5>Perfectly Responsive</h5>
            <p>
              I create perfectly responsive designs that provide a seamless user experience
              across all devices, enhancing accessibility and satisfaction for every user.
            </p>
          </div>
          <div className="benefit-content">
            <h5>Friendly Support</h5>
            <p>
               I offer friendly and reliable support, ensuring quick resolution of any
               issues and continuous assistance to keep your website or app running smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="client-first">
        <div className="client-first-content">
          <h6>Use Client-first</h6>
          <h2>Top agencies and freelancers around the world use client-first</h2>
          <p>
            This is to prioritize the unique needs and goals of my clients, ensuring tailored solutions and 
            maximum satisfaction. 
          </p>
        </div>
        <div className="client-first-image"></div>
      </div>        
    </div>
  )
}

export default About