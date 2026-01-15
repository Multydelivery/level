import React from 'react';
import { 
  FaInstagram, 
  FaTwitter, 
  FaSoundcloud, 
  FaSpotify, 
  FaBandcamp 
} from 'react-icons/fa';
import './Social.css';

const Social = () => {
  return (
    <main className="main-content">
      <div className="welcome-section">
        <h1>Welcome to Level</h1>
        <p>Your go-to place for the latest in DJ, Techno, and House music.</p>
        
        <div className="social-icons">
          <a href="https://www.instagram.com/stvan__?igsh=cXgwMGoxYnIyOGQ3" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
          {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="icon" />
          </a> */}
          <a href="https://on.soundcloud.com/JnCkKMxFRCi2bUwB6" target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
            <FaSoundcloud className="icon" />
          </a>
          {/* <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <FaSpotify className="icon" />
          </a> */}
          <a href="https://flneur2.bandcamp.com/" target="_blank" rel="noopener noreferrer" aria-label="Bandcamp">
            <FaBandcamp className="icon" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Social;