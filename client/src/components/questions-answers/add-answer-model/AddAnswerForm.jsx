import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY, API_URL } from '../../../config/config.js';

const AddAnswerForm = ({ product_name, question_body, question_id, closeAddAnswerModal }) => {

  const addAnswerModalIsOpen = useSelector(state => state.addAnswerModalIsOpen);
  const dispatch = useDispatch();
  const [ body, setBody ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ photos, setPhotos ] = useState([]);


  const handleSubmit = (e)=> {
    e.preventDefault();
    // console.log('submited', name, body, email, photos);
    dispatch({ type: 'TOGGLE_ADD_ANSWER'});
    // if (name.length === 0 ) {
    //   alert();
    // }
    axios.post(`${API_URL}/qa/questions/${question_id}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos
    }, { headers: { Authorization: API_KEY } })
    .then(alert ('Thank you for your feedback!'))
    .catch(err => console.log('error from AddAnswerForm handlesubmit post request', err));
  };
  return (

  <Form onSubmit={handleSubmit}>

      <Form.Label>
        <strong>Product Name: {product_name}></strong>
        <br />
        <br />
        <strong>Question Body: {question_body}</strong>
      </Form.Label>

    <Form.Group controlId={body}>
      <Form.Label>Your Answer: </Form.Label>
      <Form.Control
        as="textarea"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Your Answer"
        style={{ height: '100px' }}
        />
    </Form.Group>

    <Form.Group controlId={name}>
      <Form.Label>What is your nickname: </Form.Label>
      <Form.Control
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="What is your nickname?"
        />
    </Form.Group>

    <Form.Group controlId={email}>
      <Form.Label>Your email: </Form.Label>
      <Form.Control
        type="text"
        placeholder="Your email"
        maxLength={60}
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
    </Form.Group>
    <br/>

    <Form.Group controlId="formFile">
    <Form.Label>Choose Photos</Form.Label>
    <Form.Control type="file" value={photos}
        onChange={e => setPhotos(e.target.value)}/>
    </Form.Group>
    <br />
    <Row>
    <Col>
    <Button variant="primary" type="submit">Submit your Answer</Button>
    </Col>


    <Col>
    <Button variant="secondary" onClick={closeAddAnswerModal}>Close</Button>
    </Col>
    </Row>
  </Form>

  )

}

export default AddAnswerForm;