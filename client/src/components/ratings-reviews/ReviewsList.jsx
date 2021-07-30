import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Button, Col, Container } from 'react-bootstrap';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import NewReview from './new-review/Index.jsx';
import $ from 'jquery';

const ReviewsList = () => {
  const fullReviewsList = useSelector(state => state.reviewsList.results);
  const reviewsCount = useSelector(state => state.reviewsCount);
  const dispatch = useDispatch();
  let reviewsList = reviewsCount > 2 ? fullReviewsList : fullReviewsList.slice(0, 2);
  const node = React.createRef('.review-feed')
  console.log(node)

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
    return <Button variant="primary" type="button"
      onClick={() => {
        dispatch({
          type: 'UPDATE_NEW_REVIEW_MODAL',
          showNewReviewModal: true
        })
      }}>Add Review</Button>
  }

  // $(window).on("scroll", function() {
  //   //page height
  //   var scrollHeight = $(document).height();
  //   //scroll position
  //   var scrollPos = $(window).height() + $(window).scrollTop();
  //   // fire if the scroll position is 300 pixels above the bottom of the page
  //   if(((scrollHeight - 300) >= scrollPos) / scrollHeight == 0){
  //     $('.load-more-days-button').click();
  //    }
  //  });

   let handleScroll = (event) => {
    const scrollY = window.scrollY
    //const scrollTop = node.current.scrollTop
    // console.log('y', scrollY)
   }
  //  let handleScroll = (event) => {
  //   let scrollHeight = $('#reviews-list').height();
  //   let scrollPos = $('.review-feed').height() + $('.review-feed').scrollTop();
  //   if(((scrollHeight - 300) >= scrollPos) / scrollHeight == 0){
  //     console.log('bottom')
  //    }
  //  }


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
