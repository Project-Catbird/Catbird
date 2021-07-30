import React, { useEffect } from 'react';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config'
import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';
import Description from './Description.jsx';
import Share from './Share.jsx';
import { Col, Row, Container } from 'react-bootstrap';
import { setProduct, getStyles, setStyle, setCurrentImg } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

function Overview(props) {
  const productId = useSelector((state) => state.productId);
  const styles = useSelector((state) => state.styles.results);
  const dispatch = useDispatch();

  const fetchItem = (getAction, link) => {
    axios.get(link, {headers: {Authorization: API_KEY}})
    .then(response => {
      dispatch(getAction(response.data));
    })
    .catch(err => { console.log(err) })
  }

  const handleInteractions = (element, widget) => {
    axios.post(`${API_URL}/interactions`, {time: new Date(), element, widget}, {headers: {Authorization: API_KEY}})
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    fetchItem(setProduct, `${API_URL}/products/${productId}`);
    fetchItem(getStyles, `${API_URL}/products/${productId}/styles`);
  }, [productId]);

  useEffect(() => {
    dispatch(setCurrentImg(0));
    dispatch(setStyle(styles[0]));
  })

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