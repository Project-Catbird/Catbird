import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { API_KEY, API_URL } from '../../../config/config.js';
import { storage } from '../firebase/index';

const AddAnswerForm = ({ question_body, question_id, closeAddAnswerModal }) => {


  const addAnswerModalIsOpen = useSelector(state => state.addAnswerModalIsOpen);

  const product_name = useSelector(state => state.product_name)
  const dispatch = useDispatch();
  const [ body, setBody ] = useState('');
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  // const [ photos, setPhotos ] = useState([]);

  var fileObj = [];
  var fileArray = [];

  const [ file, setFile ] = useState([]);
  const [ files, setFiles ] = useState([]);
  const [ imgURL, setimgURL ] = useState('');


  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    if (fileObj[0].length === 1) {
      setFiles(pre => [
        ...pre,
        fileObj[0][0]
      ])
    }
    if (fileObj[0].length > 1) {
      for(let i = 0; i < fileObj[0].length; i++) {

         setFiles(pre => [
           ...pre,
           fileObj[0][i]
         ])
      }
    }

    for (let i = 0; i < fileObj[0].length; i++) {
        fileArray.push(URL.createObjectURL(fileObj[0][i]))
    }
    setFile(pre => [...pre, fileArray]);

}

  useEffect(() => {

    const putStorageItem = (item) => {

      return storage.ref()
        .child("images/" + item.name)
        .put(item.file)
        .then(snapshot => {
          console.log("Uploaded File:", item.name);
          return snapshot.ref.getDownloadURL().then(downloadURL => {
            console.log("File available at", downloadURL);
            setimgURL(pre => [
              ...pre,
              downloadURL
            ])

          });
        })
        .catch(error => {
          console.log("Upload failed:", imageFile.name, error.message);
        });
    }

    Promise.all(
      files.map(item => putStorageItem(item))
    )
    .then(url =>

      console.log(`All success ${url}`)
    )
    .catch((error) => {
      console.log(`Some failed: `, error.message)
    });


  }, [files]);


  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch({ type: 'TOGGLE_ADD_ANSWER'});

    // uploadFiles(e);


    axios.post(`${API_URL}/qa/questions/${question_id}/answers`, {
      body: body,
      name: name,
      email: email,
      photos: imgURL
    }, { headers: { Authorization: API_KEY } })
    .then(res => {
      closeAddAnswerModal()
      console.log('Thank you for your feedback!', res.data)
    })
    .catch(err => console.log('error from AddAnswerForm handlesubmit post request', err));
  };


  return (

  <Form onSubmit={handleSubmit}>

      <Form.Label>
        <strong>Product Name: {product_name}</strong>
        <br />
        <br />
        <strong>Question Body: {question_body}</strong>
      </Form.Label>

    <Form.Group controlId={`This is answer body${body}`}>
      <Form.Label>Your Answer: </Form.Label>
      <Form.Control
        as="textarea"
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Your Answer"
        style={{ height: '100px' }}
        />
    </Form.Group>

    <Form.Group controlId={`This is answerer name ${name}`}>
      <Form.Label>What is your nickname: </Form.Label>
      <Form.Control
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="What is your nickname?"
        />
    </Form.Group>

    <Form.Group controlId={`this is answerer email${email}`}>
      <Form.Label>Your email: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Your email"
          maxLength={60}
          value={email}
          onChange={e => setEmail(e.target.value)}
          />
    </Form.Group>
    <br/>

    <Form.Group controlId={`This is the formFile ${imgURL}`}>
      <Form.Label>Choose Photos   </Form.Label>
      <Form.Control
        type="file"
        onChange={ e => uploadMultipleFiles(e)}
        multiple="multiple"
         />
    </Form.Group>
    <br />

    <Container
      key={`this is file array + ${file}.toString()`}
      className="form-group multi-preview"
    >
                    {file.length === 1 ?
                    (file[0] || []).map(url =>  (
                         <img className="multi-preview-img" src={url} alt="..."  key={url}/>
                    )) : file.map(eachArray => (eachArray || []).map(url =>  (
                      <img className="multi-preview-img" src={url} alt="..."  key={url}/>
                 )))
                    }
    </Container>



    <Container className="modalTwoButtons">
      <Row className="flex-nowrap text-center">
        <Col>
          <Button
            variant="outline-primary"
            size="sm"
            type="submit"
            >Submit your Answer
          </Button>
        </Col>


        <Col>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={closeAddAnswerModal}
            >Close
            </Button>
        </Col>
      </Row>
    </Container>

  </Form>

  )

}

export default AddAnswerForm;