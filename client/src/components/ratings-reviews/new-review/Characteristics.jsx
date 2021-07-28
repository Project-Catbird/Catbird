import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';


const Characteristics = () => {
  const characteristics = ['Size', 'Width', 'Comfort', 'Quality', 'Length', 'Fit'];
  const validator = useSelector(state => state.newReviewValidation);
  const dispatch = useDispatch();

  let handleChange = (event) => {
    let tempState = validator;
    tempState[event.target.getAttribute('name')] = true;
    dispatch({
      type: 'VALIDATE_REVIEW',
      reviewValidator: tempState
    })
  }

  let renderCharacteristics = () => {
    let result = [];
    for (let i = 0; i < characteristics.length; i++) {
      let type = characteristics[i];
      let options;
      if (type === 'Size') {
        options = {
          1: 'A size too small',
          2: '1/2 a size too small',
          3: 'Perfect',
          4: '1/2 a size too big',
          5: 'A size too big'
        };
      } else if (type === 'Width') {
        options = {
          1: 'Too narrow',
          2: 'Slightly narrow',
          3: 'Perfect',
          4: 'Slightly wide',
          5: 'Too wide'
        };
      } else if (type === 'Comfort') {
        options = {
          1: 'Uncomfortable',
          2: 'Slightly uncomfortable',
          3: 'Ok',
          4: 'Comfortable',
          5: 'Perfect'
        };
      } else if (type === 'Quality') {
        options = {
          1: 'Poor',
          2: 'Below average',
          3: 'What I expected',
          4: 'Pretty great',
          5: 'Perfect'
        };
      } else if (type === 'Length') {
        options = {
          1: 'Runs short',
          2: 'Runs slightly short',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long'
        };
      } else if (type === 'Fit') {
        options = {
          1: 'Runs tight',
          2: 'Runs slightly tight',
          3: 'Perfect',
          4: 'Runs slightly loose',
          5: 'Runs loose'
        };
      }
      result.push(
        <React.Fragment>
          <Form.Group>
            <Form.Label><b>{type}:</b></Form.Label>
            {Object.keys(options).map(option => (
              <Form.Check
              inline
              label={`${options[option]} `}
              type="radio"
              name={type}
              onChange={handleChange}
              validated={validator[type] ? true : false}

              />
            ))}
          </Form.Group>
          <br></br>
        </React.Fragment>
      )
    }
    return result;
  }

  return (
    <React.Fragment>
      {renderCharacteristics()}
    </React.Fragment>
  )
}

export default Characteristics;