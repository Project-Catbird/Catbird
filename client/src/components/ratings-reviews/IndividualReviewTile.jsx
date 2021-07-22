import React from 'react';

const IndividualReviewTile = (props) => {
  return (
    <div class="individual-review-tile">
      <div class="rating">Stars: {props.review.rating} </div>
      <span class="user">User: {props.review.reviewer_name} </span>
      <span class="date">Posted On: {new Date(props.review.date).toString().split(' ').slice(0, 4).join(' ')} </span>
      <span class="body">Body: {props.review.body} </span>
      <span class="helpfulness">Helpfulness: {props.review.helpfulness} </span>
    </div>
  )
};

export default IndividualReviewTile;