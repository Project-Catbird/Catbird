import React from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
import AddAnswer from '../add-answer-model/Index.jsx';
// import Moment from 'react-moment';

const Answer = ( { answer, question_id, question_body } ) => {
  // console.log('question body in Answer.jsx', question_body)
  return(

  <Container>
    <p><strong>A:  </strong>{answer.body}</p>
    <Row>
      <Col>by {answer.answerer_name}</Col>
      <Col><Moment format="MMM Do YYYY">{answer.date}</Moment></Col>
      <Col>Helpful? Yes ({answer.helpfulness})</Col>
      <Col></Col>
      <Col><AddAnswer question_id={question_id} question_body={question_body}/></Col>
    </Row>
  </Container>


  )

}

export default Answer;