import Redux from 'redux';


const showNewReviewModalReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_REVIEW_MODAL':
      return action.showNewReviewModal;
    default:
      return state;
  }
}

export default showNewReviewModalReducer;