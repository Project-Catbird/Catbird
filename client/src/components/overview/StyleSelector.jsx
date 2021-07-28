import React, { useEffect } from 'react';
import { Col, Row, Container, Image, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStyle } from '../../redux/actions/productAction';

function StyleSelector(props) {
  const widget = 'style-selector';
  const styles = useSelector((state) => state.styles.results);
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();

  const styleComponents = () => {
    var rows = [];
    for (var i = 0; i < styles.length; i += 4) {
      var row = [];
      row.push(styles.slice(i, i+4).map((style, index) => {
        return (
          <div key={style.style_id} style={{display: 'inline-block'}}>
            <input className="style-item" type="radio" name="style" defaultChecked={index === 0 && i === 0} id={style.style_id} onClick={e => {
              props.handleInteractions(e.target.className, widget);
              dispatch(setStyle(style))}}/>
            <label for={style.style_id}>
            <Image key={style.style_id} className="style-thumbnail" src={style.photos[0].thumbnail_url} style_id={style.style_id} width="50px" height="50px" roundedCircle/>
            </label>
          </div>)
     }))
     rows.push(row.map((item, index) => {return <div>{item}</div>}))
    }
    return rows;
  }

  return (
    <Container>
      <span className="style">
        <strong>STYLE > </strong>
        <span className="style-name">{style.name}</span>
      </span>
        {styleComponents()}
    </Container>
  )
}

export default StyleSelector;

