/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../client/src/redux/store.js';
import Overview from '../client/src/components/overview/Index.jsx';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Overview/></Provider>, div);

  expect(div.querySelector('.product-name').textContent).toBe('Air Minis 250');
})