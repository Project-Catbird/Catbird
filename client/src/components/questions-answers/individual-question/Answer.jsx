import React from 'react';
import Moment from 'react-moment';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddAnswer from '../add-answer-model/Index.jsx';
// import Moment from 'react-moment';

const Answer = ( { answer } ) => {
  console.log(answer);
  return(
  <div>
  <p>A:{answer.body}</p>
  <Container>
  <Row>
  <Col>by {answer.answerer_name}</Col>
  <Col ><Moment format="MMM Do YYYY">{answer.date}</Moment></Col>
  <Col>Helpful? Yes ({answer.helpfulness})</Col>
  <Col><AddAnswer /></Col>
  </Row>
  </Container>

  </div>

  )

}

export default Answer;