import React from 'react';

const IndividualReviewTile = (props) => {
  return (
    <div class="individual-review-tile">
      <div class="rating">Stars: {props.review.rating} </div>
      <span class="user">User: {props.review.reviewer_name} </span>
      <span class="date">Posted On: {new Date(props.review.date).toString().split(' ').slice(0, 4).join(' ')} </span>
      <br></br>
      <span class="summary"><b>Summary: {props.review.summary}</b></span>
      <br></br>
      <span class="body">Body: {props.review.body} </span>
      <br></br>
      <span class="helpfulness">Helpfulness: {props.review.helpfulness} </span>
      <br></br>
      {props.review.recommend ? <span class="recommend"><i class="fas fa-check"></i> I recommend this product </span> : ''}
    </div>
  )
};

export default IndividualReviewTile;