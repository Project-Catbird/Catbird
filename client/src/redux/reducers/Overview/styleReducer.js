import { productsIdStyles } from '../../../../../sampleData/products'

const styleReducer = (state = productsIdStyles, action) => {
  switch (action.type) {
    case 'GET_STYLES':
      return action.payload;
    default:
      return state;
  }
};

export default styleReducer;