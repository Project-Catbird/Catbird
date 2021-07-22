import Redux from 'redux';


const reviewsCountReducer = (state = 2, action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS_COUNT':
      return action.reviewsCount;
    default:
      return state;
  }
}

export default reviewsCountReducer;