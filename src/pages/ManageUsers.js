// src/pages/ManageUsers.js
import React, { useState, useEffect } from 'react';

const ManageUsers = () => {
  // Sample data for registered users; replace with actual data from your API
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', searchPreferences: ['Beach', 'Mountain'] },
    { id: 2, name: 'Bob', searchPreferences: ['Historical Sites', 'Museums'] },
  ]);

  // Sample recommendations data based on categories
  const recommendationsData = {
    Beach: [
      { id: 1, name: 'Sunny Beach', location: 'California', distance: '2 miles', imageUrl: '/images/sunny-beach.jpg' },
      { id: 2, name: 'Ocean Paradise', location: 'Florida', distance: '10 miles', imageUrl: '/images/ocean-paradise.jpg' },
    ],
    Mountain: [
      { id: 3, name: 'Rocky Heights', location: 'Colorado', distance: '5 miles', imageUrl: '/images/rocky-heights.jpg' },
    ],
    'Historical Sites': [
      { id: 4, name: 'Ancient Ruins', location: 'Rome', distance: '20 miles', imageUrl: '/images/ancient-ruins.jpg' },
    ],
    Museums: [
      { id: 5, name: 'Art Museum', location: 'Paris', distance: '1 mile', imageUrl: '/images/art-museum.jpg' },
    ],
  };

  // Function to generate recommendations for a user based on their preferences
  const getRecommendations = (preferences) => {
    let recommendations = [];
    preferences.forEach((category) => {
      if (recommendationsData[category]) {
        recommendations = [...recommendations, ...recommendationsData[category]];
      }
    });
    return recommendations;
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage User Registrations & Recommendations</h1>
      {users.length === 0 ? (
        <p>No registered users.</p>
      ) : (
        <div>
          {users.map((user) => (
            <div key={user.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
              <h3>{user.name}</h3>
              <p><strong>Search Preferences:</strong> {user.searchPreferences.join(', ')}</p>

              <h4>Recommendations:</h4>
              <ul>
                {getRecommendations(user.searchPreferences).map((rec) => (
                  <li key={rec.id} style={{ marginBottom: '10px' }}>
                    <img
                      src={rec.imageUrl}
                      alt={rec.name}
                      style={{ width: '50px', height: '50px', marginRight: '10px' }}
                    />
                    <span>
                      <strong>{rec.name}</strong> - {rec.location} ({rec.distance})
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageUsers;


