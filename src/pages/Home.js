import React from 'react';
import Navigation from "../components/Navigation";
import "./Home.css";
import feature1 from "../feature-1.png.png";
import feature2 from "../feature-2.png.png";
import feature3 from "../feature-3.png.png";
import feature4 from "../feature-4.png.png";


function Home() {
  return (
    <div className="home">
        <Navigation/>
        <div className='hero-home'>
          <div className='hero-container'>
            <div className='hero-content'>
              <h1> I provide smart business Solutions</h1>
              <p>Grow your brand with me!</p>
            </div>
            <div className='hero-image'>
              <img src="https://images.pexels.com/photos/6894103/pexels-photo-6894103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="hero"/>
            </div>
          </div>
        </div>
        <div className="solutions">
          <div className='solutions-container'>
            <div className='solutions-image'>
              <img src="https://images.pexels.com/photos/8472849/pexels-photo-8472849.jpeg" alt="solutions"/>
            </div>
            <div className='solutions-content'>
              <h2>Explore Our Professional Business Solutions</h2>
              <div className='sltns'>
                <div className='sltn'>
                  <div className='solution'>
                    <div className='icon'>
                      <img src={feature1} alt="business"/>
                    </div>
                    <div className="solution-cont">
                      <h5>Business Growth</h5>
                      <p>
                        Implementing strategies and solutions that drive sustainable 
                        growth.
                      </p>
                    </div>
                  </div>
                  <div className='solution'>
                    <div className='icon'>
                      <img src={feature3} alt="data"/>
                    </div>
                    <div className="solution-cont">
                      <h5>Big Data Solution</h5>
                      <p>
                        Leveraging vast amounts of data to make 
                        informed decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='sltn'>
                  <div className='solution'>
                    <div className='icon'>
                      <img src={feature4} alt="design"/>
                    </div>
                    <div className="solution-cont">
                      <h5>Product Design</h5>
                      <p>
                        Creating innovative and user-centric product designs.
                      </p>
                    </div>
                  </div>
                  <div className='solution'>
                    <div className='icon'>
                      <img src={feature2} alt="research"/>
                    </div>
                    <div className="solution-cont">
                      <h5>User Research</h5>
                      <p>
                        Expanding the audience through 
                        effective digital marketing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home;