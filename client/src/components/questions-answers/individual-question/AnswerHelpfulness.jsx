import React, { useState } from 'react';



const AnswerHelpfulness = ( { helpfulness, addHelpfulness, addHelpfulUsed } ) => {

  const [helpful, setHelpful ] =useState(helpfulness);

  const handleClick = () => {
    addHelpfulness();
    setHelpful(helpful + 1);
  };

   return (
   <div
     className="answerStamp">Helpful?
     <button
       className="markHelpful"
       onClick={handleClick}
       disabled={addHelpfulUsed}
       >Yes ({helpful})
     </button>
    </div>
   )

}


export default AnswerHelpfulness;