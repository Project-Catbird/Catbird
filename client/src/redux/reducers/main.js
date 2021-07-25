import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';



const rootReducer = combineReducers({

  product_id: qnaReducers.productIdReducer,
  product_name: qnaReducers.productNameReducer,
  qnaList: qnaReducers.qnaListReducer,
  answerList: qnaReducers.answerReducer,
  openAddQuestionModal: qnaReducers.openAddQuestionModalReducer,
  addAnswerModalIsOpen: qnaReducers.addAnswerModalIsOpenReducer,
  searchBarInput:qnaReducers.searchBarInputReducer,
  // answer_id: qnaReducers.answer_idReducer,
  // markHelpful: qnaReducers.markHelpfulReducer,
  // markAnswerhelpful: qnaReducers.markAnswerHelpfulReducer,
  isAnswerMarkedHelpful: qnaReducers.isAnswerMarkedHelpfulReducer

});


export default rootReducer;