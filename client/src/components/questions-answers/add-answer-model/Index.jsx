import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AddAnswerForm from './AddAnswerForm.jsx';


  const AddAnswer = ( { question_id, question_body }) => {

    const dispatch = useDispatch();
    const addAnswerModalIsOpen = useSelector(state =>state.addAnswerModalIsOpen);
    const openAddAnswerModal = () => {
      dispatch({ type: 'TOGGLE_ADD_ANSWER'});
      getProductName(product_id);
    };

    const closeAddAnswerModal = () => {
      dispatch({ type: 'TOGGLE_ADD_ANSWER'});
    }
    const { getProductName } = bindActionCreators(actionCreators, dispatch);
    const product_id = useSelector(state => state.productId);
    const product_name = useSelector(state => state.product_name);
    const clickedId = useSelector(state => state.quedtionId);
    const clickedBody = useSelector(state => state.questionBody);



      return (
        <div>
          <div className="addanswer">
            <span
            key={'AddAnswer' + question_id + question_body}
            onClick={(e) => {
            openAddAnswerModal();

              dispatch ({
                type: 'SET_QUESTION_BODY',
                question_body: question_body
              });
              dispatch({
                type: 'SET_QUESTION_ID',
                question_id: question_id
              })

            }}>
            Add Answer
            </span>
          </div>
        <div key={'AddAnswerModalDiv' + clickedId}>
        <Modal centered
          show={addAnswerModalIsOpen}
          onHide={closeAddAnswerModal}
          key={'AddAnswerModal' + clickedId }
        >
          <Modal.Header closeButton className="modalCloseButton">
          <Modal.Title>Add ANSWER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <AddAnswerForm
            key={'AddAnswerFromInAddAnswerModal' + clickedId}
            product_name={product_name}
            question_body={clickedBody}
            question_id={clickedId}
            closeAddAnswerModal={closeAddAnswerModal}
            />
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
    )
}

export default AddAnswer;