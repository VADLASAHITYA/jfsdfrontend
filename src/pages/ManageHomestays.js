/*import React, { useState } from 'react';

const ManageUsers = () => {
  // Sample booking requests data; replace this with data from an API if available
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      user: 'John Doe',
      accommodation: 'Hotel Sunshine',
      dates: '2024-12-15 to 2024-12-20',
      status: 'Pending',
    },
    {
      id: 2,
      user: 'Jane Smith',
      accommodation: 'Villa Oasis',
      dates: '2024-12-10 to 2024-12-17',
      status: 'Pending',
    },
  ]);

  // Function to handle booking status update
  const handleBookingResponse = (id, status) => {
    // Update the state of the booking requests based on user action
    setBookingRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Manage User Bookings</h1>
      {bookingRequests.length === 0 ? (
        <p>No booking requests available.</p>
      ) : (
        <ul>
          {bookingRequests.map((request) => (
            <li key={request.id} style={{ marginBottom: '15px' }}>
              <h3>{request.accommodation}</h3>
              <p>
                <strong>User:</strong> {request.user}
              </p>
              <p>
                <strong>Dates:</strong> {request.dates}
              </p>
              <p>
                <strong>Status:</strong> {request.status}
              </p>
              {request.status === 'Pending' && (
                <div>
                  <button
                    onClick={() => handleBookingResponse(request.id, 'Accepted')}
                    style={{ marginRight: '10px', backgroundColor: 'green', color: 'white', padding: '5px 10px' }}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleBookingResponse(request.id, 'Rejected')}
                    style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px' }}
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageUsers; */

import React, { useState } from 'react';
import '../App.css';


const ManageUsers = () => {
  // Sample booking requests data; replace this with data from an API if available
  const [bookingRequests, setBookingRequests] = useState([
    {
      id: 1,
      user: 'John Doe',
      accommodation: 'Hotel Sunshine',
      dates: '2024-12-15 to 2024-12-20',
      status: 'Pending',
    },
    {
      id: 2,
      user: 'Jane Smith',
      accommodation: 'Villa Oasis',
      dates: '2024-12-10 to 2024-12-17',
      status: 'Pending',
    },
  ]);

  // Function to handle booking status update
  const handleBookingResponse = (id, status) => {
    // Update the state of the booking requests based on user action
    setBookingRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  return (
    <div className="manage-users-container">
      <h1 className="manage-users-title">Manage User Bookings</h1>
      {bookingRequests.length === 0 ? (
        <p className="no-booking-message">No booking requests available.</p>
      ) : (
        <ul className="booking-list">
          {bookingRequests.map((request) => (
            <li key={request.id} className="booking-item">
              <h3 className="accommodation-name">{request.accommodation}</h3>
              <p className="booking-user">
                <strong>User:</strong> {request.user}
              </p>
              <p className="booking-dates">
                <strong>Dates:</strong> {request.dates}
              </p>
              <p className="booking-status">
                <strong>Status:</strong> {request.status}
              </p>
              {request.status === 'Pending' && (
                <div className="booking-actions">
                  <button
                    onClick={() => handleBookingResponse(request.id, 'Accepted')}
                    className="accept-button"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleBookingResponse(request.id, 'Rejected')}
                    className="reject-button"
                  >
                    Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageUsers;
