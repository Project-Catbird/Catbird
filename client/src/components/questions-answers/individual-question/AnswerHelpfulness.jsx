import React, { useState } from 'react';



const AnswerHelpfulness = ( { helpfulness, addHelpfulness, addHelpfulUsed, reportAnswer, reportClicked } ) => {

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
     <button
        className="markHelpful"
        onClick={reportAnswer}
        >Report
     </button>
    </div>
   )

}


export default AnswerHelpfulness;