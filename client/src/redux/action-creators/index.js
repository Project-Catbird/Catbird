import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

export const changeSelectedProduct = (selectedProduct) => {
  return (dispatch) => {
    axios.get(`${API_URL}qa/questions?product_id=16056`, {headers: {Authorization: API_KEY}})
    .then(result =>  {
      console.log(result.data)
      dispatch({
        type:'GET RESULT',
        payload: result.data
      })
    }).catch(err => console.log('error from axios call changeSelectedProduct', err))

  }
}


export const changeQuestions = (questions) => {
  return (dispatch) => {
    dispatch({
      type:'GET ALL QUESTIONS OF SELECTED PRODUCT',
      payload: ''
    })
  }
}