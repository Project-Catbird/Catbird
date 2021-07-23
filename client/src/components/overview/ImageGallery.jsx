import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ImageGallery(props) {
  const photos = useSelector((state) => state.style.photos);
  const photoComponents = photos.map(photo => {
    return <Carousel.Item><img className="d-block w-100" src={photo.thumbnail_url}/></Carousel.Item>
  })
  return (
    <Carousel>
      {photoComponents}
    </Carousel>
  )
}

export default ImageGallery;