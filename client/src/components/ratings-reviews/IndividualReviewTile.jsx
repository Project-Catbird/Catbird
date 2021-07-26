import React from 'react';

const IndividualReviewTile = (props) => {
  return (
    <div className="individual-review-tile" >
      <div className="rating">Stars: {props.review.rating} </div>
      <span className="user">User: {props.review.reviewer_name} </span>
      <span className="date">Posted On: {new Date(props.review.date).toString().split(' ').slice(0, 4).join(' ')} </span>
      <br></br>
      <span className="summary"><b>Summary: {props.review.summary}</b></span>
      <br></br>
      <span className="body">Body: {props.review.body} </span>
      <br></br>
      <span className="helpfulness">Helpfulness: {props.review.helpfulness} </span>
      <br></br>
      {props.review.recommend ? <span className="recommend"><i className="fas fa-check"></i> I recommend this product </span> : ''}
    </div>
  )
};

export default IndividualReviewTile;