import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';

function AddToCart(props) {
  return (
    <Container>
      <Row>
        <div className="product-sizes">
          <label>Size: </label>
          <select>
            <option value="">Select Size</option>
          </select>
        </div>
      </Row>
      <Row>
        <div className="product-quantity">
          <label>Quantity: </label>
          <select>
            <option value="">Select Quantity</option>
          </select>
        </div>
      </Row>
      <Row>
        <Button variant="outline-primary">Add to Cart</Button>
      </Row>
    </Container>
  )
}

export default AddToCart;