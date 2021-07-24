import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Share = () => {
  return (
    <Container>
      <Row>
        <Col>
        <i className="fa fa-facebook" aria-hidden="true"></i>
        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
        </Col>
      </Row>
    </Container>
  )
}

export default Share;