import React, { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from 'react-redux';
import IndividualQuestion from './individual-question/Index.jsx';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';


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





  let filteredqList = filteredData.map(question => {
    return (
     <ListGroup.Item key={question.question_id} >

       <IndividualQuestion question={question} />

     </ListGroup.Item>

     )
 })


  return (

    <Container>

      <Row>

        <form className="form">
          <input
            className="search-input"
            placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
            onChange={handleSearch}
            />
          <SearchIcon />
         </form>

      </Row>



      <Row>

      { searchBarTyped ?
            <Container className="searchedQuestions">
            <ListGroup variant="flush" className="searchedQuestions" >
              {filteredqList}
            </ListGroup>
            <br />
            </Container> : null
      }


      </Row>



    </Container>
  )
}


export default SearchQuestions;
