import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function ImageGallery(props) {
  const widget = 'image-gallery';
  const photos = useSelector((state) => state.style.photos);
  const [currentImg, setCurrentImg] = useState(0);

  const changeActive = () => {
    let activeImage = document.getElementsByClassName('active');
    activeImage[0].classList.remove('active');
  };

  const changeImg = (currentImg) => {
    let smallImg = document.getElementById(currentImg);
    smallImg.classList.add('active');
    let fullImg = document.getElementById('featured');
    fullImg.src = smallImg.src;
  }

  const handleImageSelect = (smallImg) => {
    setCurrentImg(Number(smallImg));
  }

  const handleArrow = (arrowId) => {
    if (arrowId === 'slideRight' && currentImg < photos.length - 1) {
      setCurrentImg(prev => prev + 1);
    } else if (arrowId === 'slideLeft' && currentImg > 1) {
      setCurrentImg(prev => prev - 1);
    }
  }

  useEffect(() => {
    changeActive();
    changeImg(currentImg);
  }, [currentImg])

  const photoComponents = photos.map((photo, index) => {
    return <img className={index === 0 ? "thumbnail active" : "thumbnail"} key={index} id={index} src={photo.thumbnail_url} onClick={(e) => {handleImageSelect(e.target.id)}}></img>
  })

  return (
    <div className="image-gallery justify-content-center">
      <img className="img-fluid" id="featured" src={photos[0].thumbnail_url}></img>
      <div id="slide-wrapper">
        <img id="slideLeft" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-left.png" onClick={e => {handleArrow(e.target.id)}}></img>
        <div id="slider">
          {photoComponents}
        </div>
        <img id="slideRight" className="arrow" src="https://raw.githubusercontent.com/divanov11/image_slider_frontend/master/images/arrow-right.png" onClick={e => {handleArrow(e.target.id)}}></img>
      </div>
    </div>
  )
}

export default ImageGallery;