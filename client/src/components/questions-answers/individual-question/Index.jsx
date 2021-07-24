import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AnswerList from '/Users/gitayier/Desktop/Catbird/client/src/components/questions-answers/individual-question/AnswerList.jsx';

const IndividualQuestion = ({ question }) => {
  const question_id = question.question_id;
  const dispatch = useDispatch();
  const { fetchAnswerList } = bindActionCreators(actionCreators, dispatch);
  const answerList = useSelector(state => state.answerList).sort((a, b) => { return b.helpfulness - a.helpfulness});

useEffect(() => {
  fetchAnswerList(question_id);
}, [])

  return (
    <Container>
      <Row>Q: {question.question_body}</Row>
      <Row>{answerList.length !== 0 && <AnswerList answerList={answerList}/>}</Row>
    </Container>
  )
}

export default IndividualQuestion;