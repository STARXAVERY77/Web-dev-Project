import React, { useState } from 'react';
import PropTypes from 'prop-types';

function MapCard({ name, image, desc, type }) {
  const [isHovered, setIsHovered] = useState(false);

  
  const validTypes = ["Teleporter", "Vertical", "3-Site", "Traditional"];
  const isValidType = validTypes.includes(type);

  const styles = {
    mapCard: {
      background: 'rgba(236, 232, 225, 0.05)',
      outline: isHovered ? '2px solid #ff4655' : 'none',
      border: '1px solid rgba(236, 232, 225, 0.1)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      position: 'relative'
    },
    tagStyle: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      zIndex: 2,
      fontSize: '0.7rem',
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: isValidType ? 'rgba(15, 25, 35, 0.8)' : '#ff4655',
      padding: '4px 8px',
      borderRadius: '2px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    imageWrapper: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden',
    },
    mapThumbnail: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    nameOverlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      padding: '10px 20px',
      background: 'linear-gradient(transparent, #0f1923)',
      textAlign: 'left',
    },
    mapName: {
      margin: 0,
      color: '#ece8e1',
      fontSize: '1.8rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    mapDetails: {
      padding: '20px',
      textAlign: 'left',
      fontSize: '0.95rem',
      lineHeight: '1.5',
      color: 'rgba(236, 232, 225, 0.8)',
      borderTop: '2px solid #ff4655',
      flexGrow: 1
    }
  };

  return (
    <div 
      style={styles.mapCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div style={styles.tagStyle}>
        {isValidType ? type : "Invalid Map Type"}
      </div>

      <div style={styles.imageWrapper}>
        <img src={image} alt={name} style={styles.mapThumbnail} />
        <div style={styles.nameOverlay}>
          <h2 style={styles.mapName}>{name}</h2>
        </div>
      </div>
      <div style={styles.mapDetails}>
        {desc}
      </div>
    </div>
  );
}


MapCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  desc: PropTypes.string,
  type: PropTypes.string
};

MapCard.defaultProps = {
  desc: "Tactical map details pending official briefing.",
  type: "Traditional"
};

export default MapCard;