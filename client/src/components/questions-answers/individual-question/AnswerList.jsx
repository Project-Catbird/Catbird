import React from 'react';
import Answer from './Answer.jsx';

const AnswerList = ({ answerList }) => {

  return answerList.map(answer => {
    // console.log('this is answer in AnswerList component', answer);
    return(
      <div key={answer.answer_id}>
      <Answer answer={answer}/>
      </div>
    )
  })
}

export default AnswerList;