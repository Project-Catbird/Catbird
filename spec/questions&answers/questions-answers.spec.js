
import React from 'react';
import { render, screen, fireEvent, cleanup } from './test-utils';
import userEvent from '@testing-library/user-event';
import { questions, answers } from '../../sampleData/questions-answers.js';
import QnAComponent from '../../client/src/components/questions-answers/Index.jsx';
import QuestionsList from '../../client/src/components/questions-answers/QuestionsList.jsx';
import AnswerList from '../../client/src/components/questions-answers/individual-question/AnswerList.jsx';
import AddQuestion from '../../client/src/components/questions-answers/add-question-model/Index.jsx';
import SearchQuestions from '../../client/src/components/questions-answers/SearchQuestions.jsx';
import AddAnswerForm from '../../client/src/components/questions-answers/add-answer-model/AddAnswerForm.jsx';
import AddAnswer from '../../client/src/components/questions-answers/add-answer-model/Index.jsx';
import Answer from '../../client/src/components/questions-answers/individual-question/Answer.jsx';
import AnswerHelpfulness from '../../client/src/components/questions-answers/individual-question/AnswerHelpfulness.jsx';
import ImgEntry from '../../client/src/components/questions-answers/individual-question/imgEntry.jsx';
import QuestionHelpfulness from '../../client/src/components/questions-answers/individual-question/QuestionHelpfulness.jsx';


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

    it('should render add answer form without error', () => {
      const div = document.createElement('div');
      const component = render(<AddAnswerForm />, div)
      expect(component.container).toMatchSnapshot()
    })


    it('should render answer component without error', () => {
      const div = document.createElement('div');
      const component = render(<Answer answer={answers[0]} />, div)
      expect(component.container).toMatchSnapshot()
    })

    it('should render answer helpfulness component without error', () => {
      const div = document.createElement('div');
      const component = render(<AnswerHelpfulness />, div)
      expect(component.container).toMatchSnapshot()
    })

    it('should render question helpfulness component without error', () => {
      const div = document.createElement('div');
      const component = render(<QuestionHelpfulness />, div)
      expect(component.container).toMatchSnapshot()
    })

    it('should render image Entry component without error', () => {
      const div = document.createElement('div');
      const component = render(<ImgEntry photo={answers[0]['photos'][0]}/>, div)
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
      const { getAllByTestId, getByText } = render(<QnAComponent qnaList={questions}/>, { initialState: { qnaList: questions }})
       fireEvent.click(getByText('MORE ANSWERED QUESTION'));
      expect(getAllByTestId('qList')).toHaveLength(6);
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
    expect(getAllByTestId('questionHeader')).toHaveLength(4);
    cleanup();

  })


  it('should render 2 more question when more question button is clicked', () => {
    const { getAllByTestId } = render(<QnAComponent qnaList={questions}/>, { initialState: { qnaList: questions }})
    expect(getAllByTestId('qList')).toHaveLength(4);

  })

  it('should render less than 2 answers for each question on init', () => {
    const { getAllByTestId } = render(<AnswerList answerList={answers}/>)
    expect(getAllByTestId('answerList')).toHaveLength(2);

  })

  it('should render all answers when see more answers button is clicked', () => {
    const lengthOfAllAnswers = answers.length;
    const { getAllByTestId } = render(<AnswerList answerList={answers}/>)
    fireEvent.click(screen.getByTestId('see-more-answers'));
    expect(getAllByTestId('answerList')).toHaveLength(lengthOfAllAnswers);

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




  it('should render filtered questions base on input', () => {
    const setup = () => {
      const utils = render(<SearchQuestions />, { initialState: { searchBarTyped: false, qnaList: questions }})
      const input = utils.getByRole('search-input')
      return {
        input,
        ...utils,
      }
    }

    const { input, filteredList } = setup()
    fireEvent.change(input, { target: { value: 'fab' } })
    expect(input.value).toBe('fab')
    expect(screen.getAllByTestId('filteredQuestionList')).toHaveLength(1);

  })

  it('testing add answer form', ()=> {
    const cb = jest.fn();
    const { getByTestId } = render(<AddAnswerForm cb={cb}/>);
    fireEvent.click(getByTestId('addAnswerSubmitButton'));
    expect(cb).toBeCalled();

   })


  it('should allow user to input', () => {
    const setup = () => {
      const utils = render(<AddAnswerForm />);
      const inputName = utils.getByTestId('name');
      const inputAnswerBody = utils.getByTestId('answerBody');
      const inputEmail = utils.getByTestId('email');
      return {
        inputName,
        inputAnswerBody,
        inputEmail,
        ...utils,
      }
    }

    const { inputName, inputAnswerBody, inputEmail } = setup()
    fireEvent.change(inputName, { target: { value: 'myname' } })
    expect(inputName.value).toBe('myname');

    fireEvent.change(inputAnswerBody, { target: { value: 'good product!' } })
    expect(inputAnswerBody.value).toBe('good product!');

    fireEvent.change(inputEmail, { target: { value: '123@gmail.com' } })
    expect(inputEmail.value).toBe('123@gmail.com');


  })

  it('should render add answer modal', () => {
    const div = document.createElement('div');
    const component = render(<AddAnswer />, div)
    expect(component.container).toMatchSnapshot()
  })



})



