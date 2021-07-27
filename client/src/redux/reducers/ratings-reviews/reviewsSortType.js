import Redux from 'redux';


const reviewsSortTypeReducer = (state = 'relevant', action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS_SORT_TYPE':
      return action.sortType;
    default:
      return state;
  }
}

export default reviewsSortTypeReducer;