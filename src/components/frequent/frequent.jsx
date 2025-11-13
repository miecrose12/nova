// src/components/Frequent.jsx
import React, { useState } from 'react';
import './frequent.css';
import logo from '../../../src/assets/misc-57.svg';
import { IoChevronDown } from 'react-icons/io5'; // <-- Import the icon

const Frequent = () => {
  const [activeButton, setActiveButton] = useState(0);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index === activeButton ? null : index);
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Allnovas about?',
      answer:
        'Allnovas is a platform designed to connect innovators with cutting-edge solutions. We empower creators, businesses, and individuals to bring ideas to life with AI-powered tools.',
    },
    {
      question: 'Who can use Allnovas?',
      answer:
        'Anyone can use Allnovas! Whether you’re a student, professional, startup, or enterprise, our platform is built for all users.',
    },
    {
      question: 'How does Allnovas ensure quality?',
      answer:
        'We ensure quality through rigorous AI model training, human-in-the-loop validation, and continuous feedback integration.',
    },
    {
      question: 'Is Allnovas available worldwide?',
      answer:
        'Yes! Allnovas is available globally in over 150 countries with multi-language support.',
    },
  ];

  const filterButtons = ['All', 'Getting Started', 'Pricing', 'Support'];

  return (
    <div className="frequent-container">
      {/* Title with background image */}
      <div className="title-wrapper">
        <h1 className="faq-title">Frequently asked questions</h1>
        <div className="image-container">
          <img
            src={logo}
            alt="Decorative circle"
            className="faq-circle-image"
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="faq-subtitle">
        These are the commonly asked questions on Allnovas. Still have some questions? Email us
      </p>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {filterButtons.map((label, index) => (
          <button
            key={index}
            className={`filter-btn ${activeButton === index ? 'active' : ''}`}
            onClick={() => handleButtonClick(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleDropdown(index)}
            >
              <span className="question-text">{faq.question}</span>
        <IoChevronDown
    size={17}  // ← Now visible and scalable
    className={`dropdown-ico22n ${openDropdown === index ? 'open' : ''}`}
  />
            </div>

            {openDropdown === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

            <hr className="faq-divider" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequent;