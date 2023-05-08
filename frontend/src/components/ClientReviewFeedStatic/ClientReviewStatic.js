import React, { useEffect, useState } from 'react';
import './ClientReviewFeedStatic.css'
function ClientReviews() {
  const reviews = [
    { name: 'Karri', rating: '5 of 5', comment: 'Couldn’t believe the transformation in just one service! Our garbage can was spotless when they were done. Great attention to detail and even better customer service. If you want to make your can happy, call on Zach and Ryan @ Dynamic Detailing. Highly recommend! ⭐️⭐️⭐️⭐️⭐️' },
    { name: 'Mary', rating: '5 of 5', comment: 'Very professional.' },
    { name: 'Bob', rating: '5 of 5', comment: 'Could have been better.' },
  ];

  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % reviews.length);
  };

  const review = reviews[index];
  useEffect(() => {
    const interval = setInterval(() => {
        handleNext();
    }, 5000);
    return () => clearInterval(interval);
    }, [index]);

  return (
    <div className="TestCenter">
        <div className='colClientReview'>
            <div className='borderClientReview'>
            <h3>{review.comment}</h3>
            <p>Rating: {review.rating}</p>
            <p>{review.name}</p>
            </div>
           
        </div>
    </div>
  );
}

export default ClientReviews;
