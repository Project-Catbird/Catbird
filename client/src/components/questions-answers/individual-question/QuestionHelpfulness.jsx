import React, { useState } from 'react';



const QuestionHelpfulness = ( { helpfulness, addHelpfulness, question_id, addHelpfulUsed } ) => {

  const [helpful, setHelpful ] =useState(helpfulness);


  const handleClick = () => {
    addHelpfulness();
    setHelpful(helpful + 1);
  };

   return (
   <span
     className="questionHelpfulness" key={'QuestionHelpfulnessHelpful' + question_id  }>Helpful? <button key={'QuestionHelpfulnessButton' + question_id} disabled={addHelpfulUsed} className="markHelpful" onClick={handleClick}>Yes ({helpful})</button>
    </span>
   )

}


export default QuestionHelpfulness;