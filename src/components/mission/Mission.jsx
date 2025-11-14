'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Replace with your actual image paths
import logo from '../../../src/assets/icon.svg';
import logo1 from '../../../src/assets/icon-1.svg';
import logo2 from '../../../src/assets/icon2 (2).svg';

const cardData = [
  {
    id: 'accessibility',
    title: 'Accessibility',
    color1: '#014088',
    color2: '#011E40',
    image: logo2,
    description: 'Connecting talented designers with clients effortlessly.',
  },
  {
    id: 'functionality',
    title: 'Functionality',
    color1: '#460050',
    color2: '#630071',
    image: logo,
    description: 'Connecting talented designers with clients effortlessly.',
  },
  {
    id: 'security',
    title: 'Security',
    color1: '#026813',
    color2: '#003B0A',
    image: logo1,
    description: 'Connecting talented designers with clients effortlessly.',
  },
];

const Mission = () => {
  const [hovered, setHovered] = useState('middle');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const Card = ({ position, card }) => {
    const isActive = isMobile || hovered === position;

    return (
      <motion.div
        className={`mission-card ${position} ${isActive ? 'active' : ''}`}
        onClick={() => !isMobile && setHovered(position)}
        onMouseEnter={() => !isMobile && setHovered(position)}
        onMouseLeave={() => !isMobile && setHovered('middle')}
        animate={{
          width: isActive ? 630 : 318,
          opacity: isActive ? 1 : 0.85,
          '--angle': isActive ? '135deg' : '180deg',
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1],
        }}
        whileHover={isActive ? { scale: 1.02 } : {}}
        whileTap={isActive ? { scale: 0.98 } : {}}
        style={{
          '--color1': card.color1,
          '--color2': card.color2,
        }}
      >
        {/* Logo */}
        <div className="card-image-box">
          <img src={card.image} alt={card.title} />
        </div>

        {/* Text Content */}
        <div className="card-text">
          {/* Title */}
          <motion.h3
            animate={{ y: isActive ? 0 : 10 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {card.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            animate={{
              opacity: isActive ? 1 : 0,
              maxHeight: isActive ? 150 : 0,
              marginTop: isActive ? 16 : 0,
              x: isActive ? 0 : -30,
            }}
            style={{
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: 1.45,
              maxWidth: '380px',
              margin: '0 auto',
              overflow: 'hidden',
            }}
          >
            {card.description}
          </motion.p>

          <div style={{ flex: isActive ? 1 : 0 }} />

          {/* Get Started Button */}
          <motion.button
            type="button"
            className="get-started"
            data-position={position}
            animate={{
              opacity: isActive ? 1 : 0,
              marginTop: isActive ? 24 : 0,
              y: isActive ? 0 : 30,
              scale: isActive ? 1 : 0.9,
            }}
            transition={{
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.2,
            }}
            style={{
              margin: '0 auto',
              pointerEvents: isActive ? 'auto' : 'none',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="arrow-icon"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <span className="button-text">Get Started</span>
          </motion.button>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="mission-section">
      {/* Header */}
      <div className="mission-header">
        <p className="mission-label">Our Mission</p>
        <h1 style={{ margin: 0 }}>
          <div className="mission-title-line1">Building A Trusted Ecosystem Where</div>
          <div className="mission-title-line2">Talents Thrive And Opportunities Grow</div>
        </h1>
        <p className="mission-subtitle">
          Secured payments, verified talents and transparent projects
        </p>
      </div>

      {/* Grid */}
      <div className="mission-grid">
        <Card position="left" card={cardData[0]} />
        <Card position="middle" card={cardData[1]} />
        <Card position="right" card={cardData[2]} />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Mali:wght@400&family=Manrope:wght@400;600&display=swap');

        /* Reset & Global */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Manrope', sans-serif; overflow-x: hidden; }

        /* Section */
        .mission-section {
          width: 100%; max-width: 1250px; margin: 0 auto;
          padding: 0 24px; padding-top: 96px;
        }

        /* Header */
        .mission-header { text-align: center; margin-bottom: 80px; }
        .mission-label {
          color: #6A0DAD; font-size: 16px; font-weight: 600;
          margin-top: 120px; margin-bottom: 24px; display: block;
        }
        .mission-title-line1, .mission-title-line2 {
          color: #000; font-size: 36px; font-weight: 600; line-height: 1.2;
        }
        .mission-title-line2 { margin-top: 8px; }
        .mission-subtitle {
          color: #4D5761; font-size: 20px; max-width: 768px;
          margin: 24px auto 0; line-height: 1.5; font-weight: 400;
        }

        /* Grid */
        .mission-grid {
          display: flex; gap: 24px; width: 100%; max-width: 1328px;
          margin: 0 auto; justify-content: center; align-items: stretch;
        }

        /* Card Base */
        .mission-card {
          height: 500px; border-top-right-radius: 36px;
          border-bottom-left-radius: 36px; overflow: hidden;
          display: flex; flex-direction: column; position: relative;
          cursor: pointer;
          background: linear-gradient(var(--angle), var(--color1) 0%, var(--color2) 100%);
        }

        .card-image-box {
          position: absolute; width: 70px; height: 73px; top: 4px; left: 50%;
          transform: translateX(-50%); display: flex; align-items: center;
          justify-content: center; z-index: 10;
        }
        .card-image-box img { width: 100%; height: 100%; object-fit: contain; }

        .card-text {
          flex: 1; display: flex; flex-direction: column;
          justify-content: flex-start; padding: 91px 32px 40px;
          color: #fff; text-align: center;
        }
        .mission-card:not(.active) .card-text {
          justify-content: flex-end; padding-top: 0;
        }
        .mission-card h3 {
          font-family: 'Mali', cursive; font-size: 40px; line-height: 1.45; margin: 0;
        }

        /* BUTTON – RESPONSIVE & ARROW FIXED */
        .get-started {
          --arrow-size: 20px; --gap: 12px; --min-width: 180px;
          display: flex; align-items: center; justify-content: center;
          gap: var(--gap); font-weight: 600; font-size: 16px; color: #fff;
          border: none; cursor: pointer; padding: 12px 38px;
          border-radius: 8px; position: relative; min-width: var(--min-width);
          transition: all 0.3s ease; overflow: visible;
        }
        .get-started[data-position="left"]   { background: #014088; }
        .get-started[data-position="middle"] { background: #460050; }
        .get-started[data-position="right"]  { background: #003B0A; }
        .get-started:hover {
          box-shadow: 0 4px 12px rgba(0,0,0,.3);
          padding-inline: 42px 48px;
        }
        .get-started .button-text {
          position: relative; z-index: 1;
          transition: transform .4s cubic-bezier(.25,.46,.45,.94);
        }
        .get-started:hover .button-text { transform: translateX(8px); }
        .get-started .arrow-icon {
          position: absolute; inset-inline-start: calc(var(--gap) + 2px);
          top: 50%; transform: translateY(-50%);
          width: var(--arrow-size); height: var(--arrow-size);
          stroke: currentColor;
          transition: inset-inline-start .4s cubic-bezier(.25,.46,.45,.94);
          z-index: 2;
        }
        .get-started:hover .arrow-icon {
          inset-inline-start: calc(100% - var(--arrow-size) - var(--gap) - 4px);
        }
        .get-started:focus-visible { outline: 2px solid #fff; outline-offset: 2px; }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .mission-section { padding-top: 80px; }
          .mission-label { margin-top: 80px; }
          .mission-title-line1, .mission-title-line2 { font-size: 32px; }
          .mission-subtitle { font-size: 18px; }
          .mission-grid { flex-wrap: wrap; gap: 16px; }
          .mission-card { flex: 1 1 calc(50% - 8px); min-width: 280px; }
          .card-image-box { width: 64px; height: 66px; }
          .card-text { padding: 0 24px 32px; }
          .mission-card.active .card-text { padding: 80px 24px 32px; }
          .mission-card h3 { font-size: 34px; }
          .get-started { font-size: 15px; --min-width: 160px; }
          .get-started .arrow-icon { --arrow-size: 18px; }
        }

        @media (max-width: 640px) {
          .mission-section { padding: 0 16px; padding-top: 64px; }
          .mission-label { margin-top: 64px; margin-bottom: 16px; }
          .mission-title-line1, .mission-title-line2 { font-size: 28px; }
          .mission-subtitle { font-size: 16px; }
          .mission-grid { flex-direction: column; gap: 12px; }
          .mission-card { width: 100% !important; height: 500px; }
          .card-image-box { width: 56px; height: 58px; top: 6px; }
          .card-text { padding: 0 20px 28px; }
          .mission-card.active .card-text { padding: 70px 20px 28px; }
          .mission-card h3 { font-size: 30px; }
          .get-started { font-size: 16px; --min-width: 200px; padding: 14px 42px; }
          .get-started .arrow-icon { --arrow-size: 20px; }
        }

        @media (max-width: 480px) {
          .mission-section { padding: 0 12px; padding-top: 56px; }
          .mission-label { margin-top: 48px; font-size: 14px; }
          .mission-title-line1, .mission-title-line2 { font-size: 24px; }
          .mission-subtitle { font-size: 15px; }
          .card-image-box { width: 50px; height: 52px; top: 8px; }
          .mission-card { height: 460px; }
          .card-text { padding: 0 16px 24px; }
          .mission-card.active .card-text { padding: 60px 16px 24px; }
          .mission-card h3 { font-size: 28px; }
          .get-started { font-size: 15px; --min-width: 220px; padding: 16px 48px; }
          .get-started .arrow-icon { --arrow-size: 18px; }
        }
      `}</style>
    </section>
  );
};

export default Mission;