import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import store from '../client/src/redux/store.js';
import { Provider } from 'react-redux';

describe('ratings-reviews', () => {
  // const React = require('react')
  // const Enzyme = require('enzyme')
  // const shallow = require('enzyme').shallow
  // const Adapter = require('enzyme-adapter-react-15')
  // Enzyme.configure({ adapter: new Adapter() })
  // const $ = require('jquery');
  // jest.mock('../client/src/Index.jsx')
  // document.body.innerHTML = `<div id="app"></div>`;
  // const App = require('../client/src/components/App.jsx').default;
  // $('#app').append(<App />)
  // let wrapper = shallow(<App />)


  // console.log(wrapper)



  configure({ adapter: new Adapter() });


  const App = require('../client/src/components/App.jsx').default;
  let wrapper = mount(
  <Provider store={store}>
    <App />
  </Provider>)
  console.log(wrapper)


  it('should be true', () => expect(true).toBe(true))
  // it('should render only two reviews on the page on init', () => {
  //   expect($('#review-feed').children.length).toBe(2)
  // })
  // it('should render two more reviews on the page on more review button click', () => {
  //   const reviewsCountReducer = require('../client/src/redux/reducers/ratings-reviews/reviewsCount.js').default;
  //   let state = 2
  //   state = reviewsCountReducer(state, {type: 'UPDATE_REVIEWS_COUNT', reviewsCount: 4})
  //   expect(state).toBe(4)
  // })
})