import React from 'react';
// import reviews from '../../../../sampleData/reviews.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';


////////////////////////////////////////////////////////////////////////////////////////////////
// Import modules to use in component creation, uncomment as neccessary
////////////////////////////////////////////////////////////////////////////////////////////////

import ReviewsList from './ReviewsList.jsx';
import IndividualReviewTile from './IndividualReviewTile.jsx';
// import Sort from './Sort.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
// import Recommendations from './Recommendations.jsx';
// import ProductBreakdown from './ProductBreakdown.jsx';
// import NewReview from './new-review/Index.jsx';
// import KeywordSearch from './KeywordSearch.jsx';



const RatingsReviews = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
      headers: {Authorization: API_KEY},
      params: {product_id: 16060}
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'UPDATE_REVIEWS_LIST',
        reviewsList: response.data
      })
    })
  })

  return (
    <div id="ratings-reviews">
      <RatingBreakdown />
      <ReviewsList />
    </div>
  )
}


export default RatingsReviews;