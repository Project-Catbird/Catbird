import React from 'react';
import { Provider } from 'react-redux';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from '../client/src/components/overview/Index.jsx';
import store from '../client/src/redux/store.js';

describe('overview', () => {

  configure({adapter: new Adapter()});
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Overview/></Provider>);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('.product-overview').exists()).toBe(true);
  });

  it('renders first style on load', () => {
    expect(wrapper.find('.style-name').text()).toBe('Forest Green & Black');
  });

  it('renders sizes for the current style', () => {
    expect(wrapper.find('#add-to-cart-size').children().length).toBe(4);
  });

  it('renders all pictures for current style', () => {
    expect(wrapper.find('#slider').children().length).toBe(2);
  });

  it('renders modal when image is clicked', () => {
    wrapper.find('#featured').simulate('click');
    expect(wrapper.find('.modal-dialog').exists()).toBe(true);
  });

  it('renders add to cart button', () => {
    expect(wrapper.find('#add-to-cart-btn').exists()).toBe(true);
  });

  it('renders 0 quantity when size is not selected', () => {
    expect(wrapper.find('#add-to-cart-quantity').children().length).toBe(2);
  });

  it('renders quantity of 8 when XS size is selected', () => {
    wrapper.find('#add-to-cart-size').at(0).simulate('change', {
      target: { value: "37" }
    });
    expect(wrapper.find('#add-to-cart-quantity').children().length).toBe(10);
  });

  it('renders new style when style is selected', () => {
    wrapper.find('.style-item').at(1).simulate('click');
    expect(wrapper.find('.style-name').text()).toBe('Desert Brown & Tan');
  });

});