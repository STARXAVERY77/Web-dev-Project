import React, { useState } from 'react';

// Importing assets
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
  const [activeCategory, setActiveCategory] = useState('Duelist');
  const currentAgent = agentData[activeCategory];

  // --- JS Style Objects ---
  const styles = {
    agentsPage: {
      paddingTop: '100px',
      minHeight: '100vh',
      backgroundColor: '#0f1923',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    displayContainer: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    },
    agentCard: {
      display: 'flex',
      backgroundColor: 'rgba(236, 232, 225, 0.05)',
      border: '1px solid rgba(236, 232, 225, 0.2)',
      width: '90%',
      maxWidth: '1000px',
      height: '500px',
    },
    imageSection: {
      flex: 1,
      background: 'linear-gradient(180deg, #1e2a35 0%, #0f1923 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    agentImg: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    infoSection: {
      flex: 1,
      padding: '40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'left',
      color: '#ece8e1' // Added to ensure text is visible
    },
    categoryLabel: {
      color: '#ff4655',
      fontWeight: 'bold',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    selectorFooter: {
      padding: '40px 0',
      background: 'rgba(0, 0, 0, 0.4)',
      width: '100%',
      textAlign: 'center',
      marginTop: 'auto',
    },
    selectorTitle: {
      color: '#ece8e1',
      letterSpacing: '5px',
      fontSize: '0.8rem',
      marginBottom: '20px',
      textTransform: 'uppercase',
    },
    categoryButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
    },
    // Dynamic function for the buttons to handle the 'active' state
    getBtnStyle: (isActive) => ({
      background: isActive ? '#ff4655' : 'transparent',
      color: '#ece8e1',
      border: isActive ? '1px solid #ff4655' : '1px solid rgba(236, 232, 225, 0.5)',
      padding: '12px 25px',
      cursor: 'pointer',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      transition: '0.3s all ease',
    })
  };

  return (
    <div style={styles.agentsPage}>
      <div style={styles.displayContainer}>
        <div style={styles.agentCard}>
          <div style={styles.imageSection}>
            <img src={currentAgent.image} alt={currentAgent.name} style={styles.agentImg} />
          </div>
          <div style={styles.infoSection}>
            <span style={styles.categoryLabel}>{activeCategory}</span>
            <h2 style={{ fontSize: '3rem', margin: '10px 0' }}>{currentAgent.name}</h2>
            <h3 style={{ color: '#ff4655', marginBottom: '15px' }}>SIGNATURE: {currentAgent.power}</h3>
            <p style={{ lineHeight: '1.6', opacity: 0.8 }}>{currentAgent.description}</p>
          </div>
        </div>
      </div>

      <div style={styles.selectorFooter}>
        <p style={styles.selectorTitle}>CHOOSE YOUR AGENT TYPE</p>
        <div style={styles.categoryButtons}>
          {Object.keys(agentData).map((cat) => (
            <button 
              key={cat} 
              style={styles.getBtnStyle(activeCategory === cat)}
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