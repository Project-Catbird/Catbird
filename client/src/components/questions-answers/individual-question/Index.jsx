import React, { useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AnswerList from '/Users/gitayier/Desktop/Catbird/client/src/components/questions-answers/individual-question/AnswerList.jsx';
import AddAnswer from '../add-answer-model/Index.jsx';
import QuestionHelpfulness from './QuestionHelpfulness.jsx';

const IndividualQuestion = ({ question }) => {
  const question_id = question.question_id;
  const question_body = question.question_body;
  const question_helpfulness = question.question_helpfulness;
  let addedHelpful = question_helpfulness;
  const markQuestionHelpful = actionCreators.markQuestionHelpful;
  const dispatch = useDispatch();
  const { fetchAnswerList } = bindActionCreators(actionCreators, dispatch);
  const answerList = useSelector(state => state.answerList).sort((a, b) => { return b.helpfulness - a.helpfulness});

 const addHelpfulness = () => {
   markQuestionHelpful(question_id)
   .then((res) => {

     addedHelpful = addedHelpful + 1;
   })
   .catch(err => console.log(err))
 }

useEffect(() => {
  fetchAnswerList(question_id);
}, [])




  return (
    <Container>

      <Row>
        <Col>
        <span className="qna-title">Q:  <span className="qna-q">{question_body}</span></span>
        </Col>


        <Col className="answerStamp align-self-center" md="auto" >
        <QuestionHelpfulness helpfulness={addedHelpful} addHelpfulness={addHelpfulness}/>


          {/* Helpful? <span className="markHelpful" >Yes({question_helpfulness})</span> */}
        </Col>




        <Col className="answerStamp align-self-center" md="auto"><AddAnswer question_id={question_id} question_body={question_body}/></Col>
      </Row>
      <Row>
        {answerList.length !== 0 && <AnswerList answerList={answerList} question_id={question_id} question_body={question_body} />}
      </Row>

    </Container>
  )
}

export default IndividualQuestion;