import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
// import markAnswerHelpful from '../../../redux/reducers/qnaReducers.js';
import AnswerHelpfulness from './AnswerHelpfulness.jsx';
import axios from 'axios';
import { API_URL, API_KEY } from '../../../config/config.js';

const Answer = ( { answer, question_id, question_body } ) => {

var helpfulness = answer.helpfulness;
var addedHelpful = helpfulness;
const [ addHelpfulUsed, setaddHelpfulUsed ] = useState(false);


  const addHelpfulness = () => {
    setaddHelpfulUsed(true);

    if (!addHelpfulUsed) {
      axios.put(`${API_URL}/qa/answers/${answer.answer_id}/helpful`, {}, { headers: { Authorization: API_KEY} })
      .then( (res) => {
        addedHelpful = addedHelpful + 1;
      }
      ).catch(err => console.log(err));
    }



  }


  return(

  <Container>
    <Row>
      <div ><span className="qna-title">A:    </span><span className="qna-a">{answer.body}</span></div>
    </Row>

    <Row>
      <Col className="answerStamp">by {answer.answerer_name}</Col>
        <Col className="answerStamp"><Moment format="MMM Do YYYY">{answer.date}</Moment>
      </Col>
      <Col>
        <AnswerHelpfulness
          helpfulness={addedHelpful}
          addHelpfulUsed={addHelpfulUsed}
          addHelpfulness={addHelpfulness}
        />
      </Col>
      <Col>
      </Col>
    </Row>
  </Container>

  )

}

export default Answer;