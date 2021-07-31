// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from '../client/src/redux/store.js';
// import Overview from '../client/src/components/overview/Index.jsx';

// const div = document.createElement('div');
// ReactDOM.render(<Provider store={store}><Overview/></Provider>, div);

// test('renders without crashing', () => {
//   expect(div.querySelector('.product-name').textContent).toBe('Air Minis 250');
// })

// test('renders first style on load', () => {
//   expect(div.querySelector('.style-name').textContent).toBe('Forest Green & Black');
// })

// test('renders sizes for the current style', () => {
//   expect(div.querySelector('#add-to-cart-size').textContent).toContain('XS');
// })

// test('renders max quantity for the current style', () => {
//   expect(div.querySelector('#add-to-cart-quantity').textContent).toContain('0');
// })
describe('Catbird', () => {

  jest.mock('../client/src/Index.jsx')
  document.body.innerHTML = `<div id="app"></div>`;
  require('../client/src/Index.jsx')


  it('should render only two reviews on the page on init', () => {
    expect(document.getElementById('review-feed').children.length).toBe(2)
  })
  // it('should render two more reviews on the page on more review button click', () => {
  //   const btn = document.getElementById("#more-reviews")
  //   btn.simulate("click")

  //   expect(document.getElementById('reviews-list').children.length).toBe(4)
  // })
})