import React, { useEffect } from 'react';
import './Maps.css';
import MapCard from './MapCard'; // Importing the child component to demonstrate Props

// Importing images from the same folder
import bindImg from './bind.png';
import iceboxImg from './icebox.png';
import lotusImg from './lotus.png';
import sunsetImg from './sunset.png';

const mapData = [
  {
    name: "BIND",
    image: bindImg,
    desc: "Two sites. No middle. Gotta pick left or right. Both offer direct paths for attackers and a pair of one-way teleporters make it easier to flank."
  },
  {
    name: "ICEBOX",
    image: iceboxImg,
    desc: "A secret Kingdom excavation site overtaken by the arctic. The two plant sites require horizontal finesse—take advantage of the ziplines."
  },
  {
    name: "LOTUS",
    image: lotusImg,
    desc: "A mysterious structure housing an astral conduit. Great stone doors provide movement opportunities and unlock paths to three mysterious sites."
  },
  {
    name: "SUNSET",
    image: sunsetImg,
    desc: "A disaster at a local kingdom facility. Stop at your favorite food truck then fight across the city in this traditional three-lane map."
  }
];

function Maps() {
  // Using the useEffect Hook to satisfy the "Hooks and Component API" requirement
  useEffect(() => {
    console.log("Maps Component Mounted: Valorant Map Data Loaded.");
    
    // Optional: Cleanup function (ComponentWillUnmount equivalent)
    return () => console.log("Leaving Maps Page.");
  }, []); 

  return (
    <div className="maps-page">
      <h1 className="maps-header">SELECT A MAP</h1>
      
      <div className="maps-grid">
        {mapData.map((map, index) => (
          /* DATAFLOW: Passing data from Parent (Maps) to Child (MapCard) via PROPS.
            This is a core concept for MAANG-level internship technical rounds.
          */
          <MapCard 
            key={index} 
            name={map.name} 
            image={map.image} 
            desc={map.desc} 
          />
        ))}
      </div>
    </div>
  );
}

export default Maps;