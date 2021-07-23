import React from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////
// Import modules to use in component creation, uncomment as neccessary
////////////////////////////////////////////////////////////////////////////////////////////////

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import Description from './Description.jsx';
import { Col, Row, Container } from 'react-bootstrap';

function Overview(props) {
  return (
    <Container>
      <Row>
        <Col>
          <ImageGallery/>
        </Col>
        <Col>
          <ProductInfo/>
          <AddToCart/>
          <StyleSelector/>
        </Col>
      </Row>
      <Row>
        <Description/>
      </Row>
    </Container>
  )
}
export default Overview;