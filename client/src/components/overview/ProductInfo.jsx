import React from 'react';
import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ProductInfo(props) {
  const widget = 'product-info';
  const productInfo = useSelector((state) => state.productInfo);
  const style = useSelector((state) => state.style);
  const {original_price, sale_price} = style;
  const {id, name, slogan, description, category, features} = productInfo;

  return (
    <Container onClick={e => {props.handleInteractions(e.target.className, widget)}}>
      <Row>
        <span className="product-rating" >✰✰✰✰✰ 5.0 <a href="#">Read all reviews</a></span>
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