import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AddQuestionForm from './AddQuestionForm.jsx';


const AddQuestion = () => {

  const dispatch = useDispatch();
  const addQuestionModalIsOpen = useSelector(state =>state.addQuestionModalIsOpen);
  const { getProductName } = bindActionCreators(actionCreators, dispatch);
  const product_id = useSelector(state => state.productId);
  const product_name= useSelector(state => state.product_name);

  const openAddQuestionModal = () => {
    dispatch({ type: 'TOGGLE_ADD_QUESTION'});
    getProductName(product_id);
  };


  const closeAddQuestionModal = () => {
    dispatch({ type: 'TOGGLE_ADD_QUESTION'});
  };

  return (
    <div>
      <div>
        <Button
        data-testid="addQuestion-btn"
        variant="outline-primary" size="sm" onClick={openAddQuestionModal}>ADD A QUESTION + </Button>
      </div>
      <Modal centered animation show={addQuestionModalIsOpen} onHide={closeAddQuestionModal}
      data-test="addQuestionModal"
      className="main-qna">
        <Modal.Header closeButton className="modalCloseButton">
          <Modal.Title>
            Ask Your Question
            <div>About the {product_name} </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddQuestionForm
            product_id={product_id}
            product_name={product_name}
            closeAddQuestionModal={closeAddQuestionModal}
            />
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
)
}

export default AddQuestion;

