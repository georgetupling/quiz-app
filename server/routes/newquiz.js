const express = require("express");
const Question = require("../models/question");

const router = express.Router();

router.get("/", (req, res) => {
  const query = req.query.subject;
  console.log(`Querying for ${query} questions...`);
  Question.find({ subject: query }, (err, foundQuestions) => {
    if (err) {
      res.status(500).json({ err });
    }
    let result = [];
    let foundQuestionsCopy = [...foundQuestions];

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * foundQuestionsCopy.length);
      result.push(foundQuestionsCopy[randomIndex]);
      foundQuestionsCopy.splice(randomIndex, 1);
    }
    res.send(result);
  });
});

module.exports = router;
