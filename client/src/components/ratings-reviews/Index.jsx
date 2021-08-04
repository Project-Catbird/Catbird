import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';
import { Container, Row, Col } from 'react-bootstrap';


import ReviewsList from './ReviewsList.jsx';
import IndividualReviewTile from './IndividualReviewTile.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import ProductBreakdown from './ProductBreakdown.jsx';
import KeywordSearch from './KeywordSearch.jsx';

// infinity stone product_id 16065



const RatingsReviews = () => {
  let dispatch = useDispatch();
  const sortType = useSelector(state => state.reviewsSortType)
  const productId = useSelector(state => state.productId)

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews', {
      headers: {Authorization: API_KEY},
      params: {
        product_id: productId,
        count: 1000,
        sort: sortType
      }
    }).then(response => {
      dispatch({
        type: 'UPDATE_REVIEWS_LIST',
        reviewsList: response.data
      })
    })
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/reviews/meta', {
      headers: {Authorization: API_KEY},
      params: {product_id: productId}
    }).then(response => {
      dispatch({
        type: 'UPDATE_REVIEWS_META',
        reviewsMeta: response.data
      })
    })
  })


  return (
    <Container>
      <Row>
        <KeywordSearch />
      </Row>
      <Row>
        <Col md={4}>
          <RatingBreakdown />
          <ProductBreakdown />
        </Col>
        <Col md={8} align="center">
          <ReviewsList />
        </Col>
      </Row>
    </Container>
  )
}


export default RatingsReviews;