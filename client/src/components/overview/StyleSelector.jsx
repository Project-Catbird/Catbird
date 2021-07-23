import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getStyles } from '../../redux/actions/productAction'
import axios from 'axios';
import API_KEY from '../../config/config'

function StyleSelector(props) {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles.results);
  const dispatch = useDispatch();

  const fetchStyles = () => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`, {headers: {Authorization: API_KEY}})
      .then(response => {
        dispatch(getStyles(response.data));
      })
      .catch(err => { console.log(err) })
  }

  useEffect(() => {
    fetchStyles();
  }, [])

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