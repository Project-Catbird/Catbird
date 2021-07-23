import { combineReducers } from 'redux';
import selectedProductReducer from './qnaReducer.js';



const rootReducer = combineReducers({

  selectedProductReducer: selectedProductReducer
});


export default rootReducer;