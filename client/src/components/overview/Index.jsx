import React from 'react';

////////////////////////////////////////////////////////////////////////////////////////////////
// Import modules to use in component creation, uncomment as neccessary
////////////////////////////////////////////////////////////////////////////////////////////////

import ProductInfo from './ProductInfo.jsx';
import StyleSelector from './StyleSelector.jsx';
import AddToCart from './AddToCart.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        Overview!
        <AddToCart/>
        <ImageGallery/>
        <ProductInfo/>
        <StyleSelector/>
      </div>
    )
  }
}

export default Overview;