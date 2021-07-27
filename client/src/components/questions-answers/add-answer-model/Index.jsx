import React, { useEffect } from 'react';
// import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../redux/index.js';
import AddAnswerForm from './AddAnswerForm.jsx';


const AddAnswer = ( { question_id, question_body }) => {
  // console.log('this is question body from AddAnswer', question_body)

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

  const product_id = useSelector(state => state.product_id);
  const product_name = useSelector(state => state.product_name);


  //why this calling getProductName so many time even I put empty array as second arg
  // useEffect(() => {
  //    getProductName(product_id);
  // }, [])


  return (
    <div>

      <div className="addanswer">
        <span
      onClick={() => {
        openAddAnswerModal();
      }}>
        Add Answer
        </span>
      </div>



    <Modal centered show={addAnswerModalIsOpen} onHide={closeAddAnswerModal}>
      <Modal.Header closeButton>
       <Modal.Title>Add ANSWER</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <AddAnswerForm
         product_name={product_name}
         question_body={question_body}
         question_id={question_id}
         closeAddAnswerModal={closeAddAnswerModal}
         />
    </Modal.Body>
    <Modal.Footer>

    {/* <Button variant="secondary" onClick={closeAddAnswerModal}>Close</Button> */}
    </Modal.Footer>
</Modal>

    </div>
)
}

export default AddAnswer;