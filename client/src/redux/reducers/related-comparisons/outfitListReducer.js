const outfitListReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_OUTFIT_LIST':
      return action.payload;
    default:
      return state;
  }
};

export default outfitListReducer;