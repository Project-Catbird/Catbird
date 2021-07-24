import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';



const rootReducer = combineReducers({
  product_id: qnaReducers.productIdReducer,
  qnaList: qnaReducers.qnaListReducer,
  answerList: qnaReducers.answerReducer,
  addQuestion: qnaReducers.addQuestionReducer
});


export default rootReducer;