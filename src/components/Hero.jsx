import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Welcome to Level</h1>
        <p>
          Your go-to place for the latest in DJ, Techno, and House music. Discover new tracks, read
          about the hottest events, and connect with the community.
        </p>

        <div className="sections-grid">
          {/* First Row */}
          <div className="section-row">
            <div className="section">
              <h2>Latest Tracks</h2>
              <p>Discover the newest releases from top artists in the scene.</p>
            </div>
            <div className="section">
              <h2>Upcoming Events</h2>
              <p>Find out about the hottest parties and festivals near you.</p>
            </div>
          </div>
          
          {/* Second Row */}
          <div className="section-row">
            <div className="section">
              <h2>Artist Spotlights</h2>
              <p>Learn about rising stars and established legends in the industry.</p>
            </div>
            <div className="section">
              <h2>Community Forum</h2>
              <p>Connect with other music lovers and share your passion.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;