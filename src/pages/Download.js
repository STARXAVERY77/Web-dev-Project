import React, { useState } from 'react';

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
  const [hoveredBtn, setHoveredBtn] = useState(null); 

  const styles = {
    downloadPage: {
      paddingTop: '120px',
      backgroundColor: '#0f1923',
      minHeight: '100vh',
      color: '#ece8e1',
      textAlign: 'center',
    },
    downloadHero: {
      marginBottom: '80px',
    },
    downloadTitle: {
      fontSize: '4rem',
      letterSpacing: '10px',
      marginBottom: '30px',
      fontWeight: '900',
    },
    mainDownloadBtn: {
      backgroundColor: '#ff4655',
      color: '#ece8e1',
      border: 'none',
      padding: '20px 60px',
      fontSize: '1.2rem',
      fontWeight: '900',
      cursor: 'pointer',
      clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
    
      outline: hoveredBtn === 'main' ? '3px solid #ff4655' : 'none',
      outlineOffset: '4px',
    },
    specsContainer: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '40px',
      background: 'rgba(236, 232, 225, 0.05)',
      border: '1px solid rgba(236, 232, 225, 0.1)',
    },
    tierToggle: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginBottom: '40px',
    },
    getToggleBtnStyle: (currentTier, btnType) => ({
      background: currentTier === btnType ? '#ff4655' : 'transparent',
      border: currentTier === btnType ? '1px solid #ff4655' : '1px solid #ece8e1',
      color: '#ece8e1',
      padding: '10px 30px',
      cursor: 'pointer',
      fontWeight: 'bold',
    
      outline: hoveredBtn === btnType ? '2px solid #ff4655' : 'none',
      outlineOffset: '2px',
    }),
    specsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      textAlign: 'left',
    },
    specItem: {
      padding: '20px',
      borderBottom: '1px solid rgba(236, 232, 225, 0.1)',
    },
    specLabel: {
      color: '#ff4655',
      fontSize: '0.8rem',
      letterSpacing: '2px',
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
    },
    specValue: {
      fontSize: '1.1rem',
      margin: 0,
    }
  };

  return (
    <div style={styles.downloadPage}>
      <div style={styles.downloadHero}>
        <h1 style={styles.downloadTitle}>READY TO PLAY?</h1>
        <button 
          style={styles.mainDownloadBtn}
          onMouseOver={() => setHoveredBtn('main')}
          onMouseOut={() => setHoveredBtn(null)}
        >
          DOWNLOAD FOR WINDOWS
        </button>
      </div>

      <div style={styles.specsContainer}>
        <h2 style={{ letterSpacing: '3px', marginBottom: '30px' }}>SYSTEM REQUIREMENTS</h2>
        
        <div style={styles.tierToggle}>
          <button 
            style={styles.getToggleBtnStyle(tier, 'minimum')} 
            onClick={() => setTier('minimum')}
            onMouseOver={() => setHoveredBtn('minimum')}
            onMouseOut={() => setHoveredBtn(null)}
          >
            MINIMUM
          </button>
          <button 
            style={styles.getToggleBtnStyle(tier, 'recommended')} 
            onClick={() => setTier('recommended')}
            onMouseOver={() => setHoveredBtn('recommended')}
            onMouseOut={() => setHoveredBtn(null)}
          >
            RECOMMENDED
          </button>
        </div>

        <div style={styles.specsGrid}>
          {Object.entries(requirements[tier]).map(([key, value]) => (
            <div key={key} style={styles.specItem}>
              <span style={styles.specLabel}>{key.toUpperCase()}</span>
              <p style={styles.specValue}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Download;