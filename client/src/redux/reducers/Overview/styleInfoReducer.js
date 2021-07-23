import { productsIdStyles } from '../../../../../sampleData/products'

const styleInfoReducer = (state = productsIdStyles.results[0], action) => {
  switch (action.type) {
    case 'GET_STYLE':
      return action.payload;
    default:
      return state;
  }
};

export default styleInfoReducer;