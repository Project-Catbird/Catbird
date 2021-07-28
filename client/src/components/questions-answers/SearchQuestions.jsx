import React from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from 'react-redux';



const SearchQuestions = ({ qnaList }) => {

  const searchBarInput = useSelector(state => state.searchBarTyped);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();

    if (e.target.value.length !== 0) {
      dispatch({
        type:'SEARCHBAR_START_TYPING',
        searchBarTyped: true
      })
    }

    if (e.target.value.length === 0) {
      dispatch({
        type:'SEARCHBAR_START_TYPING',
        searchBarTyped: false
      })
    }
  }


  return (
    <form className="form">
      <input
        className="search-input"
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        onChange={handleSearch}
        />
      <SearchIcon />
   </form>
  )
}


export default SearchQuestions;
