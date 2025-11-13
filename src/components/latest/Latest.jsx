// src/components/Latest.jsx
import React from 'react';
import './latest.css';

// ── Import the three article images ───────────────────────
import image1 from '../../../src/assets/Frame 1618869464.svg';
import image2 from '../../../src/assets/Frame 1618869465.svg';
import image3 from '../../../src/assets/Frame 1618869466.svg';

const articles = [
  { image: image1, title: "How to Keep Your Clients, and earn their trust" },
  { image: image2, title: "Getting Started on Allnova: Basics of Allnova" },
  { image: image3, title: "Creating A Winning Gig Image: Convert Clients Easily" },
];

const Latest = () => {
  return (
    <div className="latest-container">
      {/* ── Header ── */}
      <div className="latest-header">
        <h3 className="insights-text">Insights</h3>

        <div className="view-all">
          {/* Real right arrow */}
          <span className="arrow-right">→</span>
          <span className="view-all-text">View all post</span>
        </div>
      </div>

      {/* ── Title & Subtitle ── */}
      <h1 className="latest-articles-title">Latest Articles</h1>
      <p className="latest-subtitle">
        Check out the latest updates and free resources from Allnova.
      </p>

      {/* ── Responsive Grid ── */}
      <div className="articles-grid">
        {articles.map((article, idx) => (
          <div key={idx} className="article-card">
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <h4 className="article-title">{article.title}</h4>

            <button className="view-post-btn">
              <span>View Post</span>
              {/* Real right arrow inside the button */}
              <span className="btn-arrow">→</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;