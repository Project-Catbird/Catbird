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
  return axios.get(`${API_URL}/qa/questions/${question_id}/answers`, { headers: {Authorization: API_KEY} })
}


export const getProductName = (product_id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/products/${16056}`, {
      headers: {Authorization: API_KEY}
    })
    .then(result => {
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


export const markAnswerHelpful = (answer_id) => {
  return axios.put(`${API_URL}/qa/answers/${answer_id}/helpful`, {}, { headers: { Authorization: API_KEY} })

}


export const markQuestionHelpful = (question_id) => {
  return axios.put(`${API_URL}/qa/answers/${question_id}/helpful`, {}, { headers: { Authorization: API_KEY} })
}
