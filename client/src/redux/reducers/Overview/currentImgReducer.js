const currentImgReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CURRENT_IMG':
      return action.payload;
    default:
      return state;
  }
};

export default currentImgReducer;