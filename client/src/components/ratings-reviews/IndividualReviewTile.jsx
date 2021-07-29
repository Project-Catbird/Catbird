import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const IndividualReviewTile = (props) => {
  return (
    <Container>
      <div className="individual-review-tile" >
      <Row>
        <Col align="left">
          <span className="score">
            <div className="score-wrap">
              <span className="stars-active" style={{width: `${props.review.rating * 20}%`}}>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
              <span className="stars-inactive">
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </div>
          </span>
        </Col>
        <Col align="right">
          <span className="text-muted">{props.review.reviewer_name}, {new Date(props.review.date).toString().split(' ').slice(0, 4).join(' ')}</span>
        </Col>
      </Row>
      <Row align="left">
        <span className="summary"><b>{props.review.summary}</b></span>
      </Row>
      <Row align="left">
        <span className="body">{props.review.body} </span>
      </Row>
      <Row align="left">
        {props.review.recommend ? <span className="recommend"><i className="fas fa-check"></i> I recommend this product </span> : ''}
      </Row>
      <Row>
        <Col align="left">
          <span className="helpfulness">Was this review helpful? <u>Yes</u> ({props.review.helpfulness})    |    <u>Report</u></span>
        </Col>
      </Row>
      </div>
    </Container>
  )
};

export default IndividualReviewTile;