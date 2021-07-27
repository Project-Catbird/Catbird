import React from 'react';
import QnAComponent from './questions-answers/index.jsx';
import RatingsReviews from './ratings-reviews/Index.jsx';
import Overview from './overview/Index.jsx';



const App = (props) => {

  return (
    <div>
      <Overview />
      <RatingsReviews />
      <QnAComponent />
    </div>
  )
};

export default App;