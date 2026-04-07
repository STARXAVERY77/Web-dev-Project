import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../Homepage.png'; 


class HomeClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      tagline: 'DEFY THE LIMITS'
    };
  }

  handlePlayNowClick = () => {
    
    this.props.navigate('/download');
  };

  render() {

    const { isHovered, tagline } = this.state;

    const styles = {
      homeContainer: {
        height: '100vh',
        width: '100%',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      homeOverlay: {
        width: '100%',
        height: '100%',
        background: 'rgba(15, 25, 35, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      brandBox: {
        textAlign: 'center',
      },
      riotGames: {
        color: '#ff4655',
        fontWeight: 'bold',
        letterSpacing: '5px',
        fontSize: '1.2rem',
        display: 'block',
        marginBottom: '10px',
      },
      valorantTitle: {
        fontSize: 'clamp(4rem, 10vw, 8rem)',
        margin: 0,
        color: '#ece8e1',
        letterSpacing: '-2px',
        lineHeight: 0.9,
        textTransform: 'uppercase',
        fontWeight: '900',
      },
      taglineStyle: {
        fontSize: '1.2rem',
        color: '#ece8e1',
        letterSpacing: '8px',
        margin: '20px 0 40px 0',
        textTransform: 'uppercase',
      },
      playButton: {
        backgroundColor: isHovered ? '#ece8e1' : '#ff4655',
        color: isHovered ? '#0f1923' : '#ece8e1',
        border: 'none',
        padding: '18px 50px',
        fontSize: '1.1rem',
        fontWeight: '900',
        cursor: 'pointer',
        clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)',
      }
    };

    return (
      <div style={styles.homeContainer}>
        <div style={styles.homeOverlay}>
          <div style={styles.brandBox}>
            <span style={styles.riotGames}>RIOT GAMES</span>
            <h1 style={styles.valorantTitle}>VALORANT</h1>
            
            {/* The tagline is now generated from the constructor's state */}
            <p style={styles.taglineStyle}>{tagline}</p>
            
            <button 
              style={styles.playButton} 
              onClick={this.handlePlayNowClick}
              onMouseEnter={() => this.setState({ isHovered: true })}
              onMouseLeave={() => this.setState({ isHovered: false })}
            >
              PLAY NOW
            </button>
          </div>
        </div>
      </div>
    );
  }
}


function Home() {
  const navigate = useNavigate();
  return <HomeClass navigate={navigate} />;
}

export default Home;