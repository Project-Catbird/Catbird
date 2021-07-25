import React from 'react';
import IndividualQuestion from './individual-question/Index.jsx';
import { Container, Button, Row, Col } from 'react-bootstrap';

const QuestionsList = ({ qnaList }) => {

     let qList = qnaList.map(question => {
     return (
      <Container key={question.question_id} >

        <IndividualQuestion question={question} />

      </Container>

      )
  })

  return (
    <Container>
      <Row>
        {qList}
      </Row>
       <Row>
      <Col xs lg="2">
      </Col>
      <Col md="auto">
      <Button variant="outline-primary">MORE ANSWERED QUESTION</Button>
      </Col>

      <Col md="auto">
      <Button variant="outline-primary" >ADD A QUESTION + </Button>
      </Col>

      <Col xs lg="2">
      </Col>

       </Row>
    </Container>
  )


}

export default QuestionsList;