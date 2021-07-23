import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function AddToCart(props) {
  const skusInfo = useSelector((state) => state.style.skus);
  const skus = Object.keys(skusInfo);
  const sizes = [];
  const quantities = []
  Object.values(skusInfo).forEach(sku => {
    sizes.push(sku.size);
    quantities.push(sku.quantity);
  });
  const sizeSelector = sizes.map((size, index) => <option value={skus[index]}>{size}</option>);
  const maxQuantity = Math.min(...quantities);
  const quantitySelectors = Array.from(Array(maxQuantity).keys()).map(item => {return <option value={item}>{item}</option>});

  return (
    <Container>
      <Row>
        <div className="product-sizes">
          <label>Size: </label>
          <select>
            <option value="">Select Size</option>
            {sizeSelector}
          </select>
        </div>
      </Row>
      <Row>
        <div className="product-quantity">
          <label>Quantity: </label>
          <select>
            <option value="">Select Quantity</option>
            {quantitySelectors}
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