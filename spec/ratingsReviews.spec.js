import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import store from '../client/src/redux/store.js';
import { Provider } from 'react-redux';
import RatingsReviews from '../client/src/components/ratings-reviews/Index.jsx';
import ReviewsList from '../client/src/components/ratings-reviews/ReviewsList.jsx';
import IndividualReviewTile from '../client/src/components/ratings-reviews/IndividualReviewTile.jsx';
import newReviewValidationReducer from '../client/src/redux/reducers/ratings-reviews/newReviewValidation.js';
import PhotoUpload from '../client/src/components/ratings-reviews/new-review/PhotoUpload.jsx';

describe('ratings-reviews', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
    <Provider store={store}>
      <RatingsReviews />
    </Provider>)
  })

  // Example:
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
    expect(wrapper.find(PhotoUpload)).toBeDefined();
  })

  test('should have an area to select characteristics for a product in a new review', () => {
    const characteristics = wrapper.find('.new-review-characteristics');
    const characteristicsGroup = wrapper.find('.new-review-characteristics-group')
    expect(characteristics).toBeDefined();
    expect(characteristicsGroup).toBeDefined();
    expect(characteristics.containsAllMatchingElements([...characteristicsGroup])).toBe(true);
  })

  test('should render correct data for a review', () => {
    const reviewData = {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        }
      ]
    }
    const reviewWrap = mount(<Provider store={store}><IndividualReviewTile review={reviewData}/></Provider>)
    expect(reviewWrap.find('.summary').text()).toEqual(reviewData.summary);
    expect(reviewWrap.find('.body').text()).toEqual(reviewData.body);
    expect(reviewWrap.find('.review-name').text()).toContain(reviewData.reviewer_name);
  })

  test('should have an area to render photos of review', () => {
    const carousel = wrapper.find('.review-carousel');
    const reviewImages = wrapper.find('.review-images');
    expect(carousel).toBeDefined();
    expect(reviewImages).toBeDefined();
    expect(carousel.containsAllMatchingElements([...reviewImages])).toBe(true);
  })
})