import React, { useState } from 'react';
import '../Style/TourismInsights.css';


const TourismInsights = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [tourPlan, setTourPlan] = useState([]);

  // List of places with images, descriptions, and itineraries
  const allPlaces = [
    {
      id: 1,
      name: 'Paris',
      description: 'The City of Light, known for the Eiffel Tower and the Louvre.',
      itinerary: [
        { time: '7:00 PM', activity: 'Visit the Eiffel Tower for evening lights.', image: 'https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg' },
        { time: '9:00 AM', activity: 'Explore the Louvre Museum.', image: 'https://d3.harvard.edu/platform-digit/wp-content/uploads/sites/2/2020/02/714px-Louvre_Museum_Wikimedia_Commons.jpg' },
        { time: '12:00 PM', activity: 'Walk along the Champs-Élysées.', image: 'https://cdn.sortiraparis.com/images/80/97130/812281-visuels-musee-et-monument-arc-de-triomphe.jpg' },
        { time: '3:00 PM', activity: 'Relax at Jardin du Luxembourg.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VGv6I5dMGgk7mMMr74bBxJHC69luHVl_rQ&s' },
        { time: '8:00 PM', activity: 'Dinner at a Seine riverside café.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKboQbkdj5QBN9E4Q9NC26UaUs_0oGgSqF0A&s' },
      ],
    },
    {
      id: 2,
      name: 'Dubai',
      description: 'Luxury shopping, ultramodern architecture, and vibrant nightlife.',
      itinerary: [
        { time: '10:00 AM', activity: 'Visit the Burj Khalifa observation deck.', image: 'https://via.placeholder.com/300x200?text=Burj+Khalifa' },
        { time: '1:00 PM', activity: 'Explore Dubai Mall and its aquarium.', image: 'https://via.placeholder.com/300x200?text=Dubai+Mall' },
        { time: '4:00 PM', activity: 'Relax at Jumeirah Beach.', image: 'https://via.placeholder.com/300x200?text=Jumeirah+Beach' },
        { time: '7:00 PM', activity: 'Watch the Dubai Fountain show.', image: 'https://via.placeholder.com/300x200?text=Dubai+Fountain' },
        { time: '9:00 PM', activity: 'Dine at a rooftop restaurant.', image: 'https://via.placeholder.com/300x200?text=Rooftop+Restaurant' },
      ],
    },
    {
      id: 3,
      name: 'Tokyo',
      description: 'A bustling metropolis with ancient temples and modern skyscrapers.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit Senso-ji Temple.', image: 'https://via.placeholder.com/300x200?text=Senso-ji+Temple' },
        { time: '12:00 PM', activity: 'Explore the streets of Akihabara.', image: 'https://via.placeholder.com/300x200?text=Akihabara' },
        { time: '3:00 PM', activity: 'Relax at Ueno Park.', image: 'https://via.placeholder.com/300x200?text=Ueno+Park' },
        { time: '7:00 PM', activity: 'Experience Shibuya Crossing at night.', image: 'https://via.placeholder.com/300x200?text=Shibuya+Crossing' },
        { time: '9:00 PM', activity: 'Dinner in a traditional sushi restaurant.', image: 'https://via.placeholder.com/300x200?text=Sushi+Restaurant' },
      ],
    },
    {
      id: 4,
      name: 'New York',
      description: 'The Big Apple, famous for Times Square and Central Park.',
      itinerary: [
        { time: '9:00 AM', activity: 'Walk through Central Park.', image: 'https://via.placeholder.com/300x200?text=Central+Park' },
        { time: '11:00 AM', activity: 'Visit the Statue of Liberty.', image: 'https://via.placeholder.com/300x200?text=Statue+of+Liberty' },
        { time: '2:00 PM', activity: 'Explore the Metropolitan Museum of Art.', image: 'https://via.placeholder.com/300x200?text=Metropolitan+Museum' },
        { time: '5:00 PM', activity: 'Walk through Times Square.', image: 'https://via.placeholder.com/300x200?text=Times+Square' },
        { time: '8:00 PM', activity: 'Dinner at a rooftop restaurant.', image: 'https://via.placeholder.com/300x200?text=Rooftop+Restaurant' },
      ],
    },
    {
      id: 5,
      name: 'London',
      description: 'Known for Big Ben, Buckingham Palace, and rich history.',
      itinerary: [
        { time: '9:00 AM', activity: 'Watch the Changing of the Guard at Buckingham Palace.', image: 'https://via.placeholder.com/300x200?text=Changing+of+the+Guard' },
        { time: '11:00 AM', activity: 'Tour the Tower of London.', image: 'https://via.placeholder.com/300x200?text=Tower+of+London' },
        { time: '2:00 PM', activity: 'Walk across Tower Bridge.', image: 'https://via.placeholder.com/300x200?text=Tower+Bridge' },
        { time: '4:00 PM', activity: 'Visit the British Museum.', image: 'https://via.placeholder.com/300x200?text=British+Museum' },
        { time: '7:00 PM', activity: 'Dinner in Covent Garden.', image: 'https://via.placeholder.com/300x200?text=Covent+Garden' },
      ],
    },
    {
      id: 6,
      name: 'Rome',
      description: 'Famous for ancient history and landmarks like the Colosseum and the Roman Forum.',
      itinerary: [
        { time: '10:00 AM', activity: 'Visit the Colosseum.', image: 'https://via.placeholder.com/300x200?text=Colosseum' },
        { time: '1:00 PM', activity: 'Explore the Roman Forum.', image: 'https://via.placeholder.com/300x200?text=Roman+Forum' },
        { time: '3:00 PM', activity: 'Relax at the Spanish Steps.', image: 'https://via.placeholder.com/300x200?text=Spanish+Steps' },
        { time: '6:00 PM', activity: 'See the Trevi Fountain.', image: 'https://via.placeholder.com/300x200?text=Trevi+Fountain' },
        { time: '8:00 PM', activity: 'Dinner in Trastevere.', image: 'https://via.placeholder.com/300x200?text=Trastevere' },
      ],
    },
    {
      id: 7,
      name: 'Sydney',
      description: 'Known for its beautiful harbor and landmarks like the Sydney Opera House.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit the Sydney Opera House.', image: 'https://via.placeholder.com/300x200?text=Sydney+Opera+House' },
        { time: '12:00 PM', activity: 'Relax at Bondi Beach.', image: 'https://via.placeholder.com/300x200?text=Bondi+Beach' },
        { time: '3:00 PM', activity: 'Explore Darling Harbour.', image: 'https://via.placeholder.com/300x200?text=Darling+Harbour' },
        { time: '6:00 PM', activity: 'Walk across Sydney Harbour Bridge.', image: 'https://via.placeholder.com/300x200?text=Sydney+Harbour+Bridge' },
        { time: '8:00 PM', activity: 'Dinner at Circular Quay.', image: 'https://via.placeholder.com/300x200?text=Circular+Quay' },
      ],
    },
    {
      id: 8,
      name: 'Barcelona',
      description: 'Known for its architecture and landmarks like the Sagrada Família.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit Sagrada Família.', image: 'https://via.placeholder.com/300x200?text=Sagrada+Familia' },
        { time: '12:00 PM', activity: 'Walk down La Rambla.', image: 'https://via.placeholder.com/300x200?text=La+Rambla' },
        { time: '3:00 PM', activity: 'Relax at Parc Güell.', image: 'https://via.placeholder.com/300x200?text=Parc+Güell' },
        { time: '6:00 PM', activity: 'Explore the Gothic Quarter.', image: 'https://via.placeholder.com/300x200?text=Gothic+Quarter' },
        { time: '8:00 PM', activity: 'Dinner at a tapas bar.', image: 'https://via.placeholder.com/300x200?text=Tapas+Bar' },
      ],
    },
    {
      id: 9,
      name: 'Cairo',
      description: 'Famous for its ancient pyramids and the Great Sphinx.',
      itinerary: [
        { time: '9:00 AM', activity: 'Visit the Great Pyramid of Giza.', image: 'https://via.placeholder.com/300x200?text=Great+Pyramid+of+Giza' },
        { time: '12:00 PM', activity: 'Explore the Egyptian Museum.', image: 'https://via.placeholder.com/300x200?text=Egyptian+Museum' },
        { time: '3:00 PM', activity: 'Relax by the Nile River.', image: 'https://via.placeholder.com/300x200?text=Nile+River' },
        { time: '6:00 PM', activity: 'See the Sphinx.', image: 'https://via.placeholder.com/300x200?text=Great+Sphinx' },
        { time: '8:00 PM', activity: 'Dinner at a rooftop restaurant with a view of the pyramids.', image: 'https://via.placeholder.com/300x200?text=Rooftop+Restaurant' },
      ],
    },
    {
      id: 10,
      name: 'Cape Town',
      description: 'Known for its stunning beaches and Table Mountain.',
      itinerary: [
        { time: '9:00 AM', activity: 'Take the cable car to Table Mountain.', image: 'https://via.placeholder.com/300x200?text=Table+Mountain' },
        { time: '12:00 PM', activity: 'Relax at Camps Bay Beach.', image: 'https://via.placeholder.com/300x200?text=Camps+Bay+Beach' },
        { time: '3:00 PM', activity: 'Visit the Kirstenbosch Botanical Gardens.', image: 'https://via.placeholder.com/300x200?text=Kirstenbosch+Botanical+Gardens' },
        { time: '6:00 PM', activity: 'Walk through the V&A Waterfront.', image: 'https://via.placeholder.com/300x200?text=V&A+Waterfront' },
        { time: '8:00 PM', activity: 'Dinner at a waterfront restaurant.', image: 'https://via.placeholder.com/300x200?text=Waterfront+Restaurant' },
      ],
    }
  ];
  
  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter places based on search query
  const filteredPlaces = allPlaces.filter((place) =>
    place.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle place selection
  const handlePlaceSelect = (place) => {
    setSelectedPlace(place);
    setTourPlan(place.itinerary);
  };

  return (
    <div className="tourism-insights">
      <h1>Tourism Insights</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a place..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Selected Place and Tour Planning */}
      {selectedPlace && (
        <div className="tour-plan">
          <h2>Plan Your Tour for {selectedPlace.name}</h2>
          <p>{selectedPlace.description}</p>

          {/* Display Planned Activities with Images */}
          <div className="activity-list">
            <h3>Suggested Two-Day Itinerary</h3>
            <ul>
              {tourPlan.map((item, index) => (
                <li key={index}>
                  <div className="activity">
                    <strong>{item.time}</strong>: {item.activity}
                    <img src={item.image} alt={item.activity} className="activity-image" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Places List (removed "Best Places to Explore" section) */}
      <div className="places-list">
        <div className="places-grid">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="place-card" onClick={() => handlePlaceSelect(place)}>
              <img src={place.image} alt={place.name} className="place-image" />
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourismInsights;