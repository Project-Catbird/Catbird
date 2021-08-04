import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import NewReviewForm from './NewReviewForm.jsx';


const NewReview = (props) => {
  const dispatch = useDispatch();
  const showNewReviewModal = useSelector(state => state.showNewReviewModal);

  let handleClose = () => {
    dispatch({
      type: 'UPDATE_NEW_REVIEW_MODAL',
      showNewReviewModal: false
    })
  }

  return (
    <Modal show={showNewReviewModal} onHide={handleClose} className="new-review main-ratings" size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h2>Write Your Review</h2>
          <h5>About the "PRODUCT"</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewReviewForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}


export default NewReview;