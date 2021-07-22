import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const RatingBreakdown = (props) => {
  const reviewsList = useSelector(state => state.reviewsList.results);

  let reviewStats = [];
  for (let review of reviewsList) {
    reviewStats.push(review.rating);
  }
  let averageReview = reviewStats.reduce((acc, current) => acc + current) / reviewStats.length;



  return (
    <div id="rating-breakdown">
      <span id="average-review">Average Rating: {averageReview} </span>
    </div>
  )
}

export default RatingBreakdown;