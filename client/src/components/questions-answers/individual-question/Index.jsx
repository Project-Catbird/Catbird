import React from 'react';

const IndividualQuestion = ({ question, key }) => {
  return (
    <div>
      <h3>Q: {question.question_body}</h3>
      <h3>A: </h3>
    </div>
  )
}

export default IndividualQuestion;