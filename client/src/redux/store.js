import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer.js';


const initialState = {
  //TODO: set initial state
};

const store = createStore(rootReducer, initialState);


export default store;