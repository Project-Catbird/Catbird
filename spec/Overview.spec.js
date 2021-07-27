/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../client/src/redux/store.js';
import Overview from '../client/src/components/overview/Index.jsx';

const div = document.createElement('div');
ReactDOM.render(<Provider store={store}><Overview/></Provider>, div);

test('renders without crashing', () => {
  expect(div.querySelector('.product-name').textContent).toBe('Air Minis 250');
})

test('renders first style on load', () => {
  expect(div.querySelector('.style-name').textContent).toBe('Forest Green & Black');
})

test('renders sizes for the current style', () => {
  expect(div.querySelector('#add-to-cart-size').textContent).toContain('XS');
})

test('renders max quantity for the current style', () => {
  expect(div.querySelector('#add-to-cart-quantity').textContent).toContain('0');
})