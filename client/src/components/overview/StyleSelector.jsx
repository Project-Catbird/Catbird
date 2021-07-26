import React, { useEffect } from 'react';
import { Col, Row, Container, Image, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStyle } from '../../redux/actions/productAction';

function StyleSelector(props) {
  const styles = useSelector((state) => state.styles.results);
  const dispatch = useDispatch();


  const styleComponents = styles.map((style, index) => {
    return (
      <Col key={index}>
      <input type="radio" name="style" id={index} onClick={() => {dispatch(setStyle(style))}}/>
      <label className="form-check-label" for={index}>
      <Image key={index} className="style-thumbnail" src={style.photos[0].thumbnail_url} style_id={style.style_id} width="50px" height="50px" roundedCircle/>
      </label>
      </Col>
    )
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