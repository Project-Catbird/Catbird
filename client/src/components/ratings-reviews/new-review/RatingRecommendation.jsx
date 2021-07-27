import React from 'react';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


const RatingRecommendation = () => {
  const validator = useSelector(state => state.newReviewValidation);
  const dispatch = useDispatch();

  let handleChange = (event) => {
    let tempState = validator;
    tempState[event.target.getAttribute('name')] = true;
    dispatch({
      type: 'VALIDATE_REVIEW',
      reviewValidator: tempState
    })
  }
  return (
    <React.Fragment>
      <Form.Group>
          <Form.Label>Overall Rating: </Form.Label>
          <Form.Check
            validated={validator.rating ? true : false}
            inline
            label="1"
            name="rating"
            type="radio"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="2"
            name="rating"
            type="radio"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="3"
            type="radio"
            name="rating"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="4"
            type="radio"
            name="rating"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="5"
            type="radio"
            name="rating"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Do You Recommend This Product? </Form.Label>
          <Form.Check
            inline
            label="Yes"
            type="radio"
            name="recommendation"
            onChange={handleChange}
          />
          <Form.Check
            inline
            label="No"
            type="radio"
            name="recommendation"
            onChange={handleChange}
          />
      </Form.Group>
    </React.Fragment>
  )
}

export default RatingRecommendation;