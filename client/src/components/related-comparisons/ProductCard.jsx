import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { API_URL, API_KEY } from '../../config/config.js';
import { getDefaultStyle, getAverageRating, renderStarRating } from '../../helpers/ratingHelpers.jsx';
import * as productActionCreators from '../../redux/actions/productAction.js';
import { actionCreators } from '../../redux/index.js';
import Comparison from './Comparison.jsx';
// TODO: Add click handler to change current product view when clicking on card.

const ProductCard = (props) => {
  const [productDetail, setProductDetail] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [defaultStyle, setDefaultStyle] = useState({});
  const [productReviewMeta, setProductReviewMeta] = useState({});
  const [showComparison, setShowComparison] = useState(false);

  const outfits = useSelector((state) => state.outfitList);
  const dispatch = useDispatch();
  const { setProductId } = bindActionCreators(productActionCreators, dispatch);
  const { updateOutfitList } = bindActionCreators(actionCreators, dispatch);
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
      setProductReviewMeta(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, []);


  const compareButton = (
    <i className="fas fa-star m-3 compare-button" style={{
      fontSize: "1.5em",
      position: "absolute",
      top: 0,
      right: 0,
      color:"#ddd",
      WebkitTextStroke:"2px #ddd"}}
      onClick={() => setShowComparison(true)}>
    </i>
  );

  const removeOutfitButton = (
    <i className="far fa-times-circle m-3 remove-outfit-button" style={{
      fontSize: "1.5em",
      position: "absolute",
      top: 0,
      right: 0,
      color:"#000",}}
      onClick={(e) => {
        e.stopPropagation();
        removeOutfit();
      }}
      >
    </i>
  );

  const addOutfitButton = (
    <i className="fas fa-plus-circle m-3 add-outfit-button" style={{
      fontSize: "6em",
      position: "absolute",
      textAlign: "center",
      top: "30%",
      right: "27%",
      color:"#FFF",
      zIndex: 1}}
      onClick={(e) => {
        // e.stopPropagation();
        addOutfit();
      }}
      >
    </i>
  );

  const addOutfit = () => {
    if (!outfits.includes(props.productId)) {
      updateOutfitList([props.productId, ...outfits]);
    }
  }

  const removeOutfit = () => {
    outfits.splice(outfits.indexOf(props.productId), 1);
    updateOutfitList([...outfits]);
  }

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

  const averageRating = getAverageRating(productReviewMeta);

  if (props.cardType === "curProduct") {
    return (
      <div className="mx-2" onClick={(e) => {
        addOutfit()
      }}>
        {defaultStyle.photos &&
          <Card style={{width: "18rem"}}>
            {addOutfitButton}
            <div style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              right: 0,
              backgroundColor: "rgb(0,0,0,0.7)",
              // zIndex: 1
            }}/>
            <Card.Img variant="top" src={defaultStyle.photos[0].thumbnail_url} style={{height: "20rem", objectFit: "cover"}}/>
            <Card.Body>
              <Card.Subtitle className="text-muted">{productDetail.category}</Card.Subtitle>
              <Card.Title>{productDetail.name}</Card.Title>
              {productPrice}
              {averageRating !== null && renderStarRating(averageRating)}
              {averageRating === null && <small className="text-muted">No ratings available</small>}
            </Card.Body>
          </Card>
        }
      </div>
    )
  } else {
    return (
      <div className="mx-2 product-card">
        {/* {defaultStyle.photos && */}
          <Card style={{width: "18rem"}}>
            {props.cardType === "related" && compareButton}
            {props.cardType === "outfit" && removeOutfitButton}
            <Card.Img variant="top" src={defaultStyle.photos ? defaultStyle.photos[0].thumbnail_url : undefined} style={{height: "20rem", objectFit: "cover"}} onClick={() => {
        setProductId(props.productId);
      }}/>
            <Card.Body onClick={() => {
        setProductId(props.productId);
      }}>
              <Card.Subtitle className="text-muted">{productDetail.category}</Card.Subtitle>
              <Card.Title>{productDetail.name}</Card.Title>
              {productPrice}
              {averageRating !== null && renderStarRating(averageRating)}
              {averageRating === null && <small className="text-muted">No ratings available</small>}
            </Card.Body>
            { showComparison &&
            <Comparison className="comparison" comparedProductName={productDetail.name} comparedProductId={props.productId} show={showComparison} onHide={() => setShowComparison(false)}/>
            }
          </Card>
        {/* } */}
      </div>
    )
  }
}

export default ProductCard;