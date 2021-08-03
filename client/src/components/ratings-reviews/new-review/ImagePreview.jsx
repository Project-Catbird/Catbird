import React from 'react';
import { useSelector } from 'react-redux';
import { Image, Row, Col } from 'react-bootstrap';

const ImagePreview = () => {
  const photos = useSelector(state => state.photoUpload);
  console.log('photos', photos)
  if (photos !== null) {




      var preview = document.querySelector('#review-preview');
      var files = document.querySelector('#review-photo-upload').files;

      function readAndPreview(file) {

        // Make sure `file.name` matches our extensions criteria

          var reader = new FileReader();

          reader.addEventListener("load", function () {
            let image = <Image className="review-thumbnail" src={this.result} />
            // var image = new Image();
            // image.height = 100;
            // image.title = file.name;
            // image.src = this.result;
            preview.appendChild( image );
            console.log('newphotos',photos)
          }, false);

          reader.readAsDataURL(file);


        //console.log(photos)
      }
      for (let file of photos) {
        console.log('file:', file)
        readAndPreview(file);
      }


        // [].forEach.call(files, readAndPreview);


    console.log(photos)





    return (
      <Row>
        {photos.map(photoUrl => {
          return (
            <Col key={photoUrl.slice(50)}>
              <Image className="review-thumbnail" src={photoUrl} thumbnail />
            </Col>
          )
      })}
      </Row>
    )
  } else {
    return ''
  }
}

export default ImagePreview;