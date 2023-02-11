import React from "react";

function SubjectCard(props) {
  return (
    <div className="subject-card">
      <img src={props.img} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default SubjectCard;
