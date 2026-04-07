import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Agents from './pages/Agents'; 
import Maps from './pages/Maps';
import Download from './pages/Download';

function App() {
  return (
    /* basename ensures the links work on GitHub Pages (e.g., username.github.io/Web-dev-Project) */
    <Router basename="/Web-dev-Project">
      <div className="App">
        
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/agents">Agents</Link>
          <Link to="/maps">Maps</Link>
          <Link to="/download">Download</Link>
        </nav>

        <header className="App-header">
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