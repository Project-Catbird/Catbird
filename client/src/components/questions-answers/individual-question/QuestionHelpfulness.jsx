import React, { useState } from 'react';



const QuestionHelpfulness = ( { helpfulness, addHelpfulness, question_id } ) => {

  const [helpful, setHelpful ] =useState(helpfulness);


  const handleClick = () => {
    addHelpfulness();
    setHelpful(helpful + 1);
  };

   return (
   <span
     className="questionHelpfulness" key={'QuestionHelpfulnessHelpful' + question_id  }>Helpful? <span key={'QuestionHelpfulnessButton' + question_id}className="markHelpful" onClick={handleClick}>Yes ({helpful})</span>
    </span>
   )

}


export default QuestionHelpfulness;