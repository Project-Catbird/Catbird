import React from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../config/config.js';

const LogClicks = ({ children }) => {
  const moduleIds = {
    'main-nav': 'Navigation',
    'main-overview': 'Overview',
    'main-related': 'RelatedComparisons',
    'main-qna': 'QuestionsAndAnswers',
    'main-ratings': 'RatingsReviews'
  }
  const onClick = React.useCallback((e) => {
    let params = {
      widget: null,
      element: null,
      time: new Date()
    }
    if (e.target.id) {
      params.element = `#${e.target.id}`;
    } else if (e.target.className) {
      params.element = `.${e.target.className}`;
    } else {
      params.element = e.nativeEvent.path[0].nodeName.toLowerCase();
    }
    for (let component of e.nativeEvent.path) {
      if (moduleIds[component.id]) {
        params.widget = moduleIds[component.id];
      }
    }
    axios.post(`${API_URL}/interactions`, params, {headers: {Authorization: API_KEY}})
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }, []);
  return <div onClickCapture={onClick}>{children}</div>;
}

export default LogClicks;