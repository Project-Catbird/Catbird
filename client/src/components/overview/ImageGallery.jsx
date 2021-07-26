import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ImageGallery(props) {
  const widget = 'image-gallery';
  const photos = useSelector((state) => state.style.photos);
  const photoComponents = photos.map((photo, index) => {
    return <Carousel.Item><img className="thumbnail d-flex justify-content-center" src={photo.thumbnail_url} id={`photo-${index}`} onClick={e => {props.handleInteractions(e.target.id, widget)}}/></Carousel.Item>
  })
  return (
    <Carousel interval={null}>
      {photoComponents}
    </Carousel>
  )
}

export default ImageGallery;