import React, { useState } from "react";

function ChooseSubjectArea(props) {
  const options = [
    "Data Structures and Algorithms",
    "Databases",
    "AI and Machine Learning",
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleChange(event) {
    const value = event.target.value;
    setSelectedOption(value);
  }

  function handleClick(event) {
    event.preventDefault();
    props.onStart(selectedOption);
  }

  return (
    <div className="choose-subject-area">
      <h3>Choose a subject and press "Start" to begin!</h3>
      <form>
        <select className="form-select" onChange={handleChange}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <button className="btn btn-primary" onClick={handleClick}>
          Start
        </button>
      </form>
    </div>
  );
}

export default ChooseSubjectArea;
