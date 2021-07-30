import React from 'react';

// Input: Product Meta, Optional precision (Default of 2 dec places)
// Output: Average Score (Number)
const getAverageRating = (productMeta, precision = 2) => {
  let totalRatings = 0;
  let sum = 0;
  for (var rating in productMeta.ratings) {
    totalRatings += parseInt(productMeta.ratings[rating]);
    sum += parseInt(rating) * parseInt(productMeta.ratings[rating]);
  }
  // console.log(productMeta.product_id, sum);
  // console.log(productMeta.product_id, totalRatings);
  // console.log(productMeta.product_id, totalRatings > 0 ? (sum/totalRatings).toFixed(precision) : null);
  return totalRatings > 0 ? (sum/totalRatings).toFixed(precision) : null;
}

// Input: Average score
// Output: JSX corresponding to average score
const renderStarRating = (averageReview) => (
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
)

// Input: List of styles
// Output: default style object or first style if no default found.
const getDefaultStyle = (styles) => {
  for (var i = 0; i < styles.length; i++) {
    if (styles[i]["default?"] === true) {
      return styles[i];
    }
  }
  return styles[0] ? styles[0] : null;
}

export { getAverageRating, renderStarRating, getDefaultStyle };