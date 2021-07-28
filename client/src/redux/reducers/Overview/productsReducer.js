import { products } from '../../../../../sampleData/products'

const productsReducer = (state = products, action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

export default productsReducer;