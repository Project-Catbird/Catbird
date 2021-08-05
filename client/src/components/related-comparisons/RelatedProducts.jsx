import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import { CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

const RelatedProducts = (props) => {
  //Temporary product id. Replace with current product from state.
  const productId = useSelector((state) => state.productId);
  const [relatedProducts, setRelatedProducts] = useState([]);
  useEffect(() => {
    axios.get(`${API_URL}/products/${productId}/related`, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then((response) => {
      setRelatedProducts(response.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [productId]);

  const relatedProductList = relatedProducts.map((productId) =>
    <ProductCard key={'related-' + productId} productId={productId} cardType="related"/>
  )
  return(
    <div className='container d-flex flex-column'>
      <div>
        <h2>Related Products</h2>
      </div>
      {/* <div className='d-flex flex-row flex-nowrap' style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}> */}
      {/* { relatedProducts.length > 0 && */}
        <CardGroup className='d-flex flex-nowrap related-products-container' style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}>
          {relatedProductList}
        </CardGroup>
      {/* } */}
      {/* </div> */}
    </div>
  )
}

export default RelatedProducts;