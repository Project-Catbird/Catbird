import React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import SearchIcon from "@material-ui/icons/Search";
import { useSelector, useDispatch } from 'react-redux';



const SearchQuestions = () => {

  const answerList = useSelector(state => state.answerList);
  const dispatch = useDispatch();
  const searchBarInput = useSelector(state => state.searchBarInput);

  // const handleFilter = (e) => {
  //   const searchWord = e.target.input;
  // }



  return (

    <Form>
      <Row>
        <Col xs={10}>
        <Form.Control
        type='text'
        id='search-bar'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
        </Col>

        <Col><SearchIcon /></Col>
      </Row>
    </Form>

  )
}


export default SearchQuestions;


{/*
<div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.link} target="_blank">
                <p>{value.title} </p>
              </a>
            );
          })}
        </div>
      )}
    </div> */}