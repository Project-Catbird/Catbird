import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Container } from 'react-bootstrap';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import NewReview from './new-review/Index.jsx';


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

  let renderAddReviewButton = () => {
    return <Button variant="primary" type="button"
      onClick={() => {
        dispatch({
          type: 'UPDATE_NEW_REVIEW_MODAL',
          showNewReviewModal: true
        })
      }}>Add Review</Button>
  }

  return (
    <div id="reviews-list-module">
      <div>
        <span>{fullReviewsList.length} reviews, sorted by </span>
        <select onChange={handleSortChange}>
          <option>Relevance</option>
          <option>Helpful</option>
          <option>Newest</option>
        </select>
        <div id="reviews-list">
          {reviewsList.map(review => <Alert key={`review-tile-${review.review_id}`}><IndividualReviewTile review={review} /></Alert>)}
        </div>
        {renderMoreReviewsButton()}  {renderAddReviewButton()}
        <NewReview />
      </div>
    </div>
  )
};

export default ReviewsList;


