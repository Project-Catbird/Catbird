import React from 'react';
import RelatedComparisons from './related-comparisons/index.jsx';
import QnAComponent from './questions-answers/index.jsx';
import RatingsReviews from './ratings-reviews/Index.jsx';
import Overview from './overview/Index.jsx';
import Nav from './Nav.jsx';


const App = (props) => {

  return (
    <React.Fragment>
      <div id="main-nav">
        <Nav/>
      </div>
      <div id="main-overview">
        <Overview />
      </div>
      <div id="main-related">
        <RelatedComparisons/>
      </div>
      <div id="main-qna">
        <QnAComponent />
      </div>
      <div id="main-ratings">
        <RatingsReviews />
      </div>
    </React.Fragment>
  )
};

export default App;