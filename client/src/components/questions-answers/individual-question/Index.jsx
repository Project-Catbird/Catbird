import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AnswerList from '/Users/gitayier/Desktop/Catbird/client/src/components/questions-answers/individual-question/AnswerList.jsx';

const IndividualQuestion = ({ question }) => {
  const question_id = question.question_id;
  const question_body = question.question_body;
  const dispatch = useDispatch();
  const { fetchAnswerList } = bindActionCreators(actionCreators, dispatch);
  const answerList = useSelector(state => state.answerList).sort((a, b) => { return b.helpfulness - a.helpfulness});
  console.log('I wanna check if this list is sorted', answerList)


useEffect(() => {
  fetchAnswerList(question_id);
}, [])

  return (
    <Container>
      <Row><strong>Q: {question_body}</strong></Row>
      <Row>{answerList.length !== 0 && <AnswerList answerList={answerList} question_id={question_id} question_body={question_body} />}</Row>
    </Container>
  )
}

export default IndividualQuestion;