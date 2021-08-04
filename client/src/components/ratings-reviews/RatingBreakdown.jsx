import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressBar, Row, Col } from 'react-bootstrap';



const RatingBreakdown = (props) => {
  const reviewsList = useSelector(state => state.reviewsList.results);
  const reviewsMeta = useSelector(state => state.reviewsMeta);
  const starSort = useSelector(state => state.starSort);
  const dispatch = useDispatch();

  let handleClick = (rating) => {
    let starSortState = starSort;
    starSortState[rating] = !starSort[rating];
    dispatch({
      type: 'UPDATE_STAR_SORT',
      payload: starSortState
    })
    let starOptions = [];
    for (let key in starSort) {
      if (starSort[key]) {
        starOptions.push(key);
      }
    }
    let result = [];
    if (starOptions.length) {
      for (let review of reviewsList) {
        let rating = JSON.stringify(review.rating);
        if (starOptions.indexOf(rating) >= 0) {
          result.push(review)
        }
      }
    } else {
      result = reviewsList;
    }
    dispatch({
      type: 'UPDATE_SORTED_REVIEWS_LIST',
      payload: result
    })
    let node = document.getElementById(`${rating}-rating-breakdown`)
    node.classList.toggle('active-rating');
  }

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
        <span
          className="rating-bar-star-count clickable"
          key={`star-count-${i}`}
          onClick={() => handleClick(i)}
          >
          <span id={`${i}-rating-breakdown`}>{i} Stars:</span>
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
      <Row>
        <Col md={4}>
          <span>Average Rating: </span>
        </Col>
        <Col md={8}>
          <span className="score">
            <div className="score-wrap">
              <span className="stars-active" style={{width: `${averageReview * 20}%`}}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="stars-inactive">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
          </span>
        </Col>
      </Row>
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