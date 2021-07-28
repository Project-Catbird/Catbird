import React from 'react';
import { useSelector } from 'react-bootstrap';

const Characteristics = () => {
  const characteristics = useSelector(state => state.reviewsMeta.characteristics);

  let renderCharacteristics = () => {
    let result = [];
    for (let key in characteristics) {
      if (key === 'Size') {
        let options = {
          1: 'A size too small',
          2: '1/2 a size too small',
          3: 'Perfect',
          4: '1/2 a size too big',
          5: 'A size too big'
        };
      } else if (key === 'Width') {
        let options = {
          1: 'Too narrow',
          2: 'Slightly narrow',
          3: 'Perfect',
          4: 'Slightly wide',
          5: 'Too wide'
        };
      } else if (key === 'Comfort') {
        let options = {
          1: 'Uncomfortable',
          2: 'Slightly uncomfortable',
          3: 'Ok',
          4: 'Comfortable',
          5: 'Perfect'
        };
      } else if (key === 'Quality') {
        let options = {
          1: 'Poor',
          2: 'Below average',
          3: 'What I expected',
          4: 'Pretty great',
          5: 'Perfect'
        };
      } else if (key === 'Length') {
        let options = {
          1: 'Runs short',
          2: 'Runs slightly short',
          3: 'Perfect',
          4: 'Runs slightly long',
          5: 'Runs long'
        };
      } else if (key === 'Fit') {
        let options = {
          1: 'Runs tight',
          2: 'Runs slightly tight',
          3: 'Perfect',
          4: 'Runs slightly loose',
          5: 'Runs loose'
        };
      }
    }
  }
}

export default Characteristics;