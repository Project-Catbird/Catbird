import React, { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { Container, Col, Row } from 'react-bootstrap';
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

  <div>
    <Row>
      <div className="answerList"><span className="qna-title">A:    </span><span className="qna-a">{answer.body}</span></div>
    </Row>
{/*
    <Row flex-nowrap> */}
    <div className="stamps">
      <span className="answerStamp stamps">by {answer.answerer_name}</span>
        <span className="answerStamp stamps"><Moment format="MMM Do YYYY">{answer.date}</Moment>
      </span>
      <span className="stamps">
        <AnswerHelpfulness
          helpfulness={addedHelpful}
          addHelpfulUsed={addHelpfulUsed}
          addHelpfulness={addHelpfulness}
        />
      </span>

      <div></div>
      </div>
      {/* <Col>
      </Col> */}
    {/* </Row> */}
  </div>

  )

}

export default Answer;