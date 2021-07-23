import React from 'react';
import { Container, Button, Row, Form, FormGroup, FormControl } from 'react-bootstrap';
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
  const quantitySelector = Array.from(Array(maxQuantity).keys()).map(item => {return <option value={item}>{item}</option>});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup role="form">
          <Row>
            <Form.Select>
              <option>Select Size</option>
              {sizeSelector}
            </Form.Select>
          </Row>
          <Row>
            <Form.Select>
              <option>Select Quantity</option>
              {quantitySelector}
            </Form.Select>
          </Row>
          <Row>
            <Button className="btn btn-primary btn-large centerButton" type="submit">Add to Cart</Button>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default AddToCart;