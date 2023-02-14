import React from "react";

function Question(props) {
  function handleClick(event) {
    props.onOptionChange(event.target.value, props.index);
  }

  return (
    <div className="question-box">
      <h4>{`${props.index + 1}.  ${props.question.question}`}</h4>

      <div className="answer-box">
        <label
          className={
            props.isSubmitted === true && props.question.correct_answer === "A"
              ? "form-control answer-a green-bg"
              : props.isSubmitted === true && props.userAnswer === "A"
              ? "form-control answer-a red-bg"
              : "form-control answer-a"
          }
        >
          <input
            type="radio"
            className="form-check-input"
            name={`radio-${props.index}`}
            onClick={handleClick}
            value="A"
            disabled={props.isSubmitted ? true : false}
          ></input>
          {props.question.answers.A}
        </label>
        <label
          className={
            props.isSubmitted === true && props.question.correct_answer === "B"
              ? "form-control answer-b green-bg"
              : props.isSubmitted === true && props.userAnswer === "B"
              ? "form-control answer-b red-bg"
              : "form-control answer-b"
          }
        >
          <input
            type="radio"
            className="form-check-input"
            name={`radio-${props.index}`}
            onClick={handleClick}
            value="B"
            disabled={props.isSubmitted ? true : false}
          ></input>
          {props.question.answers.B}
        </label>
        <label
          className={
            props.isSubmitted === true && props.question.correct_answer === "C"
              ? "form-control answer-c green-bg"
              : props.isSubmitted === true && props.userAnswer === "C"
              ? "form-control answer-c red-bg"
              : "form-control answer-c"
          }
        >
          <input
            type="radio"
            className="form-check-input"
            name={`radio-${props.index}`}
            onClick={handleClick}
            value="C"
            disabled={props.isSubmitted ? true : false}
          ></input>
          {props.question.answers.C}
        </label>
        <label
          className={
            props.isSubmitted === true && props.question.correct_answer === "D"
              ? "form-control answer-d green-bg"
              : props.isSubmitted === true && props.userAnswer === "D"
              ? "form-control answer-d red-bg"
              : "form-control answer-d"
          }
        >
          <input
            type="radio"
            className="form-check-input"
            name={`radio-${props.index}`}
            onClick={handleClick}
            value="D"
            disabled={props.isSubmitted ? true : false}
          ></input>
          {props.question.answers.D}
        </label>
      </div>
    </div>
  );
}

export default Question;
