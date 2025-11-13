import React, { useState, useEffect } from 'react';
import './hero.css';
import logo from '../../../src/assets/Ellipse 5965.svg'; 
import logo1 from '../../../src/assets/Ellipse 5966.svg'; 
import logo2 from '../../../src/assets/Ellipse 178.svg'; 
import logo3 from '../../../src/assets/Ellipse 179.svg'; 
import logo4 from '../../../src/assets/Ellipse 180.svg'; 
import logo5 from '../../../src/assets/Ellipse 181.svg'; 

const Hero = () => {
  const leftDecorations = [
    {
      img: logo,
      text: "we found an amazing talent for our project in no time",
      color: "#E5EFFA",
      circleTop: "17.22px",
      circleLeft: "0px",
      circleRotate: "2.03deg",
      rectTop: "67.87px",
      rectLeft: "32.31px",
      rectRotate: "4.68deg"
    },
    {
      img: logo2,
      text: "Hired the perfect freelancer in minutes for our urgent needs",
      color: "#F056581A",
      circleTop: "15px",
      circleLeft: "5px",
      circleRotate: "3deg",
      rectTop: "65px",
      rectLeft: "30px",
      rectRotate: "5.5deg"
    },
    {
      img: logo4,
      text: "Discovered top-notch skills that transformed our vision quickly",
      color: "#D1FAE5",
      circleTop: "20px",
      circleLeft: "-3px",
      circleRotate: "1deg",
      rectTop: "70px",
      rectLeft: "35px",
      rectRotate: "3deg"
    }
  ];

  const rightDecorations = [
    {
      img: logo1,
      text: "freelancing is the way to becoming self employed",
      color: "#FAD1B2",
      circleTop: "7.22px",
      circleRight: "0px",
      circleRotate: "-2.03deg",
      rectTop: "57.87px",
      rectRight: "32.31px",
      rectRotate: "-4.68deg"
    },
    {
      img: logo3,
      text: "Start your freelance journey and achieve independence today",
      color: "#6A0DAD1A",
      circleTop: "10px",
      circleRight: "3px",
      circleRotate: "-3deg",
      rectTop: "60px",
      rectRight: "28px",
      rectRotate: "-5.5deg"
    },
    {
      img: logo5,
      text: "Unlock financial freedom through skilled freelancing opportunities",
      color: "#F3E8FF",
      circleTop: "5px",
      circleRight: "-2px",
      circleRotate: "-1deg",
      rectTop: "55px",
      rectRight: "35px",
      rectRotate: "-3deg"
    }
  ];

  // States for left decoration
  const [leftActiveIndex, setLeftActiveIndex] = useState(0);
  const [leftIncomingIndex, setLeftIncomingIndex] = useState(null);
  const [leftTransitioning, setLeftTransitioning] = useState(false);
  const [leftDisableTransition, setLeftDisableTransition] = useState(false);

  // States for right decoration
  const [rightActiveIndex, setRightActiveIndex] = useState(0);
  const [rightIncomingIndex, setRightIncomingIndex] = useState(null);
  const [rightTransitioning, setRightTransitioning] = useState(false);
  const [rightDisableTransition, setRightDisableTransition] = useState(false);

  useEffect(() => {
    const leftInterval = setInterval(() => {
      const newIndex = (leftActiveIndex + 1) % leftDecorations.length;
      setLeftIncomingIndex(newIndex);
      setTimeout(() => {
        setLeftTransitioning(true);
        setTimeout(() => {
          setLeftDisableTransition(true);
          setLeftActiveIndex(newIndex);
          setTimeout(() => {
            setLeftTransitioning(false);
            setTimeout(() => {
              setLeftIncomingIndex(null);
              setTimeout(() => setLeftDisableTransition(false), 0);
            }, 0);
          }, 0);
        }, 1000); // Increased to 1000ms for slower transition
      }, 0);
    }, 5000);

    const rightInterval = setInterval(() => {
      const newIndex = (rightActiveIndex + 1) % rightDecorations.length;
      setRightIncomingIndex(newIndex);
      setTimeout(() => {
        setRightTransitioning(true);
        setTimeout(() => {
          setRightDisableTransition(true);
          setRightActiveIndex(newIndex);
          setTimeout(() => {
            setRightTransitioning(false);
            setTimeout(() => {
              setRightIncomingIndex(null);
              setTimeout(() => setRightDisableTransition(false), 0);
            }, 0);
          }, 0);
        }, 1000); // Increased to 1000ms for slower transition
      }, 0);
    }, 5000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, [leftActiveIndex, rightActiveIndex]);

  const renderDecorationContent = (dec, isLeft, isIncoming = false) => {
    if (isLeft) {
      return (
        <div className="decoration-content">
          <img 
            src={dec.img} 
            className='left-circle' 
            alt="" 
            style={{
              top: dec.circleTop,
              left: dec.circleLeft,
              transform: `rotate(${dec.circleRotate})`
            }} 
          />
          <div 
            className="left-rectangle" 
            style={{
              backgroundColor: dec.color,
              top: dec.rectTop,
              left: dec.rectLeft,
              transform: `rotate(${dec.rectRotate})`
            }}
          >
            {dec.text}
          </div>
        </div>
      );
    } else {
      return (
        <div className="decoration-content">
          <img 
            src={dec.img} 
            className='right-circle' 
            alt="" 
            style={{
              top: dec.circleTop,
              right: dec.circleRight,
              transform: `rotate(${dec.circleRotate})`
            }} 
          />
          <div 
            className="right-rectangle" 
            style={{
              backgroundColor: dec.color,
              top: dec.rectTop,
              right: dec.rectRight,
              transform: `rotate(${dec.rectRotate})`
            }}
          >
            {dec.text}
          </div>
        </div>
      );
    }
  };

  return (
    <div className="hero">
      <div className="small-text">designed for modern collaboration</div>
      
      <div className="title-container">
        <div className="left-decoration">
          <div 
            className="decoration-content-wrapper"
            style={{
              opacity: leftTransitioning ? 0 : 1,
              transition: leftDisableTransition ? 'none' : 'opacity 1s ease' // Slowed to 1s for gradual fade
            }}
          >
            {renderDecorationContent(leftDecorations[leftActiveIndex], true)}
          </div>
          {leftIncomingIndex !== null && (
            <div 
              className="decoration-content-wrapper incoming" // Added class for potential z-index control
              style={{
                opacity: leftTransitioning ? 1 : 0,
                transition: leftDisableTransition ? 'none' : 'opacity 1s ease' // Slowed to 1s for gradual fade
              }}
            >
              {renderDecorationContent(leftDecorations[leftIncomingIndex], true, true)}
            </div>
          )}
        </div>
        
        <div className="main-title2">
          CO-CREATING YOUR VISION,<br />
          <span className="title-red">ONE STEP AT A TIME</span>
        </div>
        
        <div className="right-decoration">
          <div 
            className="decoration-content-wrapper"
            style={{
              opacity: rightTransitioning ? 0 : 1,
              transition: rightDisableTransition ? 'none' : 'opacity 1s ease' // Slowed to 1s for gradual fade
            }}
          >
            {renderDecorationContent(rightDecorations[rightActiveIndex], false)}
          </div>
          {rightIncomingIndex !== null && (
            <div 
              className="decoration-content-wrapper incoming" // Added class for potential z-index control
              style={{
                opacity: rightTransitioning ? 1 : 0,
                transition: rightDisableTransition ? 'none' : 'opacity 1s ease' // Slowed to 1s for gradual fade
              }}
            >
              {renderDecorationContent(rightDecorations[rightIncomingIndex], false, true)}
            </div>
          )}
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