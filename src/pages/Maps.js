import React, { useEffect } from 'react';
import MapCard from './MapCard';

import bindImg from './bind.png';
import iceboxImg from './icebox.png';
import lotusImg from './lotus.png';
import sunsetImg from './sunset.png';

const mapData = [
  { name: "BIND", image: bindImg, type: "Teleporter", desc: "Two sites. No middle. Gotta pick left or right. Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank." },
  { name: "ICEBOX", image: iceboxImg, type: "Vertical", desc: "A secret Kingdom excavation site overtaken by the arctic. The two plant sites require horizontal finesse—take advantage of the ziplines." },
  { name: "LOTUS", image: lotusImg, type: "3-Site", desc: "A mysterious structure housing an astral conduit. Great stone doors provide movement opportunities and unlock paths to three mysterious sites." },
  { name: "SUNSET", image: sunsetImg, type: "Traditional", desc: "A disaster at a local kingdom facility. Stop at your favorite food truck then fight across the city in this traditional three-lane map." },
  { name: "UNKNOWN", image: sunsetImg, type: "Space", desc: "Testing invalid prop validation logic." } // Test case
];

function Maps() {
  useEffect(() => {
    console.log("Maps Component Mounted.");
    return () => console.log("Leaving Maps Page.");
  }, []);

  const styles = {
    mapsPage: {
      padding: '120px 40px 60px',
      backgroundColor: '#0f1923',
      minHeight: '100vh',
      textAlign: 'center'
    },
    mapsHeader: {
      color: '#ece8e1',
      fontSize: '3rem',
      letterSpacing: '5px',
      marginBottom: '50px',
      textTransform: 'uppercase',
      fontWeight: '900'
    },
    mapsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    }
  };

  return (
    <div style={styles.mapsPage}>
      <h1 style={styles.mapsHeader}>SELECT A MAP</h1>
      <div style={styles.mapsGrid}>
        {mapData.map((map, index) => (
          <MapCard 
            key={index} 
            name={map.name} 
            image={map.image} 
            type={map.type} 
            desc={map.desc} 
          />
        ))}
      </div>
    </div>
  );
}

export default Maps;