import React, { useState } from 'react';
import Answer from './Answer.jsx';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'


const AnswerList = ({ answerList, question_id, question_body }) => {
  const [ answersShwon, setAnswersShown ] = useState(answerList.slice(0, 2));
  const [ buttonClicked, setButtonClicked ] = useState(false);
  const [ answersHidden, setAnswersHidden] = useState( answerList.length > 2 ? answerList.slice(2) : []);
  const answers = answersShwon.map(answer => {
    return(
      <li className="answerListGroupItem" key={answer.answer_id}>
      <Answer answer={answer} question_id={question_id} question_body={question_body}/>
      </li>
    )
  })

  const seeMoreOrSeeLess = () => {
    if (answersHidden.length > 0 && !buttonClicked) {
      return <button
                className="see-more-answers"
                onClick={handleSeeMoreAnswer}
                data-testid="see-more-answers"
                >see more answers
             </button>
    } else if (buttonClicked) {
      return  <button
                className="see-more-answers"
                onClick={handleSeeLessAnswer}
                data-testid="see-more-answers"
                >see less answers
              </button>
    } else {
      return null
    }
  }


  const handleSeeMoreAnswer = () => {
    setButtonClicked(true);
    setAnswersShown([
      ...answersShwon,
      ...answersHidden
    ])
  }

  const handleSeeLessAnswer = () => {
    setButtonClicked(false);
    setAnswersShown(
      answersShwon.slice(0, 2)
    )
  }

  return (
    <div className="answerContainer">
    <ul className="answerListGroup" variant="flush">
      {answers}
    </ul>
      {seeMoreOrSeeLess()}
    </div>
  )
}

export default AnswerList;