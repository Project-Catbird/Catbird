import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../../redux/index';
import { bindActionCreators } from 'redux';
// import IndividualQuestion from './individual-question/Index';

const QuestionsList = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const { changeSelectedProduct } = bindActionCreators(actionCreators, dispatch);
  (changeSelectedProduct);

  return (
  <div>
    This is questionsList
    {/* <button onClick={()=> {dispatch(changeSelectedProduct)}}>Get Product Result</button> */}
  </div>

  )

}

export default QuestionsList;