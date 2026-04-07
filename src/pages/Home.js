import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import './Home.css';
import background from '../Homepage.png'; 

function Home() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handlePlayNowClick = () => {
    navigate('/download'); // This matches the path in your App.js Route
  };

  return (
    <div 
      className="home-container" 
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="home-overlay">
        <div className="brand-box">
          <span className="riot-games">RIOT GAMES</span>
          <h1 className="valorant-title">VALORANT</h1>
          <p className="tagline">DEFY THE LIMITS</p>
          
          {/* Added the onClick handler here */}
          <button className="play-button" onClick={handlePlayNowClick}>
            PLAY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;