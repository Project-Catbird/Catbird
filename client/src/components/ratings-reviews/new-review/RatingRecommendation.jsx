import React from 'react';
import { Form, Button, ButtonGroup, ToggleButton, Row, Col } from 'react-bootstrap';
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
  // const starRatings = [
  //   {star:
  //   <span className="score">
  //     <div className="score-wrap">
  //       <span className="stars-active" style={{width: "20%"}}>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //       </span>
  //     </div>
  //   </span>,
  //   value: 1},
  //   {star:
  //   <span className="score">
  //     <div className="score-wrap">
  //       <span className="stars-active" style={{width: "40%"}}>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //       </span>
  //     </div>
  //   </span>,
  //   value: 2},
  //   {star:
  //   <span className="score">
  //     <div className="score-wrap">
  //       <span className="stars-active" style={{width: "60%"}}>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //       </span>
  //     </div>
  //   </span>,
  //   value: 3},
  //   {star:
  //   <span className="score">
  //     <div className="score-wrap">
  //       <span className="stars-active" style={{width: "80%"}}>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //       </span>
  //     </div>
  //   </span>,
  //   value: 4},
  //   {star:
  //   <span className="score">
  //     <div className="score-wrap">
  //       <span className="stars-active" style={{width: "100%"}}>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //         <i className="fa fa-star" aria-hidden="true"></i>
  //       </span>
  //     </div>
  //   </span>,
  //   value: 5}
  // ]

  return (
    <React.Fragment>
      <Form.Group>
          <Form.Label><b>Overall Rating: </b></Form.Label>
          <Row>
            <ButtonGroup>
              {starRatings.map((rating) => (
                <Col>
                  <ToggleButton
                    key={rating.value}
                    id="new-review-rating"
                    type="radio"
                    variant="outline-light"
                    name="star-ratings"
                    value={rating.value}
                  >
                  {rating.star}
                  </ToggleButton>
                </Col>
              ))}
            </ButtonGroup>
          </Row>
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
        <br></br>
        <Form.Group>
          <Form.Label><b>Do You Recommend This Product? </b></Form.Label>
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