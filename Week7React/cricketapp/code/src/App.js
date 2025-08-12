import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';
import './App.css';

function App() {
  const [activeView, setActiveView] = useState('indian'); // 'indian' or 'list'

  return (
    <div className="App">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <header className="app-header">
        <h1>Cricket App</h1>
        <nav className="main-nav" aria-label="Main Navigation">
          <button 
            className={`nav-button ${activeView === 'indian' ? 'active' : ''}`}
            onClick={() => setActiveView('indian')}
            aria-pressed={activeView === 'indian'}
          >
            Indian Teams
          </button>
          <button 
            className={`nav-button ${activeView === 'list' ? 'active' : ''}`}
            onClick={() => setActiveView('list')}
            aria-pressed={activeView === 'list'}
          >
            Players List
          </button>
        </nav>
      </header>
      <main id="main-content" className="main-content">
        {activeView === 'list' ? <ListofPlayers /> : <IndianPlayers />}
      </main>
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Cricket App - All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
