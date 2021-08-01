import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY, API_URL } from '../../../config/config.js';

const AddAnswerForm = ({ question_body, question_id, closeAddAnswerModal }) => {


  const addAnswerModalIsOpen = useSelector(state => state.addAnswerModalIsOpen);

  const product_name = useSelector(state => state.product_name)
  const dispatch = useDispatch();
  const [ body, setBody ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ photos, setPhotos ] = useState([]);


  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_ADD_ANSWER'});

    axios.post(`${API_URL}/qa/questions/${question_id}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: photos
    }, { headers: { Authorization: API_KEY } })
    .then(res => console.log('Thank you for your feedback!', res.data))
    .catch(err => console.log('error from AddAnswerForm handlesubmit post request', err));
  };
  return (

  <Form onSubmit={handleSubmit}>

      <Form.Label>
        <strong>Product Name: {product_name}</strong>
        <br />
        <br />
        <strong>Question Body: {question_body}</strong>
      </Form.Label>

    <Form.Group controlId={`This is answer body${body}`}>
      <Form.Label>Your Answer: </Form.Label>
      <Form.Control
        as="textarea"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Your Answer"
        style={{ height: '100px' }}
        />
    </Form.Group>

    <Form.Group controlId={`This is answerer name ${name}`}>
      <Form.Label>What is your nickname: </Form.Label>
      <Form.Control
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="What is your nickname?"
        />
    </Form.Group>

    <Form.Group controlId={`this is answerer email${email}`}>
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

    <Form.Group controlId={`This is the formFile ${photos}`}>
      <Form.Label>Choose Photos   </Form.Label>
      <Form.Control type="file" value={photos}
          onChange={e => setPhotos(e.target.value)}/>
    </Form.Group>
    <br />

    <Container className="modalTwoButtons">
      <Row className="flex-nowrap text-center">
        <Col>
          <Button
            variant="outline-primary"
            size="sm"
            type="submit"
            >Submit your Answer
          </Button>
        </Col>


        <Col>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={closeAddAnswerModal}
            >Close
            </Button>
        </Col>
      </Row>
    </Container>

  </Form>

  )

}

export default AddAnswerForm;