import React from 'react';
import './tribe.css';
import logo from '../../../src/assets/Frame 1618870705.svg';
import logo1 from '../../../src/assets/Ellipse 178.svg';
import logo2 from '../../../src/assets/Ellipse 179.svg';
import logo3 from '../../../src/assets/Ellipse 180.svg';
import logo4 from '../../../src/assets/Ellipse 181.svg';
import logo5 from '../../../src/assets/m.svg';
import logo6 from '../../../src/assets/n.svg';
import placeholder from '../../../src/assets/misc-37.svg'; // Add your placeholder image here (e.g., SVG or PNG)

const Tribe = () => {
  return (
    <div className='tribe-wrapper'>

    
    <div className="tribe-container">
      {/* Left Section */}
      <div className="tribe-left">
        <h3 className="tribe-label">Tribe</h3>
        <h1 className="tribe-title">
          <div className="title-first-line">
            <span className="title-text-part">Unlock Your Full Potential Using</span>
            <img
              src={placeholder}
              alt=""
              className="title-placeholder"
            />
          </div>
          <span className="title-text-part">Our Community</span>
        </h1>
        <p className="tribe-description">
          Where talents connect, collaborate and grow together. Find your space to learn, connect and grow
        </p>
        <button className="join-btn">Join Community</button>
        {/* Stats Row */}
        <div className="stats-container">
          {/* Active Users Block */}
          <div className="stat-item">
           
            <div className="circle-group">
                 <img
                src={logo1}
                alt="Active users"
                className="circle circle-1"
              />
                <img
                src={logo2}
                alt="Active users"
                className="circle circle-2"
              />
                <img
                src={logo3}
                alt="Active users"
                className="circle circle-3"
              />
                <img
                src={logo4}
                alt="Active users"
                className="circle circle-4"
              />
            
            </div>
            <div className="stat-content">
              <img
                src={logo5}
                alt="Active users"
                className="stat-icon2"
              />
              <p className="stat-text">Active users</p>
            </div>
          </div>
          {/* Experts Block */}
          <div className="stat-item">
            <div className="stat-content">
              <img
                src={logo6}
                alt="Experts"
                className="stat-icon experts-icon"
              />
              <p className="stat-text">Experts</p>
            </div>
          </div>
        </div>
      </div>
      {/* Right Section - Hero Image */}
      <div className="tribe-right">
        <img
          src={logo}
          alt="Tribe Community"
          className="tribe-hero-image"
        />
      </div>
    </div>
    </div>
  );
};
export default Tribe;