import React from 'react';
import './elevate.css'; 
import logo from '../../../src/assets/Rectangle 3469558.svg';              // <-- import the CSS

const Elevate = () => {
  return (
    <section className="elevate-container">
      {/* ---------- LEFT SIDE – IMAGE ---------- */}
      <div className="elevate-image">
        {/* Replace the src with your own image */}
        <img
          src={logo }
          alt="Elevate workflow"
        />
      </div>

      {/* ---------- RIGHT SIDE – TEXT & LIST ---------- */}
      <div className="elevate-content">
        <h1 className="elevate-title">
          Elevate Your Workflow with <span className="allnovas">Allnovas</span>.
        </h1>

        <p className="elevate-subtitle">
          Here’s how Allnovas can help you do what you do
        </p>

        {/* ----- FEATURE LIST ----- */}
        <ul className="elevate-features">
          {/* ---- 1 ---- */}
          <li className="feature-item">
            <div className="feature-badge">1</div>
            <div className="feature-text">
              <h3 className="feature-heading">Verified Freelancers</h3>
              <p className="feature-desc">
                Every talent is vetted and reviewed for quality assurance
              </p>
            </div>
          </li>

          {/* ---- 2 ---- */}
          <li className="feature-item">
            <div className="feature-badge">2</div>
            <div className="feature-text">
              <h3 className="feature-heading">Smart Matching</h3>
              <p className="feature-desc">
                Instantly connect with freelancers tailored to your needs
              </p>
            </div>
          </li>

          {/* ---- 3 ---- */}
          <li className="feature-item">
            <div className="feature-badge">3</div>
            <div className="feature-text">
              <h3 className="feature-heading">Secure Payments</h3>
              <p className="feature-desc">
                Only release funds when milestones are met
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Elevate;