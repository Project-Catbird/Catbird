import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

//ACTION CREATORS

export const fetchQuestionList = (product_id, page, count) => {
  return (dispatch) => {
    axios.get(`${API_URL}/qa/questions`,
    {
      headers: {Authorization: API_KEY},
      params: {
      // product_id: product_id,
      product_id: 16056,
      page: page,
      count:count
      }
    })
    .then(result =>  {

      dispatch({
        type:'FETCH_QUESTION_LIST',
        questionList: result.data.results
      });

    }).catch(err => console.log('error from axios call fetchQuestionList', product_id, err))

  }
}

//not a action creator
export const fetchAnswerList = (question_id, page, count) => {
  return axios.get(`${API_URL}/qa/questions/${question_id}/answers`, {
    headers: {Authorization: API_KEY},
    params: {
      page: page,
      count:count
      }
  })
}


export const getProductName = (product_id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/products/${16056}`, {
      headers: {Authorization: API_KEY},

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


// export const markAnswerHelpful = (answer_id) => {
//   return axios.put(`${API_URL}/qa/answers/${answer_id}/helpful`, {}, { headers: { Authorization: API_KEY} })

// }


export const markQuestionHelpful = (question_id) => {
  return axios.put(`${API_URL}/qa/questions/${question_id}/helpful`, {}, { headers: { Authorization: API_KEY} })
}

export const updateOutfitList = (outfit) => {
  return (dispatch) => {
    dispatch({
      type: 'UPDATE_OUTFIT_LIST',
      payload: outfit
    })
  }
}
