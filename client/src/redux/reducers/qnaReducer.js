

const qnaListReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_QUESTION_LIST':
      return action.payload;
  default:
    return state;
  }
};
export default qnaListReducer;