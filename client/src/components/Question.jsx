import React from "react";

function Question(props) {
  return (
    <div className="question-box">
      <h4>{`Question ${props.number}: ${props.question.question}`}</h4>

      <div className="form-check">
        <input type="radio" className="form-check-input" name="options"></input>
        <label className="form-check-label">Option 1</label>
      </div>
      <div className="form-check">
        <input type="radio" className="form-check-input" name="options"></input>
        <label className="form-check-label">Option 2</label>
      </div>
    </div>
  );
}

export default Question;
