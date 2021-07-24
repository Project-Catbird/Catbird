import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

const SearchQuestions = () => {
  return (
    <div>
    <Form>
        <Form.Control
        type='text'
        id='search-bar'
        placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
        />
        <Button variant="outline-primary">Search</Button>
    </Form>
    </div>
  )
}


export default SearchQuestions;