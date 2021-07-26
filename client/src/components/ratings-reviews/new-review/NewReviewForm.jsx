import React from 'react';
import { Form } from 'react-bootstrap';
import Characteristics from './Characteristics.jsx';



const NewReviewForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Overall Rating:</Form.Label>
        <Form.Check
          inline
          label="1"
          name="group1"
          type="radio"
          id={`inline-radio-1`}
        />
        <Form.Check
          inline
          label="2"
          name="group1"
          type="radio"
          id={`inline-radio-2`}
        />
        <Form.Check
          inline
          label="3"
          type="radio"
          id={`inline-radio-3`}
        />
        <Form.Check
          inline
          label="4"
          type="radio"
          id={`inline-radio-4`}
        />
        <Form.Check
          inline
          label="5"
          type="radio"
          id={`inline-radio-5`}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Do You Recommend This Product?</Form.Label>
        <Form.Check
          inline
          label="Yes"
          type="radio"
        />
        <Form.Check
          inline
          label="No"
          type="radio"
        />
      </Form.Group>
      <br></br>
      <Characteristics />
    </Form>
  )
}

export default NewReviewForm;