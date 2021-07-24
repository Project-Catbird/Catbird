import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Accordion } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../redux/action-creators/index.js'
import AnswerList from '/Users/gitayier/Desktop/Catbird/client/src/components/questions-answers/individual-question/AnswerList.jsx';

const IndividualQuestion = ({ question }) => {
  const question_id = question.question_id;
  const dispatch = useDispatch();
  const { fetchAnswerList } = bindActionCreators(actionCreators, dispatch);
  const answerList = useSelector(state => state.answerList);

useEffect(() => {
  fetchAnswerList(question_id);
}, [])

  return (
    <Accordion>
      <h4>Q: {question.question_body}</h4>
      <h4>{answerList.length !== 0 && <AnswerList answerList={answerList}/>}</h4>
    </Accordion>
  )
}

export default IndividualQuestion;