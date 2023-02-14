import React from "react";

function ResultsArea(props) {
  let score = 0;
  for (let i = 0; i < props.questions.length; i++) {
    if (props.questions[i].correct_answer === props.userAnswers[i]) {
      score++;
    }
  }

  return (
    <div className="results-area">
      <h1>
        You scored {score}/{props.questions.length}!
      </h1>
      <h3>
        {score > 8
          ? "Well done! That's a great score :D"
          : score > 4
          ? "That's a decent score :)"
          : "Maybe next time you'll do better :("}
      </h3>
      <p>Scroll down to view which answers you got right.</p>
    </div>
  );
}

export default ResultsArea;
