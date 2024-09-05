import React from 'react';
import Navigation from "../components/Navigation";
import "./Services.css";
import code from "../code.png";
import icon from "../Icon.png";
import { useState } from "react";
import Footer from "../components/Footer";


function Services() {
  const [selected, setSelected] = useState(null)
  const toggle = ( i ) => {
    if (selected === i){
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div className='services'>
        <Navigation />
        <div className="my-services">
          <div className="services-container">
            <h1>The Services I provide:</h1>
            <div className="contents-container">
              <div className='contents'>
                <div className="content">
                  <div className='icon1'>
                    <img src={code} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>Website Development</h4>
                    <p>
                      Crafting responsive and visually appealing websites that provide 
                      a seamless user experience across all devices.
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className='icon1'>
                    <img src={code} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>Web App Development</h4>
                    <p>
                      Building robust, scalable web applications that deliver 
                      dynamic functionality and enhance user engagement.
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className='icon1'>
                    <img src={code} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>Mobile App Development</h4>
                    <p>
                      Creating intuitive and feature-rich mobile apps tailored
                      to meet user needs on both iOS and Android platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div className='contents'>
                <div className="content">
                  <div className='icon'>
                    <img src={icon} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>UI/UX DESIGN</h4>
                    <p>
                      Designing user interfaces and experiences that are visually compelling 
                      and easy to navigate, enhancing overall user satisfaction
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className='icon'>
                    <img src={icon} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>SEO</h4>
                    <p>
                      Optimizing websites to improve search engine rankings and drive organic 
                      traffic through effective keyword strategies and content optimization.
                    </p>
                  </div>
                </div>
                <div className="content">
                  <div className='icon'>
                    <img src={icon} alt='developing'/>
                  </div>
                  <div className='conts'>
                    <h4>Payment Integration</h4>
                    <p>
                      Implementing secure and efficient payment gateways to facilitate 
                      smooth and reliable online transactions for users.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="FAQs">
          <div className="FAQs-container">
            <div className="FAQs-heading">
              <h3>Frequently Asked Questions</h3>
              <a href='mailto:drusillakhulwael@gmail.com'>Contact us for more information</a>
            </div>
            <div className='FAQS-content'>
              {data.map((item, i) => (
                <div className='item'>
                  <div className='title' onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>
                    <span>{selected === i ? '+' : '-'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>
                    {item.answer}
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

const data = [
  {
    question: "What are your charges",
    answer: 
    "Hello! Our charges vary based on the service and the scope of the project. Kindly reach out to me with the details of your desired product, and I will provide you with a quotation."
  },
  {
    question: "How long does it take?",
    answer: "The duration of the project depends on its complexity and requirements. Once we discuss your specific needs, I can give you a more accurate timeline."
  },
  {
    question: "How do we communicate?",
    answer: "We offer multiple communication channels including email, WhatsApp, Calls, and LinkedIn. Whatever your preference, we are flexible and will accommodate it."
  },
  {
    question: "I have a big project. Can you handle it?",
    answer: "Absolutely! Please reach out to me so we can discuss the details and begin the development process."
  }
]
export default Services;