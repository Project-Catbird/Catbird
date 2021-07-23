import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
  const productInfo = useSelector((state) => state.productInfo);
  const {id, name, slogan, description, category, default_price, features} = productInfo;

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