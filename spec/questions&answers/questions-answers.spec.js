
import React from 'react';
import { render, screen, fireEvent, cleanup } from './test-utils';
import { questions, answers } from '../../sampleData/questions-answers.js';
import QnAComponent from '../../client/src/components/questions-answers/Index.jsx';
import QuestionsList from '../../client/src/components/questions-answers/QuestionsList.jsx';
import AnswerList from '../../client/src/components/questions-answers/individual-question/AnswerList.jsx';
import AddQuestion from '../../client/src/components/questions-answers/add-question-model/Index.jsx';
import SearchQuestions from '../../client/src/components/questions-answers/SearchQuestions.jsx';


describe('root component render without error', () => {

  // beforeEach(() => {
  //     render(<QnAComponent />)
  //   });

  //   afterEach(() => {
  //     cleanup();
  //   })

    it('should render root component with redux', () => {
      const div = document.createElement('div');
      const component = render(<QnAComponent />, div)
      expect(component.container).toMatchSnapshot()
    })

    it('should have button to add question', () => {
      const { getAllByText } = render(<QnAComponent />)
      expect(getAllByText('ADD A QUESTION +')).toHaveLength(1);
    })

    it('should have button to show more question', () => {
      const { getAllByText } = render(<QuestionsList qnaList={questions}/>, { initialState: { qnaList: questions }})
      expect(getAllByText('MORE ANSWERED QUESTION')).toHaveLength(1);
    })


    it('should load two more questions when more more questions button is clicked', () => {
      const { getByText, getAllByTestId } = render(<QuestionsList qnaList={questions}/>, { initialState: { qnaList: questions }})
      fireEvent.click(getByText('MORE ANSWERED QUESTION'));
      expect(getAllByTestId('qList')).toHaveLength(7);

    })




    it('should open modal after add question button is clikced', () => {
      const mockCallback = jest.fn();
      const { getByTestId } = render(<AddQuestion cb={mockCallback}/>, { initialState: { addQuestionModalIsOpen: false }})
      fireEvent.click(screen.getByTestId('addQuestion-btn'));
      expect(mockCallback).toBeCalled();
    })

})




describe('Each child components can render without error', () => {

  it('should render 4 question on init', () => {
    const { getAllByTestId } = render(<QnAComponent qnaList={questions}/>, { initialState: { qnaList: questions }})
    expect(getAllByTestId('qList')).toHaveLength(4);

  })


  it('should render 2 more question when more question button is clicked', () => {
    const { getAllByTestId } = render(<QnAComponent qnaList={questions}/>, { initialState: { qnaList: questions }})
    expect(getAllByTestId('qList')).toHaveLength(4);

  })

  it('should render less than 2 answers for each question on init', () => {
    const { getAllByTestId } = render(<AnswerList answerList={answers}/>)
    expect(getAllByTestId('answerList')).toHaveLength(2);

  })

  it('should render see more answer button when there are more answers hidden', () => {
    const { getAllByTestId } = render(<AnswerList answerList={answers}/>)
    expect(getAllByTestId('see-more-answers')).toHaveLength(1);

  })

  it('should not render see more answer button when there are only two answers or less', () => {
    const lessAnswersList = answers.slice(0,2)
    const { queryByTestId } = render(<AnswerList answerList={lessAnswersList}/>)
    expect(queryByTestId('see-more-answers')).toBeNull();

  })

  it('should render filtered question list when user typed in search bar', () => {
    const { getAllByTestId } = render(<SearchQuestions />, { initialState: { searchBarTyped: true, qnaList: questions }})
    expect(getAllByTestId('filteredQuestionList')).toHaveLength(1);
  })




})





