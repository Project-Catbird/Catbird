import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Share = (props) => {
  const productInfo = useSelector((state) => state.productInfo);
  const quote = `Check out this ${productInfo.name}!`
  return (
    <Container>
      <Row>
        <Col>
          <span className="share">Share</span>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.google.com/&t=Catbird&quote=${quote}`} target="_blank" style={{color: "grey"}}><i className="fab fa-facebook"></i></a>
          <a href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${quote}`} target="_blank" style={{color: "grey"}}><i className="fab fa-twitter"></i></a>
          <a href="https://www.pinterest.com/pin/create/button/" target="_blank" style={{color: "grey"}}><i className="fab fa-pinterest"></i></a>
        </Col>
      </Row>
    </Container>
  )
}

export default Share;