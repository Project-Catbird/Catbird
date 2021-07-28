import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Description(props) {
  const widget = 'description-features';
  const productInfo = useSelector((state) => state.productInfo);
  const {id, description, features} = productInfo;

  const featureComponents = features.map((feature, index) => {
    return <li key={index}>{feature.feature} - {feature.value}</li>
  })

  return (
    <Container onClick={e => {props.handleInteractions(e.target.className, widget)}}>
      <Row>
        <Col>
          <span className="product-description">
            <h5>Description</h5>
            {description}
          </span>
        </Col>
        <Col>
          <span className="product-features">
            <h5>Features</h5>
            <ul>
              {featureComponents}
            </ul>
          </span>
        </Col>
      </Row>
    </Container>
  )
}

export default Description;