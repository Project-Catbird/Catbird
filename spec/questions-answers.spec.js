import { configure, shallow, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import store from '../client/src/redux/store.js';
import { Provider } from 'react-redux';
import QnAComponent from '../client/src/components/questions-answers/Index.jsx';
import QuestionsList from '../client/src/components/questions-answers/QuestionsList.jsx';
import SearchQuestions from '../client/src/components/questions-answers/SearchQuestions.jsx';
import AddQuestion from '../client/src/components/questions-answers/add-question-model/Index.jsx';
import IndividualQuestion from '../client/src/components/questions-answers/individual-question/Index.jsx';



  describe('qna', () => {

    configure({ adapter: new Adapter() });
    let wrapper;

    beforeEach(() => {
      wrapper = mount(
      <Provider store={store}>
        <QnAComponent />
      </Provider>)
    })

    it('render main components  without errors', () => {
      expect(wrapper.find('.twoMainButton').exists()).toBe(true);
      expect(wrapper.find(AddQuestion).exists()).toBe(true);
      expect(wrapper.find(SearchQuestions).exists()).toBe(true);


    });

    it('renders modal when add question button is clicked', () => {
      expect(wrapper.find(`[data-test="addQuestionbtn"]`)).toEqual({});
    });



  })








