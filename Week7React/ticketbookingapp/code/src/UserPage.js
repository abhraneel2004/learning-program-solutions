import React from 'react';

const UserPage = () => {
  return (
    <div className="page-card">
      <h2 className="page-title">Welcome User</h2>
      <p className="page-description">
        You are now logged in. You can book your flight tickets.
      </p>
      
      <div className="user-dashboard">
        <div className="dashboard-card">
          <h3 className="dashboard-title">Book Flight</h3>
          <p className="dashboard-description">
            Search and book flights
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-title">My Bookings</h3>
          <p className="dashboard-description">
            View your reservations
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-title">Profile</h3>
          <p className="dashboard-description">
            Manage your account
          </p>
        </div>
        
        <div className="dashboard-card">
          <h3 className="dashboard-title">Support</h3>
          <p className="dashboard-description">
            Get help and assistance
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
