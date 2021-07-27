import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import Characteristics from './Characteristics.jsx';
import RatingRecommendation from './RatingRecommendation.jsx';
import PhotoUpload from './PhotoUpload.jsx';



const NewReviewForm = () => {
  const validator = useSelector(state => state.newReviewValidation)
  console.log('validator', validator)

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
    // let form = event.currentTarget;
    // console.log(form.checkValidity())
    if (validated === false) {
      event.preventDefault();
      alert('Whoops! Looks like you still need to fill out some areas of your review! Make sure all fields are entered.')
      event.stopPropagation();
    } else {
      console.log('valid')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <RatingRecommendation />
      <br></br>
      <Characteristics />
      <br></br>
      <Form.Group>
        <Form.Label>Review Summary </Form.Label>
        <Form.Control
          placeholder="Leave a short summary of your review. No more than 60 characters"
          controlId="new-review-summary"
        />
        <br></br>
      </Form.Group>
      <Form.Group>
        <Form.Label>Review Body </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Leave your review here"
          controlId="new-review-body"
          rows={5}
          required
        />
      </Form.Group>
      <PhotoUpload />
      <Button type="submit">Submit form</Button>
    </Form>
  )
}

export default NewReviewForm;