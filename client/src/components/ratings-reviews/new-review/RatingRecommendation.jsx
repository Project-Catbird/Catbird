import React from 'react';
import { Form, Button, ButtonGroup, ToggleButton, Row, Col, ButtonToolbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';


const RatingRecommendation = () => {
  const validator = useSelector(state => state.newReviewValidation);
  const formInfo = useSelector(state => state.reviewForm);
  const dispatch = useDispatch();

  let handleChange = (label, value) => {
    let validatorState = validator;
    validatorState[label] = true;
    dispatch({
      type: 'VALIDATE_REVIEW',
      reviewValidator: validatorState
    })
    let formState = formInfo;
    formState[label] = value;
    dispatch({
      type: 'UPDATE_NEW_REVIEW_FORM',
      payload: formState
    })
    if (label === 'rating') {
      let ratings = [1,2,3,4,5]
      for (let rating of ratings) {
        document.getElementById(`new-review-rating-${rating}`).classList.add('btn-light');
        document.getElementById(`new-review-rating-${rating}`).classList.remove('btn-outline-warning');
      }
      document.getElementById(`new-review-rating-${value}`).classList.add('btn-outline-warning');
      document.getElementById(`new-review-rating-${value}`).classList.remove('btn-light');
    }
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
    <React.Fragment key="new-rating-rec">
      <Form.Group key="new-rating">
          <Form.Label key="rating-label"><b>Overall Rating: </b></Form.Label>
          <Row key="rating-row">
            <ButtonToolbar key="toolbar">
              <ButtonGroup key="btn-grp">
                {starRatings.map((rating) => (
                  <Col key={`${rating.value}-col`}>
                    <Button
                      key={rating.value}
                      id={`new-review-rating-${rating.value}`}
                      className="new-review-rating"
                      type="button"
                      variant="light"
                      name="rating"
                      value={rating.value}
                      onClick={() => handleChange('rating', rating.value)}
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
        <Form.Group key="new-rec">
          <Form.Label key="rec-label"><b>Do You Recommend This Product? </b></Form.Label>
          <Form.Check
            inline
            label="Yes"
            type="radio"
            name="recommendation"
            onChange={() => handleChange('recommend', true)}
            key="rec-yes"
          />
          <Form.Check
            inline
            label="No"
            type="radio"
            name="recommendation"
            onChange={() => handleChange('recommend', false)}
            key="rec-no"
          />
      </Form.Group>
    </React.Fragment>
  )
}

export default RatingRecommendation;