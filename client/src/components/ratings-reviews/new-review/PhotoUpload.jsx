import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import ImagePreview from './ImagePreview.jsx';
import firebase from "firebase/app";
import 'firebase/storage';

const PhotoUpload = () => {
  const photos = useSelector(state => state.photoUpload);
  const dispatch = useDispatch();

  var firebaseConfig = {
    apiKey: "AIzaSyD6911CKFpZxZHkab-YD6rukWdF7uRILVo",
    authDomain: "catbird-96a4e.firebaseapp.com",
    projectId: "catbird-96a4e",
    storageBucket: "gs://catbird-96a4e.appspot.com",
    // storageBucket: "catbird-96a4e.appspot.com",
    messagingSenderId: "297986076005",
    appId: "1:297986076005:web:fde382ac5818fd209c858c"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    console.log('init')
    firebase.initializeApp(firebaseConfig);
  }else {
    firebase.app(); // if already initialized, use that one
  }
  var storageRef = firebase.storage().ref();


  let uploadPhoto = async (event) => {
    event.preventDefault();
    let fileList = event.target.files;
    if (photos === null || photos.length + fileList.length <= 5) {
      let tempState = photos ?? [];
      const preview = document.getElementById('review-preview');

      console.log(fileList)
      for (let i = 0; i < fileList.length; i++) {
        let newRef = storageRef.child(fileList[i].name);
        let snapshot = await newRef.put(fileList[i]);
        let url = await newRef.getDownloadURL();
        tempState.push(url);
        let image = new Image();
        image.className = "review-thumbnail"
        image.src = url;
        preview.appendChild(image);
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
        <div id="review-preview">
          {/* <ImagePreview /> */}
        </div>
      </Form.Group>
      <br></br>
      <Form.Label><b>Upload Your Photos</b></Form.Label>
      <Form.Group>
        <Form.Control type="file" onChange={uploadPhoto} id="review-photo-upload" className="photo-upload" multiple />
      </Form.Group>
      <br></br>
    </React.Fragment>
  )
}



export default PhotoUpload;
