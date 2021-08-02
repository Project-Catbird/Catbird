import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Characteristics from './Characteristics.jsx';
import RatingRecommendation from './RatingRecommendation.jsx';
import PhotoUpload from './PhotoUpload.jsx';
import { API_KEY, API_URL } from '../../../config/config.js';



const NewReviewForm = () => {
  const validator = useSelector(state => state.newReviewValidation);
  const formInfo = useSelector(state => state.reviewForm);
  const productId = useSelector(state => state.productId);
  const photos = useSelector(state => state.photoUpload);
  const dispatch = useDispatch();
  const [bodyLength, setBodyLength] = useState(0);
  const [validSummary, setValidSummary] = useState(true);

  let checkValidator = () => {
    for (let key in validator) {
      if (validator[key] === false) {
        return false
      }
    }
    return true;
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    let validated = checkValidator();
    if (validated === false) {
      event.preventDefault();
      alert('Whoops! Looks like you still need to fill out some areas of your review! Make sure all fields are entered.')
      event.stopPropagation();
    } else {
      let reviewParams = {
        product_id: productId,
        rating: formInfo.rating,
        summary: formInfo.summary,
        body: formInfo.body,
        recommend: formInfo.recommend,
        name: formInfo.name,
        email: formInfo.email,
        photos: photos ?? [],
        characteristics: formInfo.characteristics
      }
      console.log(reviewParams)
      axios.post(`${API_URL}/reviews`, reviewParams, {
        headers: {Authorization: API_KEY}
      }).then(data => console.log(data))
      .catch(err => console.log(err));
    }
  }

  let handleChange = (event) => {
    event.preventDefault();
    let tempState = formInfo;
    tempState[event.target.getAttribute('name')] = event.target.value
    dispatch({
      type: 'UPDATE_NEW_REVIEW_FORM',
      payload: tempState
    })
    let validatorState = validator;
    let characters = event.target.value.length;
    if (event.target.getAttribute('name') === 'body') {
      validatorState.body = characters >= 50 && characters < 1000 ? true : false;
      setBodyLength(characters);
    }
    if (event.target.getAttribute('name') === 'summary') {
      let validType = characters > 60 ? false : true;
      validatorState.summary = validType;
      setValidSummary(validType);
    }
    dispatch({
      type: 'VALIDATE_REVIEW',
      reviewValidator: validatorState
    })
  }


  return (
    <Form onSubmit={handleSubmit}>
      <RatingRecommendation />
      <br></br>
      <Characteristics />
      <br></br>
      <Form.Group>
        <Form.Label><b>Review Summary </b></Form.Label>
        <Form.Control
          placeholder="Example: Best purchase ever!"
          controlid="new-review-summary"
          className="new-review-summary"
          name="summary"
          onChange={handleChange}
        />
        {!validator.summary ?
        <Form.Text>Review summary must be less than 60 characters</Form.Text>
        : ''}
        <br></br>
      </Form.Group>
      <Form.Group>
        <Form.Label><b>Review Body </b></Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Why did you like the product or not?"
          controlid="new-review-body"
          className="new-review-body-input"
          name="body"
          rows={5}
          required
          onChange={handleChange}
        />
        <Form.Text>
          {!validator.body ? `Minimum required characters left: [${50 - bodyLength}]` : 'Minimum reached'}
        </Form.Text>
      </Form.Group>
      <PhotoUpload />
      <br></br>
      <Form.Group>
        <Form.Label><b>What Is Your Nickname? </b></Form.Label>
        <Form.Control
          placeholder="Example: jackson11!"
          controlid="new-review-nickname"
          name="name"
          required
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          For privacy reasons, do not use your full name or email address
        </Form.Text>
      </Form.Group>
      <br></br>
      <Form.Group>
        <Form.Label><b>Email: </b></Form.Label>
        <Form.Control
          placeholder="Example: jackson11@email.com"
          controlid="new-review-email"
          className="new-review-email"
          name="email"
          required
          type="email"
          onChange={handleChange}
        />
        <Form.Text className="text-muted">
          For authentication reasons, you will not be emailed
        </Form.Text>
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default NewReviewForm;