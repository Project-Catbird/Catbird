import React from 'react';
// import reviews from '../../../../sampleData/reviews.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../config/config.js';
import { Container, Row, Col } from 'react-bootstrap';




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

// infinity stone product_id 16065



const RatingsReviews = () => {
  let dispatch = useDispatch();
  const sortType = useSelector(state => state.reviewsSortType)
  const productId = useSelector(state => state.productId)
  console.log('sortType', sortType)

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
      headers: {Authorization: API_KEY},
      params: {
        product_id: productId,
        count: 1000,
        sort: sortType
      }
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'UPDATE_REVIEWS_LIST',
        reviewsList: response.data
      })
    })
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta', {
      headers: {Authorization: API_KEY},
      params: {product_id: productId}
    }).then(response => {
      console.log(response.data);
      dispatch({
        type: 'UPDATE_REVIEWS_META',
        reviewsMeta: response.data
      })
    })
  })

  return (
    <Container>
      <Row>
        <Col md={4}>
          <RatingBreakdown />
        </Col>
        <Col md={8}>
          <ReviewsList />
        </Col>
      </Row>
    </Container>
  )
}


export default RatingsReviews;