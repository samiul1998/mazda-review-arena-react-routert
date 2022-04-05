import React from 'react';
import Review from '../Review/Review';
import useReviews from './../../hooks/useReviews';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews]=useReviews();
    return (
      <div>
        <h2>Welcome from Review Component</h2>
        <div className="review-card-container">
          {reviews.map((customerReview) => (
            <Review
              key={customerReview.id}
              customerReview={customerReview}
            ></Review>
          ))}
        </div>
      </div>
    );
};

export default Reviews;