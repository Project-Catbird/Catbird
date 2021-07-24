import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Moment from 'react-moment';

const Answer = ( { answer } ) => {
  console.log(answer);
  return(
  <div>
  <p>{answer.body}</p>
  <Breadcrumb>
  <Breadcrumb.Item>by {answer.answerer_name}</Breadcrumb.Item>
  <Breadcrumb.Item >{answer.date}</Breadcrumb.Item>
  <Breadcrumb.Item>Helpful? Yes{answer.helpfulness}</Breadcrumb.Item>
  </Breadcrumb>

  </div>

  )

}

export default Answer;