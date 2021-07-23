import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import API_KEY from '../../config/config'

function StyleSelector(props) {
  const styles = useSelector((state) => state.styles.results);
  const styleComponents = styles.map((style, index) => {
    return <Col key={index}><Image key={index} src={style.photos[0].thumbnail_url} style_id={style.style_id} width="50px" height="50px" roundedCircle/></Col>
  })

  return (
    <Container>
      <Row>
        {styleComponents}
      </Row>
    </Container>
  )
}

export default StyleSelector;