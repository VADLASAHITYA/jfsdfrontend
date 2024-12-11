// // src/pages/TouristRequests.js
// import React, { useState } from 'react';

// const TouristRequests = () => {
//   // Sample requests data, replace with real data from the server
//   const [requests, setRequests] = useState([
//     { id: 1, host: 'Host 1', request: 'Spend more time at Sunny Beach' },
//     { id: 2, host: 'Host 2', request: 'Include Ancient Ruins in the tour' },
//   ]);

//   const acceptRequest = (id) => {
//     alert(`Request ${id} accepted!`);
//     // Add logic to accept and modify the itinerary accordingly
//   };

//   const rejectRequest = (id) => {
//     alert(`Request ${id} rejected!`);
//     // Add logic to reject the request
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Tourist Requests</h1>
//       {requests.length === 0 ? (
//         <p>No requests available.</p>
//       ) : (
//         requests.map((request) => (
//           <div key={request.id} style={{ marginBottom: '10px' }}>
//             <p><strong>{request.host}:</strong> {request.request}</p>
//             <button onClick={() => acceptRequest(request.id)}>Accept</button>
//             <button onClick={() => rejectRequest(request.id)}>Reject</button>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default TouristRequests;
