


// src/pages/Home.js
import React from 'react';
import Header from '../components/Header';

import './Home.css';
import PropertyCard from '../components/PropertyCard';
import Footer from '../components/Footer';

// Import the images
import coimbatoreImage from '../Photos/coimbatore.jpg';
import goaImage from '../Photos/goa.jpg';
import riaImage from '../Photos/ria.jpg';
import margaoImage from '../Photos/margao.jpg';
import hosurImage from '../Photos/Hosur.jpg';
import KalavidiImage from '../Photos/Kalavidi.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="button-container">
      
      </div>

      {/* Travel description */}
      <div className="travel-description">
        <p>
          Discover and explore amazing destinations with ease through our
          platform. Book your stays and plan your journey effortlessly!
        </p>
      </div>

      {/* Property cards */}
      <div className="cards-container">
        <PropertyCard
          location="Coimbatore, India"
          distance="742 kilometres away"
          dates="2–7 Jan"
          price="₹1,836"
          rating="5.0"
          image={coimbatoreImage}
        />
        <PropertyCard
          location="Mandrem, Goa"
          distance="850 kilometres away"
          dates="10–15 Feb"
          price="₹2,499"
          rating="4.8"
          image={goaImage}
        />
        <PropertyCard
          location="Mandrem, Goa"
          distance="722 kilometres away"
          dates="21–25 Jun"
          price="₹4,5000"
          rating="4.0"
          image={riaImage}
        />
        <PropertyCard
          location="Ria, India"
          distance="722 kilometres away"
          dates="21–25 Jun"
          price="₹4,5000"
          rating="4.0"
          image={margaoImage}
        />
        <PropertyCard
          location="Hosur, India"
          distance="722 kilometres away"
          dates="21–25 Jun"
          price="₹4,5000"
          rating="4.0"
          image={hosurImage}
        />
        <PropertyCard
          location="Kalavidi, India"
          distance="722 kilometres away"
          dates="21–25 Jun"
          price="₹4,5000"
          rating="4.0"
          image={KalavidiImage}
        />
      </div>
      
    </div>
      
  );
};

export default Home;
