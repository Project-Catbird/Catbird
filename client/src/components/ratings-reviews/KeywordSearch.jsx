import React from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';

const KeywordSearch = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch({
      type: "UPDATE_REVIEW_SEARCH",
      payload: event.target.value.length >= 3 ? event.target.value : null
    })
  }

  return (
    <Form>
      <Form.Label><b>Search reviews:</b></Form.Label>
      <Form.Control
        type="text"
        onChange={handleChange}
        placeholder="Example: Suede shoes..."
      />
    </Form>
  )
}

export default KeywordSearch;