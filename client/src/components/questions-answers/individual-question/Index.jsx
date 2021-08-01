import React, { useEffect, useState }from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Container, Row, Col } from 'react-bootstrap';
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
    const [addHelpfulUsed, setAddHelpfulUsed ] = useState(false);

    const addHelpfulness = () => {
      setAddHelpfulUsed(true);
     if(!addHelpfulUsed) {
       markQuestionHelpful(question_id)
       .then((res) => {
       console.log(res.data);
       addedHelpful = addedHelpful + 1;
     })
     .catch(err => console.log(err))
     }
    };

    useEffect(() => {
      fetchAnswerList(question_id)
      .then(result => {
        setAnswerList(result.data.results)
      })
      .catch(err => console.log('error from fetching answerslist', err ))
    }, [question_id])

    const sortedAnswerList = answerList.sort((a, b) => { return b.helpfulness - a.helpfulness});


  return (
      <div>
        <div className="questionHeader">
          <div className="qna-title">Q:  <span className="qna-q">{question_body}</span>
          </div>
            <div className="helpAndAddAnswer">
              <div className="answerStamp helpfulBody">
                <QuestionHelpfulness
                  question_id={question_id}
                  helpfulness={addedHelpful}
                  addHelpfulness={addHelpfulness}
                  key={'QuestionHelpfulness' + question_id}
                  addHelpfulUsed={addHelpfulUsed}
                  />
              </div>
              <div className="answerStamp addAnswersBody" key={'AddAnswerDiv' + question_id}>
                <AddAnswer
                  key={question_id + 'AddAnswerUniqueKey'}
                  question_id={question_id}
                  question_body={question_body}
                  />
              </div>
            </div>
        </div>

        <div className="answerList">
          {sortedAnswerList.length !== 0 && <AnswerList answerList={sortedAnswerList} question_id={question_id} question_body={question_body} />}
        </div>

      </div>
    )
}

export default IndividualQuestion;