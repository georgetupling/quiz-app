import React from "react";
import SubjectCard from "./SubjectCard.jsx";

function CardsArea() {
  return (
    <div className="cards-section">
      <div className="cards-area">
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
        <SubjectCard
          img="images/quiz.png"
          title="Data Structures, Algorithms and Databases"
        />
      </div>
    </div>
  );
}

export default CardsArea;
