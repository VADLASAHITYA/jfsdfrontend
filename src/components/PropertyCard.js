import React from 'react';
import './PropertyCard.css';

const PropertyCard = ({ location, distance, dates, price, rating, image }) => {
  return (
    <div className="property-card">
      <img src={image} alt={location} className="property-image" />
      <div className="property-details">
        <h3>{location}</h3>
        <p>{distance}</p>
        <p>{dates}</p>
        <p><strong>{price} / night</strong></p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
