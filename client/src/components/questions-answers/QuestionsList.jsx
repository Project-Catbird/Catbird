import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { actionCreators } from '../../redux/index';
// import { bindActionCreators } from 'redux';
import IndividualQuestion from './individual-question/Index.jsx';

const QuestionsList = ({ qnaList }) => {

  return qnaList.map(question => {
    console.log(question);
     return (
      <div>
        <IndividualQuestion question={question} key={question.question_id}/>
      </div>

      )
  })


}

export default QuestionsList;