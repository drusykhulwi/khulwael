import React from 'react';
import Navigation from "../components/Navigation";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faFile } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import PdfFile from '../components/PdfFile';

function About() {
  return (
    <div className='about'>
      <Navigation/>
      <div className='about-hero'>
        <div className='about-hero-content'>
          <h2>About Me</h2>
          <p>
            Hello! I am Drusilla Khulwael Wamalwa, a web developer, UI/UX Designer,
            a Mobile developer in training and an upcoming software engineer.
          </p>
          <PdfFile/>
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
        <div className="client-first-container">
          <div className="client-first-content">
            <h6>
              Use Client-first
            </h6>
            <h2>Top agencies and freelancers around the world use client-first</h2>
            <p>
              This is to prioritize the unique needs and goals of my clients, ensuring tailored solutions and 
              maximum satisfaction. 
            </p>
          </div>
          <div className="client-first-image"></div>
        </div>
      </div>
      <div className="revision-rounds-and-maintenance">
        <div className='revision-rounds-and-maintenance-container'>
          <div className='maintenance-image'>
            <img src="https://images.pexels.com/photos/5685937/pexels-photo-5685937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
          </div>
          <div className='maintenance-content'>
            <h6>Revision Rounds</h6>
            <h2>
              Get two weeks free Revisions and Maintenance.
            </h2>
            <p>
              For the first two weeks after deployment,you get free revisions and maintenance from me!
            </p>
          </div>
        </div>
      </div>
      <div className="support">
        <div className="support-container">
          <div className='support-content'>
            <h2>
              24/7 Support
            </h2>
            <p>By working with me, you will be getting 24/7 priority support</p> 
          </div>
          <div className='support-image'>
            <img src='https://images.pexels.com/photos/7681839/pexels-photo-7681839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
          </div>
        </div>
      </div>
      <div  className="quick-delivery">
        <div className="quick-delivery-container">
          <div className='delivery-image'>
            <img src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=''/>
          </div>
          <div className='delivery-content'>
            <h2>Quick Delivery</h2>
            <p>
              You are guaranteed timely delivery of the service as per the standerdised web pages.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About