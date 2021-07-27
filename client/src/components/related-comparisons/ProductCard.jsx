import React, { useState, useEffect } from 'react';
import { Card, ToggleButton } from 'react-bootstrap';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config/config.js'
import { getDefaultStyle, getAverageRating, renderStarRating } from '../../helpers/ratingHelpers.jsx'

// TODO: Add click handler to change current product view when clicking on card.

const ProductCard = (props) => {
  const [productDetail, setProductDetail] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState({});
  const [productReviewMeta, setProductReviewMeta] = useState({})

  useEffect(() => {
    axios.get(`${API_URL}/products/${props.productId}`, {
      headers: {
        Authorization: API_KEY
      }
    })
    .then((response) => {
      setProductDetail(response.data);
      return axios.get(`${API_URL}/products/${props.productId}/styles`, {
        headers: {
          Authorization: API_KEY
        }
      });
    })
    .then((response) => {
      setProductStyles(response.data);
      setDefaultStyle(getDefaultStyle(response.data.results));
      return axios.get(`${API_URL}/reviews/meta`, {
        headers: {
          Authorization: API_KEY
        },
        params: {
          product_id: props.productId
        }
      })
    })
    .then((response) => {
      console.log(response.data);
      setProductReviewMeta(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  const favoriteButton = (
    <i className="fas fa-star m-3" style={{
      fontSize: "1.5em",
      position: "absolute",
      top: 0,
      right: 0,
      color:"#ddd",
      webkitTextStroke:"2px #666"}}>
    </i>
  );

  const removeButton = (
    <i className="far fa-times-circle m-3" style={{
      fontSize: "1.5em",
      position: "absolute",
      top: 0,
      right: 0,
      color:"#000",}}>
    </i>
  );

  let price = 0;
  let salePrice = 0;
  if (defaultStyle["default?"]) {
    price = defaultStyle.original_price;
    salePrice = defaultStyle.sale_price;
  } else {
    price = productDetail.default_price;
    salePrice = null;
  }

  const productPrice = (
    <div>
      {salePrice !== null &&
        <span>
          <p className="text-danger">${salePrice}</p>
          <p className="text-muted"><s>${price}</s></p>
        </span>
      }
      {salePrice === null &&
        <p className="text-muted">${price}</p>
      }
    </div>
  );
  const starRating = (
    <div>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
      <i class="far fa-star"></i>
    </div>
  )

  return (
    <div className='mx-2'>
      {defaultStyle.photos &&
        <Card style={{width: "18rem"}}>
          {props.cardType === "related" && favoriteButton}
          {props.cardType === "outfit" && removeButton}
          <Card.Img variant="top" src={defaultStyle.photos[0].thumbnail_url} style={{height: "20rem", objectFit: 'cover'}}/>
          <Card.Body>
            <Card.Subtitle className="text-muted">{productDetail.category}</Card.Subtitle>
            <Card.Title>{productDetail.name}</Card.Title>
            <Card.Text>
              {productPrice}
              {/* {productDetail.description} */}
            </Card.Text>
            <Card.Text>
              {starRating}
            </Card.Text>
          </Card.Body>
          {/* <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer> */}
        </Card>
      }
    </div>
  )
}

export default ProductCard;