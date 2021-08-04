import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../client/src/redux/reducers/main.js';
import thunk from 'redux-thunk';
const middleware = [thunk];


const render = (
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middleware)
      ),
      ...renderOptions
    } = {}
) => {
  const Wrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
  }

export * from '@testing-library/react'

export { render }