import React from 'react';
import { useSelector, useDispatch } from 'react-redux';



const RatingBreakdown = (props) => {
  const reviewsList = useSelector(state => state.reviewsList.results);
  const reviewsMeta = useSelector(state => state.reviewsMeta);

  let reviewStats = [];
  for (let review of reviewsList) {
    reviewStats.push(review.rating);
  }
  let averageReview = reviewStats.reduce((acc, current) => acc + current) / reviewStats.length;

  let getReviewBreakdown = () => {
    let result = [];
    for (let i = 1; i <= 5; i++) {
      result.push(
        <span class="rating-bar-star-count">{i} Stars: {reviewsMeta.ratings[i] ?? 0}<br></br></span>
      )
    }
    return result;
  }

  return (
    <div id="rating-breakdown-container">
      <span id="average-review">Average Rating: {Math.round(averageReview * 10) / 10} </span>
      <div id="rating-breakdown">
        Rating Breakdown:
        <br></br>
        {getReviewBreakdown()}
      </div>
    </div>
  )
}

export default RatingBreakdown;