import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../redux/index.js';
import axios from 'axios';

import { API_KEY, API_URL } from '../../config/config.js';


//import components
import QuestionsList from './QuestionsList.jsx';
import SearchQuestions from './SearchQuestions.jsx';
import MoreAnsweredQuestions from './MoreAnsweredQuestions.jsx';
import AddQuestion from './add-question-model/Index.jsx';
import AddAnswer from './add-answer-model/Index.jsx';

const QnAComponent = (props) => {
const qnaList = useSelector(state => state.qnaList);
const dispatch = useDispatch();
const { fetchQuestionList } = bindActionCreators(actionCreators, dispatch);

useEffect(() => {
  fetchQuestionList();
}, [])

  return (
    <div>
    {qnaList.length!==0 && <QuestionsList qnaList={qnaList}/>}
    <SearchQuestions />
    <MoreAnsweredQuestions />
    <AddQuestion />
    <AddAnswer />
    </div>

  )

}


export default QnAComponent;