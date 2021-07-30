import Redux from 'redux';


const  newReviewValidationReducer = (state = {
  rating: false,
  recommend: false,
  body: false,
  summary: true
}, action) => {
  switch (action.type) {
    case 'VALIDATE_REVIEW':
      return action.reviewValidator;
    default:
      return state;
  }
}

export default newReviewValidationReducer;