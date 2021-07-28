import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import { CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

const OutfitList = (props) => {
  //Temporary product id. Replace with current product from state.
  const productId = 16056;

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
  }, []);

  const relatedProductList = relatedProducts.map((productId) =>
    <ProductCard key={productId} productId={productId} cardType="outfit"/>
  )
  return(
    <div className='container d-flex flex-column flex-nowrap'>
      <div>
        <h2>Outfit List</h2>
      </div>
      { relatedProducts.length > 0 &&
        <CardGroup>
          {relatedProductList}
        </CardGroup>
      }
    </div>
  )
}

export default OutfitList;