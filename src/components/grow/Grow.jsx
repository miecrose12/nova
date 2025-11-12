import React from 'react';
import './Grow.css';
import logo1 from '../../../src/assets/Rectangle 3469559.svg';

const Grow = () => {
  const resources = [
    {
      icon: "../../../src/assets/teacher.svg",
      title: "Tutorials by Experts:",
      desc: "Step-by-step guides crafted by industry professionals to help you master new tools."
    },
    {
      icon: "../../../src/assets/people.svg",
      title: "Interactive Webinars:",
      desc: "Learn directly from the pros in live sessions, complete with Q&A."
    },
    {
      icon: "../../../src/assets/Frame 1618870781.svg",
      title: "eBooks and Templates:",
      desc: "Access downloadable guides and templates to speed up your projects."
    },
    {
      icon: "../../../src/assets/Frame 1618870782.svg",
      title: "Tips and Trends:",
      desc: "Stay ahead with insights into cutting-edge design trends."
    }
  ];

  return (
    <section className="grow-container">
      {/* ==== HEADINGS ==== */}
      <h1 className="main-heading">
        Grow Your Skills With Free Resources From Allnovas
      </h1>

      <p className="subheading">
        Positioning tech experts to grow with carefully curated tutorials,
        templates and ebooks
      </p>

      {/* ==== MAIN CONTENT ==== */}
      <div className="content-wrapper">
        {/* LEFT – IMAGE */}
        <div className="left-image">
          <img
            src={logo1}
            alt="Grow Resources"
            className="large-image"
          />
        </div>

        {/* RIGHT – LIST + BUTTONS */}
        <div className="right-column">
          <div className="right-container">
            {resources.map((item, index) => (
              <div key={index} className="resource-item">
                <div className="title-row">
                  <img src={item.icon} alt="" className="small-icon" />
                  <h3 className="resource-title">{item.title}</h3>
                </div>
                <p className="resource-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn-primary" aria-label="Explore Free Resources">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="arrow-icon"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Explore Free Resources</span>
            </button>

            <button className="btn-secondary" aria-label="Register for Free Resources">
              <span>Register for Free Resources</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Grow;