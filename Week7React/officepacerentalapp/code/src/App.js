import React, { useState } from 'react';
import './App.css';


function App() {
  // Sample office space data
  const officeListData = [
    {
      id: 1,
      name: "Tech Park One",
      rent: 75000,
      address: "Koramangala, Bangalore",
      size: "2500 sq ft",
      amenities: ["24/7 Access", "Conference Rooms", "High-Speed Internet", "Cafeteria"],
      type: "Premium"
    },
    {
      id: 2,
      name: "Startup Hub",
      rent: 55000,
      address: "Hitech City, Hyderabad",
      size: "1800 sq ft",
      amenities: ["24/7 Access", "Meeting Rooms", "Wi-Fi", "Parking"],
      type: "Standard"
    },
    {
      id: 3,
      name: "BizZone",
      rent: 62000,
      address: "Andheri East, Mumbai",
      size: "2100 sq ft",
      amenities: ["24/7 Access", "Conference Rooms", "Internet", "Security"],
      type: "Premium"
    },
    {
      id: 4,
      name: "WorkNest",
      rent: 48000,
      address: "Salt Lake, Kolkata",
      size: "1500 sq ft",
      amenities: ["Business Hours Access", "Meeting Room", "Wi-Fi", "Pantry"],
      type: "Standard"
    },
    {
      id: 5,
      name: "Urban Office",
      rent: 85000,
      address: "Connaught Place, Delhi",
      size: "3000 sq ft",
      amenities: ["24/7 Access", "Multiple Conference Rooms", "High-Speed Internet", "Gym", "Cafeteria"],
      type: "Luxury"
    }
  ];

  // State for filtering and search
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');

  // Filter and sort offices
  const filteredOffices = officeListData
    .filter(office => {
      const matchesSearch = office.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           office.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = filterType === 'all' || office.type === filterType;
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      if (sortOrder === 'price-low') {
        return a.rent - b.rent;
      } else if (sortOrder === 'price-high') {
        return b.rent - a.rent;
      }
      return 0; // default order
    });

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Office Space Rental</h1>
        <p>Find the perfect workspace for your business</p>
      </header>

      <div className="hero">
        <img 
          src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg" 
          alt="Modern office space" 
          className="hero-image"
        />
        <div className="hero-overlay">
          <h2>Premium Office Spaces</h2>
          <p>Discover the ideal workspace for your team with our curated selection of premium office spaces across major cities in India.</p>
        </div>
      </div>

      <div className="filters">
        <input 
          type="text" 
          className="search-box"
          placeholder="Search by name or location..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="select-box"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All Types</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
        </select>
        
        <select 
          className="select-box"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      <h2 className="section-title">Available Office Spaces</h2>
      
      {filteredOffices.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>No office spaces match your search criteria.</p>
        </div>
      ) : (
        <div className="office-grid">
          {filteredOffices.map((office) => (
            <div key={office.id} className="office-card">
              <div className="office-card-header">
                <h3>{office.name}</h3>
                <div style={{ fontSize: '0.8rem', opacity: 0.9 }}>{office.type}</div>
              </div>
              
              <div className="office-card-content">
                <p><strong>Address:</strong> {office.address}</p>
                <p><strong>Size:</strong> {office.size}</p>
                <p><strong>Rent:</strong> <span className={office.rent < 60000 ? 'rent-low' : 'rent-high'}>
                  {formatCurrency(office.rent)}
                </span> per month</p>
                
                <div>
                  <strong>Amenities:</strong>
                  <ul style={{ marginLeft: '20px' }}>
                    {office.amenities.map((amenity, index) => (
                      <li key={index}>{amenity}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="office-card-footer">
                <button className="btn">View Details</button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <footer className="footer">
        <p>© 2025 Office Space Rental. All rights reserved.</p>
        <p>Find your perfect office space in Bangalore, Mumbai, Delhi, Hyderabad, and other major cities.</p>
        <div className="social-icons">
          <span>📱</span>
          <span>📧</span>
          <span>💼</span>
          <span>🌐</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
