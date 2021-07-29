import React, { useState } from 'react';
import { Container, Row, Col, Alert, Image, Modal, Button } from 'react-bootstrap';
import ReviewImagesModal from './ReviewImagesModal.jsx';

const IndividualReviewTile = (props) => {
  const [show, setShow] = useState(false);
  const [imgClicked, setImgClicked] = useState(null)


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let renderPhotos = () => {
    let result = [];
    for (let photo of props.review.photos) {
      result.push(
        <Col key={`${photo.id}`}>
          <Image
            key={`${photo.id}-image`}
            src={photo.url}
            thumbnail
            fluid
            style={{
              width: "175px",
              height: "175px"
            }}
            onClick={() => {
              handleShow();
              setImgClicked(photo.url)
            }}
          />
        </Col>
      )
    }
    return result;
  }


  return (
    <Container key="review-tile">
      <div className="individual-review-tile" key="tile-div">
      <Row key="review-tile-rating">
        <Col align="left" key="rating-col">
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
        <Col align="right" key="rating-name">
          <span className="text-muted">{props.review.reviewer_name}, {new Date(props.review.date).toString().split(' ').slice(0, 4).join(' ')}</span>
        </Col>
      </Row>
      <Row align="left" key="review-tile-summary">
        <span className="summary"><b>{props.review.summary}</b></span>
      </Row>
      <Row align="left" key="review-tile-body">
        <span className="body">{props.review.body} </span>
      </Row>
      <Row align="left" key="review-tile-reccomend">
        {props.review.recommend ? <span className="recommend"><i className="fas fa-check"></i> I recommend this product </span> : ''}
      </Row>
      {props.review.photos.length ?
      <Row key="review-tile-photos" align="left">
        {renderPhotos()}
        <Modal show={show} onHide={handleClose} key="photos-modal" size="lg">
          <Modal.Body key="photos-modal-body">
            <ReviewImagesModal photos={props.review.photos} index={imgClicked} />
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          </Modal.Footer>
        </Modal>
      </Row> : ''}
      {props.review.response ?
      <Row align="left" key="review-tile-response">
        <Col key="response-col">
          <Alert variant="secondary" key="response-alert">
            <span>
              <b>Response:</b>
            </span>
            <hr></hr>
            <span>
              {props.review.response}
            </span>
          </Alert>
        </Col>
      </Row> : ''}
      <Row key="review-tile-helpful">
        <Col align="left" key="helpful-col">
          <span className="helpfulness">Was this review helpful? <u>Yes</u> ({props.review.helpfulness})    |    <u>Report</u></span>
        </Col>
      </Row>
      </div>
    </Container>
  )
};

export default IndividualReviewTile;