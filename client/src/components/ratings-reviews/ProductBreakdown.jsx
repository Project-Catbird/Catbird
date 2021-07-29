import React from 'react';
import { useSelector } from 'react-redux';
import { ProgressBar, Form, Row, Col, Container, Image } from 'react-bootstrap';

const ProductBreakdown = () => {
  const characteristics = useSelector(state => state.reviewsMeta.characteristics);

  let renderBreakdown = () => {
    let result = [];
    for (let type in characteristics) {
      let options
      if (type === 'Size') {
        options = {
          1: 'A size too small',
          2: 'Perfect',
          3: 'A size too big'
        };
      } else if (type === 'Width') {
        options = {
          1: 'Too narrow',
          2: 'Perfect',
          3: 'Too wide'
        };
      } else if (type === 'Comfort') {
        options = {
          1: 'Uncomfortable',
          2: 'Ok',
          3: 'Perfect'
        };
      } else if (type === 'Quality') {
        options = {
          1: 'Poor',
          2: 'What I expected',
          3: 'Perfect'
        };
      } else if (type === 'Length') {
        options = {
          1: 'Runs short',
          2: 'Perfect',
          3: 'Runs long'
        };
      } else if (type === 'Fit') {
        options = {
          1: 'Runs tight',
          2: 'Perfect',
          3: 'Runs loose'
        };
      }
      result.push(
        <Form.Group>
          <Form.Label><b>{type}</b></Form.Label>
          <Row>
            <ProgressBar className="product-breakdown-bar">
              <ProgressBar variant="success" now={45} />
              <ProgressBar variant="warning" now={10} />
              <ProgressBar variant="success" now={45} />
            </ProgressBar>
          </Row>
          <Row>
            <Col>
              <Form.Text>{options[1]}</Form.Text>
            </Col>
            <Col align="center">
              <Form.Text>{options[2]}</Form.Text>
            </Col>
            <Col align="right">
              <Form.Text>{options[3]}</Form.Text>
            </Col>
          </Row>
        </Form.Group>
      )
    }
    return result;
  }
  return (
    <Form>
      {renderBreakdown()}
    </Form>
  )
}

export default ProductBreakdown;