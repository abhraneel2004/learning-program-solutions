import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">Ticket Booking</h1>
      </header>
      
      <main className="app-content">
        {isLoggedIn ? <UserPage /> : <GuestPage />}

        <div className="auth-button-container">
          {isLoggedIn ? (
            <button 
              className="auth-button logout-button" 
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <button 
              className="auth-button" 
              onClick={handleLogin}
            >
              Login
            </button>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
