import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IndividualReviewTile from './IndividualReviewTile.jsx';


const ReviewsList = () => {
  const fullReviewsList = useSelector(state => state.reviewsList);
  const reviewsCount = useSelector(state => state.reviewsCount);
  const dispatch = useDispatch();
  let reviewsList = fullReviewsList.results.slice(0, reviewsCount);
  return (
    <div id="reviews-list">
      {reviewsList.map(review => <IndividualReviewTile review={review} />)}
      <button type="button" onClick={() => dispatch({
        type: 'UPDATE_REVIEWS_COUNT',
        reviewsCount: reviewsCount + 2
      })}>More Reviews</button>
    </div>
  )
};

export default ReviewsList;