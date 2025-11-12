import React from 'react';
import './build.css';
import logo1 from '../../../src/assets/Frame 1618870707.svg';
import logo2 from '../../../src/assets/Frame 1618870709.svg';
import logo3 from '../../../src/assets/frame2.svg';
import logo4 from '../../../src/assets/Frame 1618870709 (1).svg';
import logo5 from '../../../src/assets/Frame 1618870709 (2).svg';

const Build = () => {
  return (
    <div className="build-container">
      <div className="background-gradient"></div>

      <div className="content">
        <h1 className="title">Build Templates. Download Free. Grow Together</h1>
        <p className="subtitle">Upload your designs or download free resources.</p>

        <div className="cards-container">
          {/* Left Large Card */}
          <div className="left-card">
            <div className="left-card-gradient"></div>
            <img src={logo1} className="left-card-image" alt="" />
          </div>

          {/* Right 2x2 Grid */}
          <div className="right-grid">
            <div className="small-card card-1">
              <div className="small-card-gradient gradient-1"></div>
              <img src={logo2} className="small-card-image" alt="" />
            </div>
            <div className="small-card card-2">
              <div className="small-card-gradient gradient-2"></div>
              <img src={logo3} className="small-card-image" alt="" />
            </div>
            <div className="small-card card-3">
              <div className="small-card-gradient gradient-3"></div>
              <img src={logo4} className="small-card-image" alt="" />
            </div>
            <div className="small-card card-4">
              <div className="small-card-gradient gradient-4"></div>
              <img src={logo5} className="small-card-image" alt="" />
            </div>
          </div>
        </div>

        <div className="cta">
          <span className="arrow">→</span>
          <span className="cta-text">Browse Templates</span>
        </div>
      </div>
    </div>
  );
};

export default Build;