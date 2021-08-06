import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from 'react-redux';
import IndividualQuestion from './individual-question/Index.jsx';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import QuestionsList from'./QuestionsList.jsx';

const SearchQuestions = () => {

  const qnaList = useSelector(state => state.qnaList);
  const searchBarTyped = useSelector(state => state.searchBarTyped);
  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState([]);
  const [ wordEntered, setWordEntered ] = useState('');

  const handleSearch = (e) => {

    e.preventDefault();
    const searchWord = e.target.value;
    setWordEntered(searchWord);

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

  const newFilter = qnaList.filter((value) => {
    return value.question_body.toLowerCase().includes(searchWord.toLowerCase());
  });



  if (searchWord === "") {
    setFilteredData([]);
  } else {
    setFilteredData(newFilter);
  }
}


  return (
    <div>
      <div>
        <form className="form">
          <input
            role="search-input"
            value={wordEntered}
            className="search-input"
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
            onChange={handleSearch}
            />
          <SearchIcon className="searchIcon"/>
         </form>
      </div>



      <div className="filteredQuestionList">
      { searchBarTyped ?
            <div
              data-testid="filteredQuestionList"
              className="filteredQuestionList"
            >
               <br />
              <QuestionsList qnaList={filteredData}/>

            </div> : null
      }
      </div>
    </div>
  )
}


export default SearchQuestions;
