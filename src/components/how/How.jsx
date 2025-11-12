import React from 'react';
import './how.css';

const How = () => {
  return (
    <div className="how-container">
      <h1 className="how-title">How AllNova Works</h1>
      <p className="how-subtitle">
        Your Path to Success: From Choosing the Perfect Freelancer to Seamless Deliveries at Your Virtual Doorstep!
      </p>
      <div className="video-wrapper">
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/doKbzuW9zqo"
          title="HOW IT WORKS | Bicycle helmet, Zippo lighter, Hugo Boss suits | Episode 21 | Free Documentary"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default How;