import React from 'react';
import IndividualQuestion from './individual-question/Index.jsx';
import { Container, Button, Row, Col } from 'react-bootstrap';
import AddQuestion from './add-question-model/Index.jsx';
import ListGroup from 'react-bootstrap/ListGroup'



const QuestionsList = ({ qnaList, getMoreQuestions, noMoreQuestion }) => {

     let qList = qnaList.map(question => {
     return (
      <ListGroup.Item key={'QuestionsList' + question.question_id} >

        <IndividualQuestion question={question} />
      </ListGroup.Item>

      )
  })

  return (
    <Container>
      <ListGroup variant="flush">
        {qList}
      </ListGroup>

      <br />
      <Container className="twoMainButton">
       <Row className="flex-nowrap text-center">

         {!noMoreQuestion &&
            <Col className="flex-md-fill">
            <Button variant="outline-primary" size="sm" onClick={getMoreQuestions} >MORE ANSWERED QUESTION</Button>
            </Col>
         }

          <Col className="flex-md-fill">
            <AddQuestion />
          </Col>
       </Row>
       </Container>

    </Container>
  )


}

export default QuestionsList;