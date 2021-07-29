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

      let average = Number(characteristics[type].value) * 20;
      let lower = average - 5;
      let upper = 90 - lower;
      // console.table('type', type, 'average:', average, 'lower', lower, 'upper', upper, 'total', lower + upper + 10)
      console.log(type, average)

      result.push(
        <Form.Group key={`${type}-group`}>
          <Form.Label key={`${type}-label`}><b>{type}</b></Form.Label>
          <Row key={`${type}-row-1`}>
            <Col key={`${type}-row-1-col`}>
              <ProgressBar className="product-breakdown-bar" key={`${type}-characteristics-bar`}>
                <ProgressBar variant="success" now={lower} key={`${type}1`} />
                <ProgressBar variant="warning" now={10} key={`${type}2`} />
                <ProgressBar variant="success" now={upper} key={`${type}3`} />
              </ProgressBar>
            </Col>
          </Row>
          <Row key={`${type}-row-2`}>
            <Col key={`${type}-row-1-col-1`}>
              <Form.Text key={`${type}-options-1`}>{options[1]}</Form.Text>
            </Col>
            <Col align="center" key={`${type}-row-1-col-2`}>
              <Form.Text key={`${type}-options-2`}>{options[2]}</Form.Text>
            </Col>
            <Col align="right" key={`${type}-row-1-col-3`}>
              <Form.Text key={`${type}-options-3`}>{options[3]}</Form.Text>
            </Col>
          </Row>
        </Form.Group>
      )
    }
    return result;
  }
  return (
    <Form key="product-breakdown">
      {renderBreakdown()}
    </Form>
  )
}

export default ProductBreakdown;