import React, { useState } from 'react';
import './Agents.css';

// Importing all as PNG as requested
import jettImg from './jett.png'; 
import sageImg from './sage.png';
import sovaImg from './sova.png';
import omenImg from './omen.png';

const agentData = {
  Duelist: {
    name: "JETT",
    image: jettImg,
    power: "Tailwind",
    description: "Representing South Korea, Jett's agile fighting style lets her take risks no one else can."
  },
  Sentinel: {
    name: "SAGE",
    image: sageImg,
    power: "Resurrection",
    description: "Sage creates safety for herself and her team. She can revive fallen friends and stave off pushes."
  },
  Initiator: {
    name: "SOVA",
    image: sovaImg,
    power: "Hunter's Fury",
    description: "Born from the Russian tundra, Sova tracks and eliminates enemies with ruthless precision."
  },
  Controller: {
    name: "OMEN",
    image: omenImg,
    power: "From the Shadows",
    description: "A ghost of a memory, Omen hunts in the shadows and renders enemies blind."
  }
};

function Agents() {
  // Using State to handle the dataflow
  const [activeCategory, setActiveCategory] = useState('Duelist');
  const currentAgent = agentData[activeCategory];

  return (
    <div className="agents-page">
      <div className="agent-display-container">
        <div className="agent-card">
          <div className="agent-image-section">
            <img src={currentAgent.image} alt={currentAgent.name} className="agent-img" />
          </div>
          <div className="agent-info-section">
            <span className="category-label">{activeCategory}</span>
            <h2 className="agent-name">{currentAgent.name}</h2>
            <h3 className="ability-name">SIGNATURE: {currentAgent.power}</h3>
            <p className="agent-desc">{currentAgent.description}</p>
          </div>
        </div>
      </div>

      {/* Category Selection at the Bottom */}
      <div className="selector-footer">
        <p className="selector-title">CHOOSE YOUR AGENT TYPE</p>
        <div className="category-buttons">
          {Object.keys(agentData).map((cat) => (
            <button 
              key={cat} 
              className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Agents;