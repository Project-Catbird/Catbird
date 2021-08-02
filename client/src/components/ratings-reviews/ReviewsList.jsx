import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Container } from 'react-bootstrap';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import NewReview from './new-review/Index.jsx';
import $ from 'jquery';

const ReviewsList = () => {
  const fullReviewsList = useSelector(state => state.reviewsList.results);
  const sortedReviewsList = useSelector(state => state.sortedReviewsList);
  const reviewsCount = useSelector(state => state.reviewsCount);
  const starSort = useSelector(state => state.starSort);
  const dispatch = useDispatch();

  let reviewsList = sortedReviewsList ? sortedReviewsList.slice(0, reviewsCount) : fullReviewsList.slice(0, reviewsCount);

  let renderMoreReviewsButton = () => {
    if (fullReviewsList.length > 2 && reviewsList.length !== fullReviewsList.length) {
      return <Button variant="primary" type="button" id="more-reviews"
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
    dispatch({
      type: 'UPDATE_REVIEWS_SORT_TYPE',
      sortType: sortType
    })
  }

  let renderAddReviewButton = () => {
    return <Button variant="primary" type="button" className="add-review"
      onClick={() => {
        dispatch({
          type: 'UPDATE_NEW_REVIEW_MODAL',
          showNewReviewModal: true
        })
      }}>Add Review</Button>
  }

  let handleScroll = (event) => {
    let scrollY = document.querySelector(".review-feed").scrollHeight - document.querySelector(".review-feed").scrollTop;
    let height = document.querySelector(".review-feed").offsetHeight;
    let offset = height - scrollY;
    if (offset === 0) {
      dispatch({
        type: 'UPDATE_REVIEWS_COUNT',
        reviewsCount: reviewsCount + 2
      })
    }
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
        <div id="reviews-list" style={
          reviewsCount > 2 ? {
          height: "850px",
          position: "relative"
        } : {}}>
          <div
            className="review-feed"
            id="review-feed"
            style={
            reviewsCount > 2 ?
            {
            maxHeight: "100%",
            overflow: "auto"
          } : {}}
            onScroll={handleScroll}
          >
            {reviewsList.map(review => <Alert key={`review-tile-${review.review_id}`} className="review"><IndividualReviewTile review={review} /></Alert>)}
          </div>
        </div>
        {renderMoreReviewsButton()}  {renderAddReviewButton()}
        <NewReview />
      </div>
    </div>
  )
};

export default ReviewsList;
