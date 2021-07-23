import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';



const rootReducer = combineReducers({

  qnaList: qnaReducers.qnaListReducer,
  questionId: qnaReducers.questionIdReducer

});


export default rootReducer;