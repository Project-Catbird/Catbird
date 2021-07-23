export const getProducts = (products) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_PRODUCTS',
      payload: products
    })
  }
}

export const setProductId = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_PRODUCT_ID',
      payload: product
    })
  }
}

export const getStyles = (styles) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_STYLES',
      payload: styles
    })
  }
}

export const getProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'GET_PRODUCT',
      payload: product
    })
  }
}