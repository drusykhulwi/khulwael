import React from 'react';
import logo from "../logo.PNG";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
        <img src={logo} alt="logo" className='footerLogo'/>
        <div className="socials">
            <a href="mailto:drusillakhulwael@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="tel:+254701780172">
                <FontAwesomeIcon icon={faPhone} />
            </a>
            <a href="https://www.linkedin.com/in/drusillakhulwael/">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://wa.me/254739224458">
                <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://github.com/drusykhulwi">
                <FontAwesomeIcon icon={faGithub} />
            </a>
        </div>
        <div className='copyright'>
            &copy; 2024. All Rights reserved.
        </div>
    </div>
  )
}

export default Footer