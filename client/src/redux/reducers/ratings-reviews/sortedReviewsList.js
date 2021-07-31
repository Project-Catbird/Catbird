import Redux from 'redux';

const sortedReviewsListReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_SORTED_REVIEWS_LIST':
      return action.payload;
    default:
      return state;
  }
}

export default sortedReviewsListReducer;