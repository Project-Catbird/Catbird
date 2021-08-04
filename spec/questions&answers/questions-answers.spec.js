
import React from 'react';
import { render, screen, fireEvent, cleanup } from './test-utils';
import { questions } from '../../sampleData/questions-answers.js';
import QnAComponent from '../../client/src/components/questions-answers/Index.jsx';
import QuestionsList from '../../client/src/components/questions-answers/QuestionsList.jsx';


describe('root component render without error', () => {

  beforeEach(() => {
      render(<QnAComponent />)
    });

    afterEach(() => {
      cleanup();
    })

    test('render QnaComponent with redux', () => {
      const div = document.createElement('div');
      const component = render(<QnAComponent />, div)
      expect(component.container).toMatchSnapshot()
    })

})


// describe('QuestionList component can render without error', () => {
//   const questionList = questions.results;

//   const { getByTestId } = render(<QuestionsList />, { initialState: { qnaList: questionList }})

//   expect(getByTestId()).tohave


// })





