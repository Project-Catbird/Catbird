import Redux from 'redux';


const photoUploadReducer = (state = null, action) => {
  switch (action.type) {
    case 'UPLOAD_PHOTO':
      return action.photo;
    default:
      return state;
  }
}

export default photoUploadReducer;