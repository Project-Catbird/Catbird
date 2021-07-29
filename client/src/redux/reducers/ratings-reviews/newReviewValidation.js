import Redux from 'redux';


const  newReviewValidationReducer = (state = {
  rating: false,
  recommend: false
}, action) => {
  switch (action.type) {
    case 'VALIDATE_REVIEW':
      return action.reviewValidator;
    default:
      return state;
  }
}

export default newReviewValidationReducer;