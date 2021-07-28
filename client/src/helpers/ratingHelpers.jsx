import React from 'react';

// Input: Review
// Output: Average score (1 decimal place)
const getAverageRating = () => {

}

// Input: Average score
// Output: JSX corresponding to average score
const renderStarRating = () => {

}

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