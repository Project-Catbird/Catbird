import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';



const rootReducer = combineReducers({

  product_id: qnaReducers.productIdReducer,
  product_name: qnaReducers.productNameReducer,
  qnaList: qnaReducers.qnaListReducer,
  answerList: qnaReducers.answerReducer,
  openAddQuestionModal: qnaReducers.openAddQuestionModalReducer,
  addAnswerModalIsOpen: qnaReducers.addAnswerModalIsOpenReducer,
  searchBarInput:qnaReducers.searchBarInputReducer

});


export default rootReducer;