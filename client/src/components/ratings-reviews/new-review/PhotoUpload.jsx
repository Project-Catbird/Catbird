import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Image } from 'react-bootstrap';
import ImagePreview from './ImagePreview.jsx';

const PhotoUpload = () => {
  const photos = useSelector(state => state.photoUpload);
  const dispatch = useDispatch();
  console.log(photos)

  let uploadPhoto = (event) => {
    event.preventDefault();
    if (photos === null || photos.length <= 5) {
      let tempState = photos ?? [];
      let url = URL.createObjectURL(event.target.files[0]);
      tempState.push(url);
      dispatch({
        type: 'UPLOAD_PHOTO',
        photo: tempState
      })
      console.log(imgPreview)
      imgPreview.push(<Image src={url} thumbnail />)
    }
  }

  let imgPreview = [];

  // let imgPreview = () => {
  //   let thumbnails = [];
  //   for (let photo of photos) {
  //     thumbnails.push(<img src={photo} style={{maxWidth: '20%'}} />)
  //   }
  //   console.log(thumbnails)
  //   return thumbnails;
  // }

  return (
    <React.Fragment>
        <Form.Group>
          <ImagePreview />
        </Form.Group>

        <Form.Group>
          <Form.Control type="file" onChange={uploadPhoto} />
        </Form.Group>
        {/* <Button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Upload</Button> */}
    </React.Fragment>
  )
}



export default PhotoUpload;
// export default class PhotoUpload extends React.Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           file: null
//       }
//       this.uploadSingleFile = this.uploadSingleFile.bind(this)
//       this.upload = this.upload.bind(this)
//   }

//   uploadSingleFile(e) {
//     this.setState({
//       file: URL.createObjectURL(e.target.files[0])
//     })
//   }

//   upload(e) {
//     e.preventDefault()
//     console.log(this.state.file)
//   }

//   render() {
//     let imgPreview;
//     if (this.state.file) {
//       imgPreview = <img src={this.state.file} alt='' style={{maxWidth: '20%'}} />;
//     }
//     return (
      // <form>
      //   <div className="form-group preview">
      //     {imgPreview}
      //   </div>

      //   <div className="form-group">
      //     <input type="file" className="form-control" onChange={this.uploadSingleFile} />
      //   </div>
      //   <button type="button" className="btn btn-primary btn-block" onClick={this.upload}>Upload</button>
      // </form >
//     )
//   }
// }
