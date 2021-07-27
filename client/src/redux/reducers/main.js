import { combineReducers } from 'redux';
import productsReducer from './Overview/productsReducer';
import productInfoReducer from './Overview/productInfoReducer';
import styleReducer from './Overview/styleReducer';
import styleInfoReducer from './Overview/styleInfoReducer';
import productIdReducer from './Overview/productIdReducer';


const rootReducer = combineReducers({
  products: productsReducer,
  productId: productIdReducer,
  productInfo: productInfoReducer,
  styles: styleReducer,
  style: styleInfoReducer,
  //TODO: Combine all reducers into one single rootReducer
  //Examples:
  //combineReducers({ counter: counter, todos: todos }).
  //ES6 property shorthand:  combineReducers({ counter, todos })
});


export default rootReducer;