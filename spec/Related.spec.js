import React from 'react';
import ReactDOM from 'react-dom';
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

describe('related-comparisons', () => {
  configure({ adapter: new Adapter() });
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ProductCard productId={16056} cardType="related"/>
      </Provider>)
  });

  it('Loads product card', () => {
    expect(wrapper.find('.product-card').exists()).toBe(true);
    expect(wrapper.find('.card').exists()).toBe(true);
  });
});