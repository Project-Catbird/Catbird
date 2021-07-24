import React from 'react';
import IndividualQuestion from './individual-question/Index.jsx';
import { Accordion } from 'react-bootstrap';

const QuestionsList = ({ qnaList }) => {

  return qnaList.map(question => {
     return (
      <Accordion key={question.question_id} >
        <IndividualQuestion question={question} />
      </Accordion>



      )
  })


}

export default QuestionsList;