import Redux from 'redux';


const  keywordSearchReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPDATE_REVIEW_SEARCH':
      return action.payload;
    default:
      return state;
  }
}

export default keywordSearchReducer;
