import React from 'react';
import RatingsReviews from './ratings-reviews/Index.jsx';
import Overview from './overview/Index.jsx';

const App = (props) => {

  return (
    <div>
      <Overview />
      <RatingsReviews />
    </div>
  )
};

export default App;