export const action = (payload) => {
  return (dispatch) => {
    dispatch({
      type: 'type',
      payload: payload
    });
  }
}