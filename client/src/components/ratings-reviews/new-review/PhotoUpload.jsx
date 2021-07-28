import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Image } from 'react-bootstrap';
import ImagePreview from './ImagePreview.jsx';

const PhotoUpload = () => {
  const photos = useSelector(state => state.photoUpload);
  const dispatch = useDispatch();

  let uploadPhoto = (event) => {
    event.preventDefault();
    if (photos === null || photos.length <= 5) {
      let tempState = photos ?? [];
      let fileList = event.target.files;
      for (let i = 0; i < fileList.length; i++) {
        tempState.push(URL.createObjectURL(fileList[i]))
      }
      dispatch({
        type: 'UPLOAD_PHOTO',
        photo: tempState
      })
    }
  }


  return (
    <React.Fragment>
      <Form.Group>
        <ImagePreview />
      </Form.Group>
      <br></br>
      <Form.Label><b>Upload Your Photos</b></Form.Label>
      <Form.Group>
        <Form.Control type="file" onChange={uploadPhoto} multiple />
      </Form.Group>
      <br></br>
    </React.Fragment>
  )
}



export default PhotoUpload;
