import React, { useState, useEffect } from 'react';
import { Container, Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentImg } from '../../redux/actions/productAction';

function ImageGallery(props) {
  const widget = 'image-gallery';
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.style.photos);
  const currentImg = useSelector((state) => state.currentImg);
  const [show, setShow] = useState(false);

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
    dispatch(setCurrentImg(Number(smallImg)));
  }

  const handleArrow = (arrowId) => {
    if (arrowId === 'slideRight' && currentImg < photos.length - 1) {
      dispatch(setCurrentImg(currentImg + 1));
    } else if (arrowId === 'slideLeft' && currentImg >= 1) {
      dispatch(setCurrentImg(currentImg - 1));
    }
  }

  useEffect(() => {
    changeActive();
    changeImg(currentImg);
  })

  const photoComponents = photos.map((photo, index) => {
    return <img className={index === 0 ? "thumbnail active" : "thumbnail"} key={index} id={index} src={photo.thumbnail_url} onClick={(e) => {handleImageSelect(e.target.id)}}></img>
  })

  return (
    <div className="image-gallery">
      <img className="img-fluid" id="featured" src={photos[0].thumbnail_url} onClick={() => setShow(!show)}></img>
      <div id="slide-wrapper">
        <img id="slideLeft" className="slider-arrow" src="./arrow-left.png" onClick={e => {handleArrow(e.target.id)}}></img>
        <div id="slider">
          {photoComponents}
        </div>
        <img id="slideRight" className="slider-arrow" src="./arrow-right.png" onClick={e => {handleArrow(e.target.id)}}></img>
      </div>
      <Modal show={show} onHide={() => setShow(!show)}>
        <Modal.Header closeButton>Image Preview</Modal.Header>
        <Modal.Body><img className="img-modal img-fluid" src={photos[currentImg].thumbnail_url} style={{width: "125%"}}></img></Modal.Body>
      </Modal>
    </div>
  )
}

export default ImageGallery;