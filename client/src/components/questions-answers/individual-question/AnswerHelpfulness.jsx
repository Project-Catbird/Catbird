import React, { useState } from 'react';



const AnswerHelpfulness = ( { helpfulness, addHelpfulness } ) => {

  const [helpful, setHelpful ] =useState(helpfulness);

  const handleClick = () => {
    addHelpfulness();
    setHelpful(helpful + 1);
  };

   return (
   <div
     className="answerStamp">Helpful? <span className="markHelpful" onClick={handleClick}>Yes ({helpful})</span>
    </div>
   )

}


export default AnswerHelpfulness;