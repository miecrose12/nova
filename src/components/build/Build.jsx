import React from 'react';
import './build.css';
import logo1 from '../../../src/assets/Frame 1618870707.svg';
import logo2 from '../../../src/assets/Frame 1618870709.svg';
import logo3 from '../../../src/assets/frame2.svg';
import logo4 from '../../../src/assets/Frame 1618870709 (1).svg';
import logo5 from '../../../src/assets/Frame 1618870709 (2).svg';
import logo6 from '../../../src/assets/arrow-04-1.svg';

const Build = () => {
  return (
    <div className="build-container">
      <div className="background-gradient"></div>

      <div className="content">
        {/* Fully Responsive Header */}
        <div className="header">
          <h1 className="title">
            Build Templates.<span className="title-break"> </span>
            Download Free.<span className="title-break"> </span>
            Grow Together
          </h1>
          <img
            src={logo6}
            alt="Decorative element"
            className="placeholder-image"
          />
        </div>

        <p className="subtitle">
          Upload your designs or download free resources.
        </p>

        {/* Cards Section */}
        <div className="cards-container">
          {/* Left Large Card */}
          <div className="left-card">
            <div className="left-card-gradient"></div>
            <img src={logo1} alt="Template 1" className="left-card-image" />
          </div>

          {/* Right 2x2 Grid */}
          <div className="right-grid">
            <div className="small-card">
              <div className="small-card-gradient gradient-1"></div>
              <img src={logo2} alt="Template 2" className="small-card-image" />
            </div>
            <div className="small-card">
              <div className="small-card-gradient gradient-2"></div>
              <img src={logo4} alt="Template 3" className="small-card-image" />
            </div>
            <div className="small-card">
              <div className="small-card-gradient gradient-3"></div>
              <img src={logo5} alt="Template 4" className="small-card-image" />
            </div>
            <div className="small-card">
              <div className="small-card-gradient gradient-4"></div>
              <img src={logo2} alt="Template 5" className="small-card-image" />
            </div>
          </div>
        </div>

        {/* CTA with Smooth Arrow Slide */}
        <div className="cta" role="button" tabIndex={0}>
          <span className="arrow">→</span>
          <span className="cta-text">Browse Templates</span>
        </div>
      </div>
    </div>
  );
};

export default Build;