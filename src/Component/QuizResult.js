import React from 'react'

function QuizResult(props) {
  return (
    <>
    <div className='reslt'>
        Your Score: {props.score} <br />
        Maximum Score: {props.totalScore}
    </div>

    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}
export default QuizResult
