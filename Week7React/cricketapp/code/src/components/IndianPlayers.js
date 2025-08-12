import React from 'react';

const IndianPlayers = () => {
  const T20players = [
    { name: 'Virat Kohli', role: 'Batsman', team: 'T20' },
    { name: 'Rohit Sharma', role: 'Batsman/Captain', team: 'T20' },
    { name: 'KL Rahul', role: 'Batsman/Wicketkeeper', team: 'T20' },
    { name: 'Rishabh Pant', role: 'Wicketkeeper/Batsman', team: 'T20' }
  ];
  
  const RanjiTrophy = [
    { name: 'Cheteshwar Pujara', role: 'Batsman', team: 'Ranji' },
    { name: 'Wriddhiman Saha', role: 'Wicketkeeper', team: 'Ranji' },
    { name: 'Prithvi Shaw', role: 'Batsman', team: 'Ranji' }
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

  const mergedPlayers = [...T20players, ...RanjiTrophy];
  const oddTeam = mergedPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = mergedPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <section className="player-section">
      <h2 id="merged-players-heading">All Indian Players</h2>
      <div className="player-grid" aria-labelledby="merged-players-heading">
        {mergedPlayers.map((player, index) => (
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
            <p><strong>Role:</strong> {player.role}</p>
            <p><strong>Team:</strong> {player.team}</p>
          </div>
        ))}
      </div>

      <div className="team-container">
        <section className="team-section">
          <h2 id="odd-team-heading">Team A Players</h2>
          <div className="player-grid" aria-labelledby="odd-team-heading">
            {oddTeam.map((player, index) => (
              <div key={index} className="player-card team-a" tabIndex="0">
                <div 
                  className="player-avatar"
                  style={{ backgroundColor: getColorFromName(player.name) }}
                >
                  <span className="player-initials" aria-hidden="true">
                    {getInitials(player.name)}
                  </span>
                </div>
                <h3>{player.name}</h3>
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Team:</strong> {player.team}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="team-section">
          <h2 id="even-team-heading">Team B Players</h2>
          <div className="player-grid" aria-labelledby="even-team-heading">
            {evenTeam.map((player, index) => (
              <div key={index} className="player-card team-b" tabIndex="0">
                <div 
                  className="player-avatar"
                  style={{ backgroundColor: getColorFromName(player.name) }}
                >
                  <span className="player-initials" aria-hidden="true">
                    {getInitials(player.name)}
                  </span>
                </div>
                <h3>{player.name}</h3>
                <p><strong>Role:</strong> {player.role}</p>
                <p><strong>Team:</strong> {player.team}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default IndianPlayers;
