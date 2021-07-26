import React, { useEffect } from 'react';
import axios from 'axios';
import API_KEY from '../../config/config'
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import Description from './Description.jsx';
import Share from './Share.jsx';
import { Col, Row, Container } from 'react-bootstrap';
import { setProduct, getStyles, setStyle } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';


function Overview(props) {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles.results);
  const dispatch = useDispatch();
  const fetchItem = (action, link) => {
    axios.get(link, {headers: {Authorization: API_KEY}})
    .then(response => {
      dispatch(action(response.data));
    })
    .catch(err => { console.log(err) })
  }

  const handleInteractions = (element, widget) => {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/interactions', {time: new Date(), element, widget}, {headers: {Authorization: API_KEY}})
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    fetchItem(setProduct, `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}`);
    fetchItem(getStyles, `https://app-hrsei-api.herokuapp.com/api/fec2/hr-lax/products/${productId}/styles`)
  }, [])

  dispatch(setStyle(styles[0]))

  return (
    <Container>
      <Row>
        <Col>
          <ImageGallery handleInteractions={handleInteractions}/>
        </Col>
        <Col>
          <ProductInfo handleInteractions={handleInteractions}/>
          <Share handleInteractions={handleInteractions}/>
          <AddToCart handleInteractions={handleInteractions}/>
          <StyleSelector handleInteractions={handleInteractions}/>
        </Col>
      </Row>
      <Row>
        <Description handleInteractions={handleInteractions}/>
      </Row>
    </Container>
  )
}
export default Overview;