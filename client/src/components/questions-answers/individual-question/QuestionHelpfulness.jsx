import React, { useState } from 'react';



const QuestionHelpfulness = ( { helpfulness, addHelpfulness } ) => {

  const [helpful, setHelpful ] =useState(helpfulness);

  const handleClick = () => {
    addHelpfulness();
    setHelpful(helpful + 1);
  };

   return (
   <div
     className="questionHelpfulness">Helpful? <span className="markHelpful" onClick={handleClick}>Yes ({helpful})</span>
    </div>
   )

}


export default QuestionHelpfulness;