import { combineReducers } from 'redux';
import qnaListReducer from './qnaReducer.js';



const rootReducer = combineReducers({

  qnaList: qnaListReducer

});


export default rootReducer;