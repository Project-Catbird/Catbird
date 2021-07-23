const initialState = {
  selectedProducId: '',
  selectedProduct: {},
  questions: [],
  answers:[]
};


const selectedProductReducer = (state = initialState.selectedProduct, action) => {
  switch (action.type) {
    case 'GET RESULT':
      return action.payload;
  default:
    return state;
  }
};
export default selectedProductReducer;