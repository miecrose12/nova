import React from 'react';
import './hero.css';
import logo from '../../../src/assets/Ellipse 5965.svg'; 
import logo1 from '../../../src/assets/Ellipse 5966.svg'; 

const Hero = () => {
  return (
    <div className="hero">
      <div className="small-text">designed for modern collaboration</div>
      
      <div className="title-container">
        <div className="left-decoration">
          <img src={logo} className='left-circle' alt="" />
          <div className="left-rectangle">we found an amazing talent for our project in no time</div>
        </div>
        
        <div className="main-title">
          CO-CREATING YOUR VISION,<br />
          <span className="title-red">ONE STEP AT A TIME</span>
        </div>
        
        <div className="right-decoration">
         <img src={logo1} className='right-circle' alt="" />
          <div className="right-rectangle">freelancing is the wy to becoming self employed</div>
        </div>
      </div>
      
      <div className="description">
        From concept to final deliverables, we build with transparency at every stage, keeping you inspired throughout the journey
      </div>
      
      <div className="search-bar">
        <span className="search-placeholder">Search...</span>
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
      
      <div className="popular-searches">
        <span className="popular-label">Popular Search:</span>
        <button className="popular-button">Graphic Design</button>
        <button className="popular-button">Web Development</button>
        <button className="popular-button">Programming</button>
        <button className="popular-button">UI/UX Design</button>
        <button className="popular-button">Presentation Design</button>
        <button className="popular-button">Video Editing</button>
      </div>
    </div>
  );
};

export default Hero;