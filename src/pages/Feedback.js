import React, { useState } from 'react';
import '../Style/FeedbackForm.css';

const FeedbackForm = () => {
  // State to hold form data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      name,
      email,
      feedback,
      rating,
    };

    console.log('Feedback submitted:', feedbackData);

    // Here, you can send this data to your backend
    // Example: axios.post('/api/submitFeedback', feedbackData);

    // Clear form after submission
    setName('');
    setEmail('');
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-form-container">
      <h2>Leave Your Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        {/* Name Field */}
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-control"
          />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          />
        </div>

        {/* Feedback Field */}
        <div className="form-group">
          <label>Feedback</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
            className="form-control"
            rows="4"
          />
        </div>

        {/* Rating Field */}
        <div className="form-group">
          <label>Rating</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`star ${rating >= star ? 'selected' : ''}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
