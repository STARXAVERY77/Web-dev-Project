//hooks usestate
//styling
//routing


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Agents from './pages/Agents'; 
import Maps from './pages/Maps';
import Download from './pages/Download';

function App() {
  
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    app: {
      textAlign: 'center',
      backgroundColor: '#0f1923',
      minHeight: '100vh',
      color: '#ece8e1',
    },
    navBar: {
      backgroundColor: '#0f1923',
      padding: '1.5rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 10,
      borderBottom: '1px solid rgba(236, 232, 225, 0.1)',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      letterSpacing: '2px',
    },
    appHeader: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    },
    
    getNavLinkStyle: (linkName) => ({
      color: hoveredLink === linkName ? '#ff4655' : '#ece8e1',
      textDecoration: 'none',
      padding: '5px 10px',
      
      outline: hoveredLink === linkName ? '2px solid #ff4655' : 'none',
      transition: 'color 0.1s ease', // Subtle color fade, but instant outline
    })
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Agents', path: '/agents' },
    { name: 'Maps', path: '/maps' },
    { name: 'Download', path: '/download' },
  ];

  return (
    <Router basename="/Web-dev-Project">
      <div style={styles.app}>
        
        <nav style={styles.navBar}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={styles.getNavLinkStyle(link.name)}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <header style={styles.appHeader}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agents" element={<Agents />} /> 
            <Route path="/maps" element={<Maps />} />
            <Route path="/download" element={<Download />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;