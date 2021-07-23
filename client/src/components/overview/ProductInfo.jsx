import React, { useState, useEffect } from 'react';
import { Row, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../redux/actions/productAction'
import axios from 'axios';
import API_KEY from '../../config/config'

function ProductInfo(props) {
  const productId = useSelector((state) => state.productId);
  const productInfo = useSelector((state) => state.productInfo);
  const {id, name, slogan, description, category, default_price, features} = productInfo;
  const dispatch = useDispatch();

  const fetchProduct = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`, {headers: {Authorization: API_KEY}})
      .then(response => {
        dispatch(getProduct(response.data));
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    <Container>
      <Row>
        <span className="product-rating">✰✰✰✰✰ 5.0 <a href="#">Read all reviews</a></span>
      </Row>
      <Row>
        <span className="product-category">{category}</span>
      </Row>
      <Row>
        <h1 className="product-name">{name}</h1>
      </Row>
      <Row>
        <h5 className="product-slogan">{slogan}</h5>
      </Row>
      <Row>
        <span className="product-price">${default_price}</span>
      </Row>
    </Container>
  )
}

export default ProductInfo;