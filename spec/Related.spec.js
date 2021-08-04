import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils'
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';
import store from '../client/src/redux/store.js';
import RelatedComparisons from '../client/src/components/related-comparisons/Index.jsx';
import ProductCard from '../client/src/components/related-comparisons/ProductCard.jsx';

describe('related-comparisons', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <RelatedComparisons />
      </Provider>)
  });

  it('Loads related products', () => {
    expect(wrapper.find('.related-products-container').exists()).toBe(true);
  });

  it('Loads outfit list', () => {
    expect(wrapper.find('.outfit-list-container').exists()).toBe(true);
  });

  it('Outfits list starts with an add outfit card', () => {
    expect(wrapper.find('.outfit-list-container').exists()).toBe(true);
    expect(wrapper.find('.outfit-list-container .card-group').children().length).toBe(1);
  });
});

describe('Related Product Card', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ProductCard productId={16056} cardType="related"/>
      </Provider>);
    wrapper.update();
    console.log(wrapper.debug());
  });

  it('Loads product card fields', () => {
    expect(wrapper.find('.product-card').exists()).toBe(true);
    expect(wrapper.find('.card').exists()).toBe(true);
    expect(wrapper.find('.card-body').exists()).toBe(true);
    expect(wrapper.find('.card-title').exists()).toBe(true);
  });

  it('Has compare button and no remove outfit buttons', () => {
    expect(wrapper.find('.compare-button').exists()).toBe(true);
    expect(wrapper.find('.remove-outfit-button').exists()).toBe(false);
  });

  it('Should open comparison modal when clicking on compare button', () => {
    expect(wrapper.find('.comparison').exists()).toBe(false);
    wrapper.find('.compare-button').simulate('click');
    expect(wrapper.find('.comparison').exists()).toBe(true);
    expect(wrapper.find('.comparison').prop('show')).toBe(true);
  })
});

describe('Outfit Card', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ProductCard productId={16056} cardType="outfit"/>
      </Provider>);
    wrapper.update();
    console.log(wrapper.debug());
  });

  it('Loads product card fields', () => {
    expect(wrapper.find('.product-card').exists()).toBe(true);
    expect(wrapper.find('.card').exists()).toBe(true);
    expect(wrapper.find('.card-body').exists()).toBe(true);
    expect(wrapper.find('.card-title').exists()).toBe(true);
  });

  it('Has remove outfit buttons and no compare button', () => {
    expect(wrapper.find('.compare-button').exists()).toBe(false);
    expect(wrapper.find('.remove-outfit-button').exists()).toBe(true);
  });

});