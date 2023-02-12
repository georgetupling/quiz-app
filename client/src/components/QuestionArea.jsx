import React from "react";
import Question from "./Question.jsx";

function QuestionArea(props) {
  const questions = props.questions;
  return (
    <div className="question-area">
      {questions.map((question, index) => {
        return <Question key={index} number={index + 1} question={question} />;
      })}
    </div>
  );
}

export default QuestionArea;
