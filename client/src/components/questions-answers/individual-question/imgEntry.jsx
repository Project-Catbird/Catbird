import React, { useState } from 'react';
import { Col, Row, Modal} from 'react-bootstrap';



const ImgEntry = ( { photo } ) => {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {

    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }

  };



    return (
      <div className="photoCol">
        <img
          className="answer-small"
          src={photo.url}
          onClick={handleShow}
          alt="no image"
        />
        {show && (
          <Modal
            centered
            show={show}
            onHide={handleClose}
            className="photo-dialog"
            onClick={handleShow}
          >
            <Modal.Body>
            <img
              className="image-dialog"
              src={photo.url}
              onClick={handleShow}
              alt="no image"
            />
            </Modal.Body>
          </Modal>
        )}
      </div>
    );
}

export default ImgEntry;