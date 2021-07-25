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

      dispatch({
        type:'FETCH_QUESTION_LIST',
        questionList: result.data.results
      });

      dispatch({
        type: 'CURRENT_PRODUCT_ID',
        product_id: result.data.product_id
      })



    }).catch(err => console.log('error from axios call fetchQuestionList', err))

  }
}


export const fetchAnswerList = (question_id) => {

  return (dispatch) => {
    axios.get(`${API_URL}/qa/questions/${question_id}/answers`,{
      headers: {Authorization: API_KEY}
    })
    .then(result => {
      console.log('this is result of axios call', result.data.results)
      dispatch({
        type: 'FETCH_ANSWER_LIST',
        answerList: result.data.results
      })
    })
    .catch(err => console.log('error from fetchAnserList axios get request', err))
  }
}


export const getProductName = (product_id) => {
  return (dispatch) => {
    console.log('this is product_id in getProductname request', product_id);
    axios.get(`${API_URL}/products/${16056}`, {
      headers: {Authorization: API_KEY}
    })
    .then(result => {
      console.log('this is the result data from axios request to get product name', result.data)
      dispatch({
        type: 'GET_PRODUCT_NAME',
        product_name: result.data.name
      })
    })
    .catch(err => {
      console.log('this is the error from axios request to get product name', err)
    });
  }
}
