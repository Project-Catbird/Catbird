

export const qnaListReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_QUESTION_LIST':
      return action.questionList;
  default:
    return state;
  }
};


export const productIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'CURRENT_PRODUCT_ID':
      return action.product_id;
    default:
       return state;
  }
}

export const answerReducer = (state = [], action) => {
   switch (action.type) {
     case 'FETCH_ANSWER_LIST':
       return action.answerList;
     default:
       return state;
   }
}

export const addQuestionReducer = (state = false, action) => {
  switch (action.type) {
    case 'ADD_QUESTION':
      return !state;
    default:
      return state;
  }
}