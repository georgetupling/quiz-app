import React, { useState } from "react";
import MenuBar from "./MenuBar.jsx";
import ChooseSubjectArea from "./ChooseSubjectArea.jsx";
import Question from "./Question.jsx";
import Footer from "./Footer.jsx";
import ResultsArea from "./ResultsArea.jsx";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isSubmitted, setSubmitted] = useState(false);

  function createQuiz(subject) {
    axios
      .get("/newquiz", {
        params: { subject: subject },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        const data = response.data;
        setQuestions(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function resetQuiz() {
    window.location.reload();
  }

  function updateSelectedOptions(selectedOption, questionIndex) {
    setSelectedOptions((prevValue) => {
      const newSelectedOptions = [...prevValue];
      newSelectedOptions[questionIndex] = selectedOption;
      return newSelectedOptions;
    });
  }

  function handleSubmit() {
    setUserAnswers(selectedOptions);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <MenuBar />
      {isSubmitted && (
        <ResultsArea questions={questions} userAnswers={userAnswers} />
      )}
      {questions.length === 0 && <ChooseSubjectArea onStart={createQuiz} />}

      {questions.length > 0 && (
        <div className="question-area">
          {questions.map((question, index) => {
            return (
              <Question
                key={index}
                index={index}
                question={question}
                onOptionChange={updateSelectedOptions}
                userAnswer={userAnswers[index]}
                isSubmitted={isSubmitted}
              />
            );
          })}
          {!isSubmitted && (
            <div className="button-area">
              <button
                onClick={handleSubmit}
                className="btn btn-large btn-success"
              >
                Submit
              </button>
              <button
                className="btn btn-large btn-secondary"
                onClick={resetQuiz}
              >
                Cancel
              </button>
            </div>
          )}
          {isSubmitted && (
            <div className="button-area">
              <button className="btn btn-large btn-primary" onClick={resetQuiz}>
                Reset
              </button>
            </div>
          )}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
