
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

import AdminDashboard from './pages/AdminDashboard';
import GuideDashboard from './pages/GuideDashboard';
import TouristDashboard from './pages/TouristDashboard';
import HostDashboard from './pages/HostDashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import ManageHomestays from './pages/ManageHomestays';
import ManageUsers from './pages/ManageUsers';
import ManageAttractions from './pages/ManageAttractions';
import Logout from './pages/Logout';
import Reviews from './pages/ManageReviews';
import TourismInsights from './pages/TourismInsights';
import Homestays from './pages/Homestays';
import Feedback from './pages/Feedback';
import ExploreAttractions from './pages/ExploreAttractions';
import HostInsights from './pages/HostInsights';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage-homestays" element={<ManageHomestays />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/manage-attractions" element={<ManageAttractions />} />
        <Route path="/reviews" element={<Reviews />} />

        {/* Guide Routes */}
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/tourism-insights" element={<TourismInsights />} />

        {/* Tourist Routes */}
        <Route path="/tourist" element={<TouristDashboard />} />

        <Route path="/homestays" element={<Homestays />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/explore-attractions" element={<ExploreAttractions/>}/>
        
      

        {/* Host Routes */}
        <Route path="/HostDashboard" element={<HostDashboard />} />
        <Route path="/HostInsights" element={<HostInsights />} />
        

        {/* Authentication and Logout */}
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;
