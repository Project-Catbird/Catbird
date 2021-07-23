import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

//ACTION CREATORS

export const fetchQuestionList = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/qa/questions`,
    {
      headers: {Authorization: API_KEY},
      params: {
      product_id: 16056
      }
    })
    .then(result =>  {
      console.log(result.data)
      dispatch({
        type:'FETCH_QUESTION_LIST',
        questionList: result.data.results
      });
      dispatch({
        type: 'FETCH_QUESTION_ID',
        questionId: result.data.product_id
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