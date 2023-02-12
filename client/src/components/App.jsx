import React, { useState } from "react";
import MenuBar from "./MenuBar.jsx";
import ChooseSubjectArea from "./ChooseSubjectArea.jsx";
import QuestionArea from "./QuestionArea.jsx";
import Footer from "./Footer.jsx";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState([]);
  const [isActive, setActive] = useState(false);

  function createQuiz(selectedOption) {
    axios
      .get("/newquiz", {
        params: { subject: selectedOption },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((response) => {
        const data = response.data;
        setQuestions(data);
        setActive(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      <MenuBar />
      {!isActive && <ChooseSubjectArea onStart={createQuiz} />}
      {isActive && <QuestionArea questions={questions} />}
      <Footer />
    </div>
  );
}

export default App;
