import React, { useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../redux/index.js';
import QuestionsList from './QuestionsList.jsx';
// import IndividualQuestion from './individual-question/Index.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './add-question-model/Index.jsx';
import AddAnswer from './add-answer-model/Index.jsx';
import axios from 'axios';

const QnAComponent = (props) => {
const state = useSelector(state => state);

useEffect(() => {
  axios.get('h')
})

  return (
     <div>
    <QuestionsList />
    <SearchQuestions />
    <MoreAnsweredQuestions />
    <AddQuestionModel />
    <AddAnswerModel />
    </div>

  )

}




export default QnAComponent;