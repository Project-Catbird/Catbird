
import React from 'react';
import { render, screen, fireEvent, cleanup } from './test-utils';
import QuestionsList from '../../../client/src/components/questions-answers/QuestionsList.jsx';



  beforeEach(() => {
    render(<QuestionsList />)
  });

  afterEach(() => {
    cleanup();
  })

  test('render with redux', () => {
    const div = document.createElement('div');
    const component = render(<QnAComponent />, div)
    expect(component.container).toMatchSnapshot()
  })



