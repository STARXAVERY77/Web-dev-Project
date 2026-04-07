import React from 'react';
import PropTypes from 'prop-types';
import './Maps.css';

function MapCard(props) {
  // VISUAL VALIDATION LOGIC
  // We check if the name is a string. If not, we highlight it red.
  const isInvalid = typeof props.name !== 'string';

  return (
    <div className={`map-card ${isInvalid ? 'validation-error' : ''}`}>
      <div className="map-image-wrapper">
        <img src={props.image} alt={props.name} className="map-thumbnail" />
        <div className="map-name-overlay">
          {/* If invalid, we show a warning label */}
          <h2 className={isInvalid ? 'error-text' : ''}>
            {isInvalid ? "INVALID DATA TYPE" : props.name}
          </h2>
        </div>
      </div>
      <div className="map-details">
        <p>{props.desc}</p>
        {isInvalid && <span className="debug-note">Dev Note: Expected String, got {typeof props.name}</span>}
      </div>
    </div>
  );
}

MapCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default MapCard;