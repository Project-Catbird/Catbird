import React from 'react';
import Answer from './Answer.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AnswerList = ({ answerList, question_id, question_body }) => {


  const answersShwon = answerList.slice(0, 2);
  const answers = answersShwon.map(answer => {
    return(
      <Container key={answer.answer_id}>
      <Answer answer={answer} question_id={question_id} question_body={question_body}/>
      </Container>
    )
  })

  return (
    <Container>
    {answers}
    </Container>
  )
}

export default AnswerList;