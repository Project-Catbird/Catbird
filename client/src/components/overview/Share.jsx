import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Share = (props) => {
  const widget = 'share';
  return (
    <Container onClick={e => {props.handleInteractions(e.target.className, widget)}}>
      <Row>
        <Col>
          <span className="share">Share</span>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </Col>
      </Row>
    </Container>
  )
}

export default Share;