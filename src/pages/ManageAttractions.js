// src/pages/ManageAttractions.js
/*import React, { useState } from 'react';
import '../Style/ManageAttractions.css';

const ManageAttractions = () => {
  const [attractions, setAttractions] = useState([
    { id: 1, name: 'Old Place Example', distance: '5 km', imageUrl: 'example1.jpg' },
  ]);
  const [newAttraction, setNewAttraction] = useState({
    name: '',
    distance: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setNewAttraction({ ...newAttraction, [e.target.name]: e.target.value });
  };

  const handleAddAttraction = () => {
    if (newAttraction.name && newAttraction.distance && newAttraction.imageUrl) {
      setAttractions([
        ...attractions,
        {
          id: attractions.length + 1,
          name: newAttraction.name,
          distance: newAttraction.distance,
          imageUrl: newAttraction.imageUrl,
        },
      ]);
      // Clear input fields
      setNewAttraction({ name: '', distance: '', imageUrl: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Attractions</h1>
      <div style={{ marginBottom: '20px' }}>
        <h3>Add a New Attraction</h3>
        <input
          type="text"
          name="name"
          placeholder="Attraction Name"
          value={newAttraction.name}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="distance"
          placeholder="Distance (e.g., 5 km)"
          value={newAttraction.distance}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newAttraction.imageUrl}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddAttraction}>Add Attraction</button>
      </div>

      <h3>Existing Attractions</h3>
      <div>
        {attractions.length === 0 ? (
          <p>No attractions available.</p>
        ) : (
          <ul>
            {attractions.map((attraction) => (
              <li key={attraction.id} style={{ marginBottom: '15px' }}>
                <h4>{attraction.name}</h4>
                <p>Distance: {attraction.distance}</p>
                <img
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageAttractions; */


// src/pages/ManageAttractions.js
import React, { useState } from 'react';
import '../Style/ManageAttractions.css';


const ManageAttractions = () => {
  const [attractions, setAttractions] = useState([
    { id: 1, name: 'Old Place Example', distance: '5 km', imageUrl: 'example1.jpg' },
  ]);
  const [newAttraction, setNewAttraction] = useState({
    name: '',
    distance: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setNewAttraction({ ...newAttraction, [e.target.name]: e.target.value });
  };

  const handleAddAttraction = () => {
    if (newAttraction.name && newAttraction.distance && newAttraction.imageUrl) {
      setAttractions([
        ...attractions,
        {
          id: attractions.length + 1,
          name: newAttraction.name,
          distance: newAttraction.distance,
          imageUrl: newAttraction.imageUrl,
        },
      ]);
      // Clear input fields
      setNewAttraction({ name: '', distance: '', imageUrl: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage Attractions</h1>
      <div style={{ marginBottom: '20px' }}>
        <h3>Add a New Attraction</h3>
        <input
          type="text"
          name="name"
          placeholder="Attraction Name"
          value={newAttraction.name}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="distance"
          placeholder="Distance (e.g., 5 km)"
          value={newAttraction.distance}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={newAttraction.imageUrl}
          onChange={handleChange}
          style={{ marginRight: '10px' }}
        />
        <button onClick={handleAddAttraction}>Add Attraction</button>
      </div>

      <h3>Existing Attractions</h3>
      <div>
        {attractions.length === 0 ? (
          <p>No attractions available.</p>
        ) : (
          <ul>
            {attractions.map((attraction) => (
              <li key={attraction.id} style={{ marginBottom: '15px' }}>
                <h4>{attraction.name}</h4>
                <p>Distance: {attraction.distance}</p>
                <img
                  src={attraction.imageUrl}
                  alt={attraction.name}
                  style={{ width: '200px', height: '150px', objectFit: 'cover' }}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ManageAttractions;
