import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import store from '../client/src/redux/store.js';
import { Provider } from 'react-redux';
import RatingsReviews from '../client/src/components/ratings-reviews/Index.jsx';
import ReviewsList from '../client/src/components/ratings-reviews/ReviewsList.jsx';
import IndividualReviewTile from '../client/src/components/ratings-reviews/IndividualReviewTile.jsx';
import newReviewValidationReducer from '../client/src/redux/reducers/ratings-reviews/newReviewValidation.js';

describe('ratings-reviews', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <Provider store={store}>
      <RatingsReviews />
    </Provider>)
  })
  // console.log(wrapper.find('ProductBreakdown').length)


  test('should be true', () => expect(true).toBe(true))
  test('should render only two reviews on the page on init', () => {
    expect(wrapper.find('IndividualReviewTile').length).toBe(2);
  })

  test('should update reviews count to 4 after more reviews button click', () => {
    let newCount = store.getState().reviewsCount + 2
    store.dispatch({
      type: 'UPDATE_REVIEWS_COUNT',
      reviewsCount: newCount
    })
    expect(store.getState().reviewsCount).toBe(4);
    wrapper.find('.btn').simulate('click')
  })

  test('should have an add review button', () => {
    expect(wrapper.find('.add-review').filter('button').length).toBe(1);
  })

  test('clicking the add review button should open up a modal to add a review', () => {
    wrapper.find('.add-review').filter('button').simulate('click');
    expect(store.getState().showNewReviewModal).toBe(true);
    expect(wrapper.find('Modal').filter('.new-review').length).toBe(1);
  })

  test('should be able to validate a new review when required fields are filled out', () => {
    let validator = store.getState().newReviewValidation;
    for (let field in validator) {
      if (field !== 'summary') {
        expect(validator[field]).toBeFalsy();
      }
    }

    wrapper.find('.new-review-body-input').at(0).simulate('change', {target: {value: '1234567890123456789012345678901234567890123456789012345678901234567890', getAttribute: () => 'body'}});
    expect(store.getState().newReviewValidation.body).toBe(true);
  })

  test('should not validate new review for bad inputs', () => {
    expect(store.getState().newReviewValidation.summary).toBe(true);
    wrapper.find('.new-review-summary').at(0).simulate('change', {target: {value: '1234567890123456789012345678901234567890123456789012345678901234567890', getAttribute: () => 'summary'}});
    expect(store.getState().newReviewValidation.summary).toBe(false);
  })

  test('should have an area to upload photos to new review', () => {
    expect(wrapper.find('input').filter('.photo-upload')).toBeDefined();
  })

  test('should have an area to select characteristics for a product in a new review', () => {
    const characteristics = wrapper.find('.new-review-characteristics');
    const characteristicsGroup = wrapper.find('.new-review-characteristics-group')
    expect(characteristics).toBeDefined();
    expect(characteristicsGroup).toBeDefined();
    expect(characteristics.containsAllMatchingElements([...characteristicsGroup])).toBe(true);
  })

})