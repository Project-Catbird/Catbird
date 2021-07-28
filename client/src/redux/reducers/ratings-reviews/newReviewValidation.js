import Redux from 'redux';


const  newReviewValidationReducer = (state = {
  rating: false,
  recommendation: false,
  Size: false,
  Width: false,
  Comfort: false,
  Quality: false,
  Length: false
}, action) => {
  switch (action.type) {
    case 'VALIDATE_REVIEW':
      return action.reviewValidator;
    default:
      return state;
  }
}

export default newReviewValidationReducer;