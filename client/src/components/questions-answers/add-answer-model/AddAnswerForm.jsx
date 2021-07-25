import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

const AddAnswerForm = ({ product_name, question_body, closeAddAnswerModal }) => {

  const addAnswerModalIsOpen = useSelector(state => state.addAnswerModalIsOpen);
  const dispatch = useDispatch();


  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log('submited');
    dispatch({ type: 'TOGGLE_ADD_ANSWER'});
  };
  return (

  <Form onSubmit={handleSubmit}>

      <Form.Label>
        <strong>Product Name: {product_name}></strong>
        <br />
        <br />
        <strong>Question Body: {question_body}</strong>
      </Form.Label>

    <Form.Group controlId="answer">
      <Form.Label>Your Answer: </Form.Label>
      <Form.Control  as="textarea" placeholder="Your Answer"  style={{ height: '100px' }}/>
    </Form.Group>

    <Form.Group controlId="nickName">
      <Form.Label>What is your nickname: </Form.Label>
      <Form.Control type="text" placeholder="What is your nickname?"/>
    </Form.Group>

    <Form.Group controlId="email">
      <Form.Label>Your email: </Form.Label>
      <Form.Control type="text" placeholder="Your email" maxLength={60}/>
    </Form.Group>
    <br/>

    <Form.Group controlId="formFile">
    <Form.Label>Choose Photos</Form.Label>
    <Form.Control type="file" />
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