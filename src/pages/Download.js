import React, { useState } from 'react';
import './Download.css';

const requirements = {
  minimum: {
    cpu: "Intel Core 2 Duo E8400",
    gpu: "Intel HD 4000",
    ram: "4 GB",
    os: "Windows 7/8/10 64-bit"
  },
  recommended: {
    cpu: "Intel i3-4150",
    gpu: "GeForce GT 730",
    ram: "8 GB",
    os: "Windows 10/11 64-bit"
  }
};

function Download() {
  const [tier, setTier] = useState('minimum');

  return (
    <div className="download-page">
      <div className="download-hero">
        <h1 className="download-title">READY TO PLAY?</h1>
        <button className="main-download-btn">DOWNLOAD FOR WINDOWS</button>
      </div>

      <div className="specs-container">
        <h2 className="specs-header">SYSTEM REQUIREMENTS</h2>
        
        <div className="tier-toggle">
          <button 
            className={tier === 'minimum' ? 'active' : ''} 
            onClick={() => setTier('minimum')}
          >
            MINIMUM
          </button>
          <button 
            className={tier === 'recommended' ? 'active' : ''} 
            onClick={() => setTier('recommended')}
          >
            RECOMMENDED
          </button>
        </div>

        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">OS</span>
            <p className="spec-value">{requirements[tier].os}</p>
          </div>
          <div className="spec-item">
            <span className="spec-label">RAM</span>
            <p className="spec-value">{requirements[tier].ram}</p>
          </div>
          <div className="spec-item">
            <span className="spec-label">CPU</span>
            <p className="spec-value">{requirements[tier].cpu}</p>
          </div>
          <div className="spec-item">
            <span className="spec-label">GPU</span>
            <p className="spec-value">{requirements[tier].gpu}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;