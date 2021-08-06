import React, { lazy, Suspense } from 'react';
//import RelatedComparisons from './related-comparisons/Index.jsx';
//import QnAComponent from './questions-answers/Index.jsx';
//import RatingsReviews from './ratings-reviews/Index.jsx';
import Overview from './overview/Index.jsx';
import Nav from './Nav.jsx';

const QnAComponent = lazy(() => import('./questions-answers/Index.jsx'))
const RatingsReviews = lazy(() => import('./ratings-reviews/Index.jsx'));
const RelatedComparisons = lazy(() => import('./related-comparisons/Index.jsx'));
const renderLoader = () => <p>Loading</p>;


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
        <Suspense fallback={renderLoader()}>
          <RelatedComparisons/>
        </Suspense>
      </div>
      <div id="main-qna">
        <Suspense fallback={renderLoader()}>
          <QnAComponent />
        </Suspense>
      </div>
      <div id="main-ratings">
        <Suspense fallback={renderLoader()}>
          <RatingsReviews />
        </Suspense>
      </div>
    </React.Fragment>
  )
};

export default App;