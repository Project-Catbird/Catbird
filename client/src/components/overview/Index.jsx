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
import { setProduct, getStyles } from '../../redux/actions/productAction';
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


  useEffect(() => {
    fetchItem(setProduct, `${API_URL}/products/${productId}`);
    fetchItem(getStyles, `${API_URL}/products/${productId}/styles`);
  }, [productId]);

  return (
    <Container className="product-overview">
      <Row>
        <Col>
          <ImageGallery/>
        </Col>
        <Col>
          <ProductInfo/>
          <Share/>
          <AddToCart/>
          <StyleSelector/>
        </Col>
      </Row>
      <Row>
        <Description/>
      </Row>
    </Container>
  )
}
export default Overview;