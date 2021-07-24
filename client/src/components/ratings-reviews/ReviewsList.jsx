import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Container } from 'react-bootstrap';
import IndividualReviewTile from './IndividualReviewTile.jsx';


const ReviewsList = () => {
  const fullReviewsList = useSelector(state => state.reviewsList.results);
  const reviewsCount = useSelector(state => state.reviewsCount);
  const dispatch = useDispatch();
  let reviewsList = fullReviewsList.slice(0, reviewsCount);

  let renderMoreReviewsButton = () => {
    if (fullReviewsList.length > 2 && reviewsList.length !== fullReviewsList.length) {
      return <Button variant="primary" type="button"
        onClick={() =>
          dispatch({
            type: 'UPDATE_REVIEWS_COUNT',
            reviewsCount: reviewsCount + 2
          })
        }>More Reviews</Button>
    }
  }

  let handleSortChange = (event) => {
    let sortType = event.target.value.toLowerCase()
    console.log(sortType);
    dispatch({
      type: 'UPDATE_REVIEWS_SORT_TYPE',
      sortType: sortType
    })
  }

  return (
    <div id="reviews-list">
      <div>
        <span>{fullReviewsList.length} reviews, sorted by </span>
        <select onChange={handleSortChange}>
          <option>Relevance</option>
          <option>Helpful</option>
          <option>Newest</option>
        </select>
        {reviewsList.map(review => <Alert><IndividualReviewTile review={review} /></Alert>)}
        {renderMoreReviewsButton()}
      </div>
    </div>
  )
};

export default ReviewsList;


