

export const qnaListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUESTION_LIST':
      return action.questionList;
  default:
    return state;
  }
};

export const questionIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'FETCH_QUESTION_ID':
      return action.questionId;
  default:
    return state
  }
}