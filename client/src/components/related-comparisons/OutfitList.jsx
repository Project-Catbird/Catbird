import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard.jsx';
import { CardGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_KEY, API_URL } from '../../config/config.js';

const OutfitList = (props) => {
  //Temporary product id. Replace with current product from state.
  // const productId = 16056;

  // const [relatedProducts, setRelatedProducts] = useState([]);
  const productId = useSelector((state) => state.productId);
  const outfits = useSelector((state) => state.outfitList);

  useEffect(() => {
    // axios.get(`${API_URL}/products/${productId}/related`, {
    //   headers: {
    //     Authorization: API_KEY
    //   }
    // })
    // .then((response) => {
    //   setRelatedProducts(response.data);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  }, [outfits, productId]);

  const outfitList = outfits.map((outfit) =>
    <div>
      <ProductCard key={'outfit-' + outfit} productId={outfit} cardType="outfit"/>
    </div>
  )
  return(
    <div className='container d-flex flex-column'>
      <div>
        <h2>Outfit List</h2>
      </div>

      <CardGroup className='d-flex flex-nowrap outfit-list-container' style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}>
        <ProductCard key={'curProduct-' + productId} productId={productId} cardType="curProduct"/>
        {outfitList}
      </CardGroup>
    </div>
  )
}

export default OutfitList;