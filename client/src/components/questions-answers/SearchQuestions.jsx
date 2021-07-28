import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from 'react-redux';



const SearchQuestions = () => {

  const answerList = useSelector(state => state.answerList);
  const dispatch = useDispatch();
  const searchBarInput = useSelector(state => state.searchBarInput);


  return (
    <form className="form">
      <input className="search-input" placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'/>
      <SearchIcon />
   </form>
  )
}


export default SearchQuestions;
