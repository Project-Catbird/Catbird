import React from 'react';

const IndividualQuestion = (props) => {
  return (
    <div>
      <h3>Q: {props.title}</h3>
      <h3>A: {props.anwer}</h3>
    </div>
  )
}

export default IndividualQuestion;