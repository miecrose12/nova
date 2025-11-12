import React from 'react';
import './mission.css';

// Replace with your actual image paths
import logo from '../../../src/assets/icon.svg';
import logo1 from '../../../src/assets/icon-1.svg';
import logo2 from '../../../src/assets/icon2 (2).svg';

const Mission = () => {
  return (
    <section className="mission-section">
      {/* Header */}
      <div className="mission-header">
        <p className="mission-label">Our Mission</p>
        <h1 className="mission-title">
          <div className="mission-title-line1">
            Building A Trusted Ecosystem Where
          </div>
          <div className="mission-title-line2">
            Talents Thrive And Opportunities Grow
          </div>
        </h1>
        <p className="mission-subtitle">
          Secured payments, verified talents and transparent projects
        </p>
      </div>

      {/* Grid */}
      <div className="mission-grid">
        {/* LEFT – Accessibility */}
        <div className="mission-card left">
          <div className="card-image-box">
            <img src={logo} alt="Accessibility" />
          </div>
          <div className="card-text">
            <h3>Accessibility</h3>
          </div>
        </div>

        {/* MIDDLE – Functionality */}
        <div className="mission-card middle">
          <div className="card-image-box">
            <img src={logo1} alt="Functionality" />
          </div>
          <div className="card-text">
            <div className="card-top-content">
              <h3>Functionality</h3>
              <p>Connect, create and earn with tools that make freelancing seamless.</p>
            </div>

            <div className="card-bottom-content">
              <button type="button" className="get-started">
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT – Security */}
        <div className="mission-card right">
          <div className="card-image-box">
            <img src={logo2} alt="Security" />
          </div>
          <div className="card-text">
            <h3>Security</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;