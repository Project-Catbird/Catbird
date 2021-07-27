import { combineReducers } from 'redux';
import * as qnaReducers from './qnaReducers.js';



const rootReducer = combineReducers({

  product_id: qnaReducers.productIdReducer,
  product_name: qnaReducers.productNameReducer,
  qnaList: qnaReducers.qnaListReducer,
  addAnswerModalIsOpen: qnaReducers.addAnswerModalIsOpenReducer,
  addQuestionModalIsOpen: qnaReducers.addQuestionModalIsOpenReducer,
  searchBarInput:qnaReducers.searchBarInputReducer,

});


export default rootReducer;