import React, { useEffect } from 'react';

const ExploreAttractions = () => {
  useEffect(() => {
    // Load the Google Custom Search Engine script
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse.js?cx=54baa4a0a1e4d47e7';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Google Custom Search Element */}
      <div className="gcse-search"></div>
    </div>
  );
};

export default ExploreAttractions;