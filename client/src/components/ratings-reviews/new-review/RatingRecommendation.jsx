import React from 'react';
import { Form, Button, ButtonGroup, ToggleButton, Row, Col, ButtonToolbar } from 'react-bootstrap';
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

  const starRatings = [
    {star:
    <span className="score">
      <div className="score-wrap">
        <span className="stars-active">
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </span>,
    value: 1},
    {star:
    <span className="score">
      <div className="score-wrap">
        <span className="stars-active">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </span>,
    value: 2},
    {star:
    <span className="score">
      <div className="score-wrap">
        <span className="stars-active">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </span>,
    value: 3},
    {star:
    <span className="score">
      <div className="score-wrap">
        <span className="stars-active">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </span>,
    value: 4},
    {star:
    <span className="score">
      <div className="score-wrap">
        <span className="stars-active">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </span>
      </div>
    </span>,
    value: 5}
  ]

  return (
    <React.Fragment>
      <Form.Group>
          <Form.Label><b>Overall Rating: </b></Form.Label>
          <Row>
            <ButtonToolbar>
              <ButtonGroup>
                {starRatings.map((rating) => (
                  <Col>
                    <Button
                      key={rating.value}
                      id={`new-review-rating-${rating.value}`}
                      type="button"
                      variant="light"
                      name="rating"
                      value={rating.value}
                      onClick={handleChange}
                      validated={validator.rating ? true : false}
                    >
                    {rating.star}
                    </Button>
                  </Col>
                ))}
              </ButtonGroup>
            </ButtonToolbar>
          </Row>
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label><b>Do You Recommend This Product? </b></Form.Label>
          <Form.Check
            inline
            label="Yes"
            type="radio"
            name="recommendation"
            onChange={handleChange}
            validated={validator.recommendation ? true : false}
          />
          <Form.Check
            inline
            label="No"
            type="radio"
            name="recommendation"
            onChange={handleChange}
            validated={validator.recommendation ? true : false}
          />
      </Form.Group>
    </React.Fragment>
  )
}

export default RatingRecommendation;