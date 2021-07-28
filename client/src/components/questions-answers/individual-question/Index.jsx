import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AnswerList from './AnswerList.jsx';
import AddAnswer from '../add-answer-model/Index.jsx';
import QuestionHelpfulness from './QuestionHelpfulness.jsx';

const IndividualQuestion = ({ question }) => {
  const question_id = question.question_id;
  const question_body = question.question_body;
  const question_helpfulness = question.question_helpfulness;
  let addedHelpful = question_helpfulness;
  const markQuestionHelpful = actionCreators.markQuestionHelpful;
  const dispatch = useDispatch();
  const fetchAnswerList = actionCreators.fetchAnswerList;


  const [answerList, setAnswerList ] = useState([]);



 const addHelpfulness = () => {
   markQuestionHelpful(question_id)
   .then((res) => {

     addedHelpful = addedHelpful + 1;
   })
   .catch(err => console.log(err))
 }

useEffect(() => {
  fetchAnswerList(question_id)
  .then(result => {
    // console.log(result.data.results)
    setAnswerList(result.data.results)
  })
  .catch(err => console.log('error from fetching answerslist', err ))
}, [question_id])



const SortedAnswerList = answerList.sort((a, b) => { return b.helpfulness - a.helpfulness});


return (
    <Container>

      <Row className="flex-nowrap">
        <Col xs={6}>
        <span className="qna-title">Q:  <span className="qna-q">{question_body}</span></span>
        </Col>

        <Col className="answerStamp align-self-center" xs={{ span: 2, offset: 2 }} >
        <QuestionHelpfulness helpfulness={addedHelpful} addHelpfulness={addHelpfulness}/>
        <AddAnswer question_id={question_id} question_body={question_body}/>
        </Col>


      </Row>
      <Row>
        {answerList.length !== 0 && <AnswerList answerList={answerList} question_id={question_id} question_body={question_body} />}
      </Row>

    </Container>
  )
}

export default IndividualQuestion;