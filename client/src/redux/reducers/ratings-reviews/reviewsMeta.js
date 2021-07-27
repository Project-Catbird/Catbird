import Redux from 'redux';
import reviews from '../../../../../sampleData/reviews.js';

let initialState = reviews.reviewsMeta;

const reviewsMetaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REVIEWS_META':
      return action.reviewsMeta;
    default:
      return state;
  }
}

export default reviewsMetaReducer;