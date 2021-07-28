import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';


const QnAComponent = (props) => {
const qnaList = useSelector(state => state.qnaList);
const dispatch = useDispatch();
const { fetchQuestionList} = bindActionCreators(actionCreators, dispatch);

useEffect(() => {
  fetchQuestionList();
}, [])


  return (
    <Container>
      <br />
      <Row>
        <Col>
        </Col>
        <Col
        xs={5}
        className="qna-title text-center">
          QUESTION AND ANSWERS
        </Col>
        <Col>
        </Col>
     </Row>
      <br />
      <Container fluid="md" className="flex-nowrap text-center">
      <Row>
        <Col><SearchQuestions /></Col>
        </Row>
        </Container>
      <Row>
      {qnaList.length !==0 && <QuestionsList qnaList={qnaList}/>}
      </Row>
    </Container>

  )
}


export default QnAComponent;