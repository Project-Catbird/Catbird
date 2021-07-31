import React from 'react';
import RelatedComparisons from './related-comparisons/index.jsx';
import QnAComponent from './questions-answers/index.jsx';
import RatingsReviews from './ratings-reviews/Index.jsx';
import Overview from './overview/Index.jsx';
import Nav from './Nav.jsx';


const App = (props) => {

  return (
    <div>
      <Nav/>
      {/* <Overview />
      <RelatedComparisons/> */}
      <QnAComponent />
      {/* <RatingsReviews /> */}
    </div>
  )
};

export default App;