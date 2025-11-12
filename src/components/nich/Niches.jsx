// src/components/nich/Niches.jsx
import { useRef } from 'react';
import './niches.css';
import logo from '../../../src/assets/misc-06.svg';

const niches = [
  { title: "UI/UX Designer",        img: "../../../src/assets/Frame 2131333005.svg" },
  { title: "Web Development",       img: "../../../src/assets/Frame 2131333005 (1).svg" },
  { title: "Mobile App Development",img: "../../../src/assets/Frame 2131333005 (2).svg" },
  { title: "Graphics Design",       img: "../../../src/assets/Frame 2131333005 (3).svg" },
  { title: "Video Editing",         img: "../../../src/assets/Frame 2131333005 (4).svg" },
];

export default function Niches() {
  const carouselRef = useRef(null); // ← Remove <HTMLDivElement>

  const scroll = (direction) => {   // ← Remove : 'left' | 'right'
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.clientWidth * 0.8;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="niches-section">
      {/* Header */}
      <div className="niches-header-wrapper">
        <h2 className="niches-heading">
          Your vision, Our <span className="niche-word">niche</span>
          <img
            src={logo}
            alt=""
            className="niches-floating-image"
          />
        </h2>
        <p className="niches-label">Specialized Niches</p>
      </div>

      <p className="niches-subtext">
        We connect clients with high-end freelancers across these categories
      </p>

      <div className="niches-carousel-container">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="niches-nav-arrow left"
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12Z" /></svg>
        </button>

        {/* Carousel */}
        <div className="niches-carousel-wrapper" ref={carouselRef}>
          {niches.map((n, i) => (
            <div className="niche-card" key={i}>
              <div className="niche-image-wrapper">
                <img src={n.img} alt={n.title} className="niche-image" />
              </div>
              <div className="niche-card-content">
                <h3 className="niche-title">{n.title}</h3>
                <p className="niche-description"></p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="niches-nav-arrow right"
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12Z" /></svg>
        </button>
      </div>
    </section>
  );
}