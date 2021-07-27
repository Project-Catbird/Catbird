import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';

const ImagePreview = () => {
  const photos = useSelector(state => state.photoUpload);
  console.log(photos)
  if (photos !== null) {
    return (
      <Row>
        {photos.map(photoUrl => {
          console.log(photoUrl)
          return (
            <Col>
              <Image src={photoUrl} thumbnail />
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