import React, { useState } from 'react';
import { Container, Button, Row, Form, FormGroup, FormControl, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { API_KEY } from '../../config/config'
import axios from 'axios';
function AddToCart(props) {
  const widget = 'add-to-cart'
  const skusInfo = useSelector((state) => state.style.skus);
  const skus = Object.keys(skusInfo);
  const sizes = [];
  Object.values(skusInfo).forEach(sku => {
    sizes.push(sku.size);
  });
  const sizeSelector = sizes.map((size, index) => <option key={index} value={skus[index]}>{size}</option>);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(null);
  const [atcQuantity, setATCQuantity] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (size === '' || atcQuantity < 1) {
      alert('Please pick a style, size, and quantity');
    } else {
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/cart/', {sku_id: size}, {headers: {Authorization: API_KEY}})
        .then(() => { alert('Added to cart!'); })
        .catch(err => { console.log(err); })
    }
  }

  const handleLike = (event) => {
    event.preventDefault();
    alert('Liked!');
  }

  return (
    <Container>
      <Form id="add-to-cart-form" onSubmit={handleSubmit} onClick={e => {props.handleInteractions(e.target.id, widget)}}>
        <FormGroup role="form">
          <Row>
            <select className="form-control" id="add-to-cart-size" onChange={e => {
              if (e.target.value === "") {
                setSize('');
                setQuantity(0);
              } else {
                setSize(e.target.value);
                setQuantity(Math.min(15, skusInfo[e.target.value].quantity));
              }}}>
              <option value="">Select Size</option>
              {sizeSelector}
            </select>
          </Row>
          <Row>
            <select className="form-control" id="add-to-cart-quantity" onChange={e => setATCQuantity(e.target.value)}>
              <option value="0">Select Quantity</option>
              {Array.from(Array(quantity + 1).keys()).map((item, index) => {return <option key={index} value={item}>{item}</option>})}
            </select>
          </Row>
          <Row>
            {quantity === 0 ? '' : <Button className="btn btn-primary btn-large centerButton" id="add-to-cart-btn" type="submit">Add to Cart</Button>}
          </Row>
          <Row>
            <Button className="btn btn-primary btn-large centerButton" id="like-btn" type="" onClick={handleLike}>Like</Button>
          </Row>
        </FormGroup>
      </Form>
    </Container>
  )
}
export default AddToCart;