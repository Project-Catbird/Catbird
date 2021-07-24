import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar } from 'react-bootstrap';



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
    let reviewTotal = 0;
    for (let rating in reviewsMeta.ratings) {
      reviewTotal += Number(reviewsMeta.ratings[rating]);
    }
    for (let i = 5; i >= 1; i--) {
      result.push(
        <span class="rating-bar-star-count">
          {i} Stars:
          <ProgressBar variant="success" now={Math.round(((reviewsMeta.ratings[i] ?? 0) / reviewTotal) * 100)} />
          <br></br>
        </span>
      )
    }
    return result;
  }

  let getRecommended = () => {
    let recommended = Number(reviewsMeta.recommended.true);
    let total = Number(reviewsMeta.recommended.true) + Number(reviewsMeta.recommended.false)
    let computed = Math.round((recommended / total) * 100);
    return (
      <span>
        {computed}% of reviews recommend this product
      </span>
    );
  }

  return (
    <div id="rating-breakdown-container">
      <span id="average-review">Average Rating: {Math.round(averageReview * 10) / 10} </span>
      <br></br>
      {getRecommended()}
      <div id="rating-breakdown">
        Rating Breakdown:
        <br></br>
        {getReviewBreakdown()}
      </div>
    </div>
  )
}

export default RatingBreakdown;