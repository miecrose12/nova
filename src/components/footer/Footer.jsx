import React from 'react';
import './footer.css';
import logo  from '../../../src/assets/Vector (6).svg';
import logo1 from '../../../src/assets/Vector (7).svg';
import logo2 from '../../../src/assets/Vector (8).svg';
import logo3 from '../../../src/assets/Vector (9).svg';
import logo4 from '../../../src/assets/Vector (10).svg';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* ---------- TOP ---------- */}
      <div className="footer-top">
        <div className="footer-top__text">
          <h2 className="footer-title">Become the smartest person in the room.</h2>
          <p className="footer-subtitle">
            Subscribe for practical insights and proven strategies straight to your inbox
          </p>
        </div>

        <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter email"
            className="email-input"
            aria-label="Email address"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </div>

      {/* ---------- COLUMNS ---------- */}
      <div className="footer-columns">
        {/* ---- Column 1 ---- */}
        <div className="column">
          <h3>Categories</h3>
          <ul>
            {[
              'Graphic Design',
              'UI/UX Design',
              'Web Development',
              'Mobile App Development',
              'Programming and Tech',
              'Video Editing',
              'Animation',
              'Social Media Design',
              'Social Media Management',
              'Presentation Design',
              'Illustration and Digital Art',
            ].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ---- Column 2 ---- */}
        <div className="column">
          <h3>Explore</h3>
          <ul>
            {['How it works', 'Help and Support', 'Articles', 'Community', 'FAQs', 'Marketplace'].map(
              item => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </div>

        {/* ---- Column 3 ---- */}
        <div className="column">
          <h3>For Freelancers</h3>
          <ul>
            {[
              'Join as a freelancer',
              'Find Jobs',
              'Freelancing Tips',
              'Community Forums',
              'Success Stories',
            ].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* ---- Column 4 ---- */}
        <div className="column">
          <h3>Company</h3>
          <ul>
            {['About Allnova', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- BOTTOM ---------- */}
      <div className="footer-bottom">
        <div className="social-icons">
          {[logo, logo1, logo2, logo3, logo4].map((src, i) => (
            <a key={i} href="#" aria-label={`Social link ${i + 1}`} className="social-link">
              <img src={src} alt="" />
            </a>
          ))}
        </div>

        <p className="copyright">© 2024 Allnovas. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;