import React, { useState } from 'react';
import { Image, Carousel, Row, Col, Container } from 'react-bootstrap';

const ReviewImagesModal = (props) => {
  const [index, setIndex] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const getStartingIndex = () => {
    for (let i = 0; i < props.photos.length; i++) {
      if (props.photos[i].url === props.index) {
        return i;
      }
    }
  }
  const startingIndex = getStartingIndex();

  if (props.photos.length < 2) {
    return (
      <Image key="carousel-photo" src={props.photos[0].url} className="review-carousel-img"/>
    );
  } else {
    return (
      <Container key="expanded-img-container">
        <Carousel
          key="review-img-carousel"
          activeIndex={index ?? startingIndex}
          onSelect={handleSelect}
          interval={null}
        >
          {props.photos.map((photo, index) => {
            return (
              <Carousel.Item key={`${photo.id}-carousel-item`} >
                <Image
                  className="d-block w-100"
                  src={photo.url}
                  key={`${photo.id}-img-carousel`}
                />
              </Carousel.Item>
            )
          })}
        </Carousel>
      </Container>
    )
  }
}

export default ReviewImagesModal;