import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import LogClicks from './components/LogClicks.jsx';


ReactDOM.render(
  <Provider store={store}>
    <LogClicks>
      <App />
    </LogClicks>
  </Provider>,
  document.getElementById('app')
);