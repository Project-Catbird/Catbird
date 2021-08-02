import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index.js';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import AddQuestion from './add-question-model/Index.jsx'


const QnAComponent = (props) => {
const qnaList = useSelector(state => state.qnaList).sort((a, b) => b.question_helpfulness - a.question_helpfulness);

const productId = useSelector(state => state.productId);
var searchBarTyped = useSelector(state => state.searchBarTyped);

var [ count, setCount ] = useState(4);
var [ noMoreQuestion, setNoMoreQuestion ] = useState(false);
const dispatch = useDispatch();
const { fetchQuestionList } = bindActionCreators(actionCreators, dispatch);
var qnaListShown = qnaList.slice(0, count);



  useEffect(() => {
    fetchQuestionList(productId, 1, 1000);
  }, [productId]);


  const getMoreQuestions = () => {
    setCount(count + 2);
   if (count >= qnaList.length) {
     setNoMoreQuestion(true);
   }
  }

  const rennderComponents = () => {

    if (qnaList.length !==0 && !searchBarTyped) {
       return (

        <QuestionsList
          qnaList={qnaListShown}
          getMoreQuestions={getMoreQuestions}
          noMoreQuestion={noMoreQuestion}
        />

       )
    }

    if (qnaList.length === 0) {
      return (
        <Container className="twoMainButton">
          <Row className="flex-nowrap text-center">
            <Col className="flex-md-fill">
              <AddQuestion />
            </Col>
          </Row>
        </Container>
      )
    }

    if (searchBarTyped) {
      return null;
    }

  }



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
      <Container fluid className="flex-nowrap text-center">
      <Row>
          <Col>
            <SearchQuestions qnaList={qnaList}/>
          </Col>
        </Row>
        </Container>
      <Row>
        {rennderComponents() }
      </Row>
    </Container>

  )
}


export default QnAComponent;