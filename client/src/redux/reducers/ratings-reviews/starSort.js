import Redux from 'redux';


const starSortReducer = (state = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false
}, action) => {
  switch (action.type) {
    case 'UPDATE_STAR_SORT':
      return action.payload;
    default:
      return state;
  }
}

export default starSortReducer;