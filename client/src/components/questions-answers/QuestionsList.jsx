import React from 'react';
import IndividualQuestion from './individual-question/Index.jsx';
import { Container, Button, Row, Col } from 'react-bootstrap';
import AddQuestion from './add-question-model/Index.jsx';


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

      <br />

       <Row className="flex-nowrap text-center">
      <Col className="flex-md-fill">
      <Button variant="outline-primary" size="sm">MORE ANSWERED QUESTION</Button>
      </Col>

      <Col className="flex-md-fill">
        <AddQuestion />
      {/* <Button variant="outline-primary" size="sm" >ADD A QUESTION + </Button> */}
      </Col>

       </Row>
    </Container>
  )


}

export default QuestionsList;