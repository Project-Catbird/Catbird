import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';

const ImagePreview = () => {
  const photos = useSelector(state => state.photoUpload);
  if (photos !== null) {
    return (
      <Row>
        {photos.map(photoUrl => {
          return (
            <Col key={photoUrl.slice(50)}>
              <Image className="review-thumbnail" src={photoUrl} thumbnail />
            </Col>
          )
      })}
      </Row>
    )
  } else {
    return ''
  }
}

export default ImagePreview;