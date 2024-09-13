import React from 'react';
import Navigation from "../components/Navigation";
import "./Project.css";
import { Link } from 'react-router-dom';
import  Websites  from "../components/Websites";
import Footer from "../components/Footer";

function Project() {
  return (
    <div className='project'>
        <Navigation/>
        <div className="project-hero">
          <h6>What I've created</h6>
          <h1>My work Portfolio</h1>
          <p> I help businesses build their online presence.</p>
        </div>
        <div className='project-contents' id="all-projects">
          {/* <div className='project-header'>
            <div className='project-header-container'>
              <Link to="/project">All</Link>
              <Link to="/project">Websites</Link>
              <Link to="/project">Mobile Apps</Link>
              <Link to="/project">Designs</Link>
            </div>
          </div> */}
          <Websites/>
        </div>
        <div className="conclusion">
          <h2>Let's build something grat together</h2>
          <p>
            Contact me to get started with your quality online presence. We'll figure it out at an affordable price.
          </p>
          <button>Contact Me</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Project