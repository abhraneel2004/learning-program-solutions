import React, { useState } from 'react';

const ListofPlayers = () => {
  const [sortBy, setSortBy] = useState('name'); // 'name' or 'score'
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  const [filterScore, setFilterScore] = useState(70);

  const players = [
    { name: 'Virat Kohli', score: 89, role: 'Batsman' },
    { name: 'Rohit Sharma', score: 45, role: 'Batsman/Captain' },
    { name: 'KL Rahul', score: 74, role: 'Batsman/Wicketkeeper' },
    { name: 'Shikhar Dhawan', score: 35, role: 'Batsman' },
    { name: 'Hardik Pandya', score: 70, role: 'All-rounder' },
    { name: 'Jasprit Bumrah', score: 82, role: 'Bowler' },
    { name: 'Ravindra Jadeja', score: 66, role: 'All-rounder' },
    { name: 'Rishabh Pant', score: 93, role: 'Wicketkeeper/Batsman' },
    { name: 'Bhuvneshwar Kumar', score: 48, role: 'Bowler' },
    { name: 'Shreyas Iyer', score: 88, role: 'Batsman' },
    { name: 'Mohammed Shami', score: 52, role: 'Bowler' }
  ];

  // Helper function to get initials from name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };

  // Helper function to generate a consistent color based on name
  const getColorFromName = (name) => {
    const colors = [
      '#1a237e', '#311b92', '#4a148c', '#6a1b9a', 
      '#880e4f', '#b71c1c', '#e65100', '#ff6f00', 
      '#4caf50', '#2196f3', '#3f51b5', '#673ab7'
    ];
    
    // Simple hash function to get a consistent index
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Get a positive index within the colors array range
    const index = Math.abs(hash % colors.length);
    return colors[index];
  };

  const handleSortChange = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  const getSortedPlayers = () => {
    return [...players].sort((a, b) => {
      if (sortBy === 'name') {
        return sortOrder === 'asc' 
          ? a.name.localeCompare(b.name) 
          : b.name.localeCompare(a.name);
      } else {
        return sortOrder === 'asc' 
          ? a.score - b.score 
          : b.score - a.score;
      }
    });
  };

  const sortedPlayers = getSortedPlayers();
  const filteredPlayers = sortedPlayers.filter(player => player.score < filterScore);

  return (
    <section className="players-list-section">
      <div className="controls-container">
        <div className="sort-controls">
          <h3>Sort by:</h3>
          <div className="button-group" role="group" aria-label="Sort options">
            <button 
              className={`sort-button ${sortBy === 'name' ? 'active' : ''}`}
              onClick={() => handleSortChange('name')}
              aria-pressed={sortBy === 'name'}
            >
              Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button 
              className={`sort-button ${sortBy === 'score' ? 'active' : ''}`}
              onClick={() => handleSortChange('score')}
              aria-pressed={sortBy === 'score'}
            >
              Score {sortBy === 'score' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>
        
        <div className="filter-controls">
          <label htmlFor="score-filter">Filter by score below: {filterScore}</label>
          <input 
            type="range" 
            id="score-filter" 
            min="0" 
            max="100" 
            value={filterScore} 
            onChange={(e) => setFilterScore(Number(e.target.value))}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-valuenow={filterScore}
          />
        </div>
      </div>

      <h2 id="all-players-heading">All Players</h2>
      <div className="player-grid" aria-labelledby="all-players-heading">
        {sortedPlayers.map((player, index) => (
          <div key={index} className="player-card" tabIndex="0">
            <div 
              className="player-avatar"
              style={{ backgroundColor: getColorFromName(player.name) }}
            >
              <span className="player-initials" aria-hidden="true">
                {getInitials(player.name)}
              </span>
            </div>
            <h3>{player.name}</h3>
            <div className="player-details">
              <p><strong>Role:</strong> {player.role}</p>
              <p><strong>Score:</strong> <span className={player.score >= 70 ? 'high-score' : 'normal-score'}>{player.score}</span></p>
            </div>
          </div>
        ))}
      </div>

      <h2 id="filtered-players-heading">Players with Score Below {filterScore}</h2>
      {filteredPlayers.length > 0 ? (
        <div className="player-grid filtered-grid" aria-labelledby="filtered-players-heading">
          {filteredPlayers.map((player, index) => (
            <div key={index} className="player-card filtered-card" tabIndex="0">
              <div 
                className="player-avatar"
                style={{ backgroundColor: getColorFromName(player.name) }}
              >
                <span className="player-initials" aria-hidden="true">
                  {getInitials(player.name)}
                </span>
              </div>
              <h3>{player.name}</h3>
              <div className="player-details">
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Score:</strong> <span className="normal-score">{player.score}</span></p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No players found with score below {filterScore}</p>
      )}
    </section>
  );
};

export default ListofPlayers;
