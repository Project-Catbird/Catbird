import React from 'react';
import { useSelector } from 'react-redux';

import IndividualReviewTile from './IndividualReviewTile.jsx';


const ReviewsList = () => {
  const reviewsList = useSelector(state => state.reviewsList);
  console.log(reviewsList)
  return (
    <div id="reviews-list">
      {reviewsList.results.map(review => <IndividualReviewTile review={review} />)}
    </div>
  )
};

export default ReviewsList;