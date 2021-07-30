import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { API_URL, API_KEY } from '../../config/config.js';
import axios from 'axios';

const Comparison = (props) => {

  const curProduct = useSelector((state) => state.productInfo);
  const curReviewsMeta = useSelector((state) => state.reviewsMeta);
  const comparedProductId = props.comparedProductId;
  const comparedProductName = props.comparedProductName;
  const [comparedReviewsMeta, setComparedReviewsMeta] = useState({});

  useEffect(() => {
    axios.get(`${API_URL}/reviews/meta`, {
      headers: {
        Authorization: API_KEY
      },
      params: {
        product_id: comparedProductId
      }
    })
    .then((response) => {
      setComparedReviewsMeta(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);

  const characteristics = {};
  for (var char in curReviewsMeta.characteristics) {
    if (!characteristics[char]) {
      characteristics[char] = {};
    }
    characteristics[char].current = curReviewsMeta.characteristics[char].value;
  }
  for (var char in comparedReviewsMeta.characteristics) {
    if (!characteristics[char]) {
      characteristics[char] = {};
    }
    characteristics[char].compared = comparedReviewsMeta.characteristics[char].value;
  }

  console.log(characteristics);
  const charList = Object.keys(characteristics).map((key) =>
    <tr>
      {characteristics[key].current === true &&
        <td><i class="fas fa-check"></i></td>
      }
      {characteristics[key].current === false || characteristics[key].current === undefined &&
        <td></td>
      }
      {typeof(characteristics[key].current) !== 'boolean' && characteristics[key].current &&
        <td>{parseFloat(characteristics[key].current).toFixed(2) || characteristics[key].current}</td>
      }
      <td>{key}</td>
      {characteristics[key].compared === true &&
        <td><i class="fas fa-check"></i></td>
      }
      {characteristics[key].compared === false || characteristics[key].compared === undefined &&
        <td></td>
      }
      {typeof(characteristics[key].compared) !== 'boolean' && characteristics[key].compared  &&
        <td>{parseFloat(characteristics[key].compared).toFixed(2) || characteristics[key].compared}</td>
      }
    </tr>
  )

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <h4 className="text-center">Comparison</h4>

        <table className="table table-borderless table-sm text-center" style={{tableLayout: "fixed"}}>
          <thead>
            <tr>
              <th scope="col">{curProduct.name}</th>
              <th scope="col"></th>
              <th scope="col">{comparedProductName}</th>
            </tr>
          </thead>
          <tbody style={{overflowY: "scroll"}}>
            {charList}
          </tbody>
        </table>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default Comparison;