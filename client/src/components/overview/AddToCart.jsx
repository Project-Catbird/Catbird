import React, { useState } from 'react';
import { Container, Button, Row, Form, FormGroup, FormControl } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import API_KEY from '../../config/config'
import axios from 'axios';

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
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (size === '' || quantity === '') {
      alert('Please pick a style, size, and quantity');
    } else {
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart/', {sku_id: size}, {headers: {Authorization: API_KEY}})
        .then(() => { alert('Added to cart!'); })
        .catch(err => { console.log(err); })
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup role="form">
          <Row>
            <Form.Select onChange={e => setSize(e.target.value)}>
              <option>Select Size</option>
              {sizeSelector}
            </Form.Select>
          </Row>
          <Row>
            <Form.Select name="quantity"onChange={e => setQuantity(e.target.value)}>
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