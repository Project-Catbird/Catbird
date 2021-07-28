import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
import { actionCreators } from '../../../redux/index.js';
import AnswerHelpfulness from './AnswerHelpfulness.jsx';

const Answer = ( { answer, question_id, question_body } ) => {

var helpfulness = answer.helpfulness;
var addedHelpful = helpfulness;
const markAnswerHelpful = actionCreators.markAnswerHelpful;

  const addHelpfulness = () => {
    markAnswerHelpful(answer.answer_id)
    .then( (res) => {
      console.log(res)
      addedHelpful = addedHelpful + 1;
    }
    ).catch(err => console.log(err))

  }


  return(

  <Container>
    <Row>
      <div ><span className="qna-title">A:    </span><span className="qna-a">{answer.body}</span></div>
    </Row>
    <Row>
      <Col className="answerStamp">by {answer.answerer_name}</Col>
      <Col className="answerStamp"><Moment format="MMM Do YYYY">{answer.date}</Moment></Col>
      <Col>
        <AnswerHelpfulness helpfulness={addedHelpful} addHelpfulness={addHelpfulness}/>
      </Col>
      <Col>
      </Col>
    </Row>
  </Container>

  )

}

export default Answer;