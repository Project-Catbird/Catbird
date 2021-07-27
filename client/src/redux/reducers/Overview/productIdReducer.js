const productIdReducer = (state = 16056, action) => {
  switch (action.type) {
    case 'SET_PRODUCT_ID':
      return action.payload;
    default:
      return state;
  }
};

export default productIdReducer;