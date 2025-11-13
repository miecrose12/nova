import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../../src/assets/AllNova black 2.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 32px;
          background-color: #ffffff;
          max-width: 1270px;
          margin: 0 auto;
          position: relative;
        }

        .navbar-left {
          flex: 0;
          z-index: 1001;
        }

        .navbar-logo {
          height: 36px;
          width: auto;
          font-weight: 700;
          font-size: 24px;
          color: #0F0F0F;
        }

        .navbar-logo img {
          height: 36px;
          width: auto;
        }

        .navbar-middle {
          display: flex;
          list-style: none;
          margin: 0;
          margin-left: 113.5px;
          margin-right: 112.5px;
          padding: 0;
          gap: 40px;
        }

        .navbar-middle a {
          color: #0F0F0F;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .navbar-middle a:hover {
          text-decoration: underline;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 33px;
        }

        .navbar-signin {
          color: #F05658;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .navbar-signin:hover {
          text-decoration: underline;
        }

        .navbar-join {
          box-sizing: border-box;
          width: 75px;
          height: 36px;
          padding: 0 21px;
          background-color: #F05658;
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          opacity: 1;
        }

        .navbar-join:hover {
          background-color: #d94547;
          transition: background-color 0.2s ease;
        }

        .menu-icon {
          display: none;
          cursor: pointer;
          z-index: 1001;
        }

        /* Tablet Styles (adjustments for screens between 1000px and 1270px) */
        @media (max-width: 1024px) {
          .navbar {
            padding: 16px 20px;
            flex-wrap: wrap;
          }

          .navbar-middle {
            gap: 24px;
            margin-left: 60px;
            margin-right: 60px;
          }

          .navbar-signin {
            display: none;
          }
        }

        /* Mobile Styles (responsive navbar activates at max-width: 1000px) */
        @media (max-width: 1000px) {
          .navbar {
            background-color: #FFC0CB1A; /* Light pink background for navbar on mobile */
            justify-content: space-between;
            padding: 16px 20px;
          }

          .menu-icon {
            display: block;
            order: -1;
          }

          .navbar-left {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            z-index: 1001;
          }

          .navbar-logo img {
            height: 32px; /* Slightly smaller logo on mobile */
          }

          .navbar-middle {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: #FFC0CB33; /* Pink background for the popup menu (light pink with 20% opacity) */
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            gap: 32px;
            padding: 0;
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
            z-index: 1000;
            backdrop-filter: blur(10px); /* Retain blur for a frosted glass effect on pink */
          }

          .navbar-middle.active {
            transform: translateX(0);
          }

          .navbar-middle li {
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
          }

          .navbar-middle.active li:nth-child(1) {
            animation-delay: 0.1s;
          }

          .navbar-middle.active li:nth-child(2) {
            animation-delay: 0.2s;
          }

          .navbar-middle.active li:nth-child(3) {
            animation-delay: 0.3s;
          }

          .navbar-middle.active li:nth-child(4) {
            animation-delay: 0.4s;
          }

          .navbar-middle.active li:nth-child(5) {
            animation-delay: 0.5s;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .navbar-middle a {
            font-size: 24px;
            color: #0F0F0F;
          }

          .navbar-right {
            gap: 0;
            z-index: 1001;
          }

          .navbar-signin {
            display: none;
          }

          /* Ensure the join button is visible and adjusted */
          .navbar-join {
            width: 70px;
            height: 34px;
            font-size: 14px;
          }
        }

        /* Extra small screens (below 480px) for finer adjustments */
        @media (max-width: 480px) {
          .navbar {
            padding: 12px 16px;
          }

          .navbar-logo img {
            height: 28px;
          }

          .navbar-join {
            width: 65px;
            height: 32px;
            font-size: 13px;
          }

          .navbar-middle a {
            font-size: 20px; /* Slightly smaller text on very small screens */
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={28} color="#0F0F0F" /> : <Menu size={28} color="#0F0F0F" />}
        </div>

        <div className="navbar-left">
          <img src={logo} className="navbar-logo" alt="AllNova Logo" />
        </div>

        <ul className={`navbar-middle ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#" onClick={toggleMenu}>Find Freelancers</a></li>
          <li><a href="#" onClick={toggleMenu}>Services</a></li>
          <li><a href="#" onClick={toggleMenu}>Resources</a></li>
          <li><a href="#" onClick={toggleMenu}>About Us</a></li>
          <li><a href="#" onClick={toggleMenu}>Other Services</a></li>
        </ul>

        <div className="navbar-right">
          <a href="#" className="navbar-signin">Sign In</a>
          <button className="navbar-join">Join</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;