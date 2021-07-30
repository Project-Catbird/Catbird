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

export const setProduct = (product) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_PRODUCT',
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

export const setStyle = (style) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_STYLE',
      payload: style
    })
  }
}

export const setCurrentImg = (index) => {
  return (dispatch) => {
    dispatch({
      type: 'SET_CURRENT_IMG',
      payload: index
    })
  }
}
