import { productsId } from '../../../../../sampleData/products'

const productInfoReducer = (state = productsId, action) => {
  switch (action.type) {
    case 'SET_PRODUCT':
      return action.payload;
    default:
      return state;
  }
};

export default productInfoReducer;