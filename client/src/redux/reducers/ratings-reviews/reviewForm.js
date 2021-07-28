import Redux from 'redux';


const reviewFormReducer = (state = {
  rating: null,
  summary: '',
  body: '',
  recommend: null,
  name: '',
  email: '',
  characteristics: {}
}, action) => {
  switch (action.type) {
    case 'UPDATE_NEW_REVIEW_FORM':
      return action.payload;
    default:
      return state;
  }
}

export default reviewFormReducer;