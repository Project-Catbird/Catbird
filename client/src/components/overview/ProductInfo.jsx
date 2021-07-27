import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
  const widget = 'product-info';
  const productInfo = useSelector((state) => state.productInfo);
  const style = useSelector((state) => state.style);
  const {original_price, sale_price} = style;
  const {id, name, slogan, description, category, features} = productInfo;

  const reviewsList = useSelector(state => state.reviewsList.results);
  const reviewsMeta = useSelector(state => state.reviewsMeta);

  let reviewStats = [];
  for (let review of reviewsList) {
    reviewStats.push(review.rating);
  }
  let averageReview = reviewStats.reduce((acc, current) => acc + current) / reviewStats.length;

  return (
    <Container onClick={e => {props.handleInteractions(e.target.className, widget)}}>
      <Row>
        <span className="product-rating" >✰✰✰✰✰ {Math.round(averageReview * 10) / 10} <a href="#">Read all reviews</a></span>
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
        <span className="product-price">
          <span className="sale-price">{sale_price > 0 ? '$'+sale_price : ''} </span>
          <span className="original-price">{sale_price > 0 ? <strike>${original_price}</strike> : '$'+original_price}</span>
        </span>
      </Row>
    </Container>
  )
}

export default ProductInfo;