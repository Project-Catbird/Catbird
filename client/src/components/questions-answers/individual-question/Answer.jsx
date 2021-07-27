import React, { useEffect } from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
// import AddAnswer from '../add-answer-model/Index.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AnswerHelpfulness from './AnswerHelpfulness.jsx';
// import Moment from 'react-moment';

const Answer = ( { answer, question_id, question_body } ) => {
// const isAnswerMarkedHelpful = useSelector(state => state.isAnswerMarkedHelpful);

// const dispatch = useDispatch();
var helpfulness = answer.helpfulness;
var addedHelpful = helpfulness;
const markAnswerHelpful = actionCreators.markAnswerHelpful;
// useEffect(() => {
// }, [addedHelpful]);

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
      <Col></Col>
      {/* <Col className="answerStamp"><AddAnswer question_id={question_id} question_body={question_body}/></Col> */}
    </Row>
  </Container>


  )

}

export default Answer;