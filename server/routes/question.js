const express = require("express");
const router = express.Router();
const Question = require("../models/question");

router.get("/", (req, res) => {
    Question.find({}, (err, questions) => {
        if (!err) {
            res.json(questions);
        } else {
            res.send(err);
        }
    });
});

router.post("/", (req, res) => {
    const newQuestion = new Question(req.body);
    newQuestion.save()
        .then(() => {
            res.status(201).json({ message: "Question created successfully" })
        })
        .catch ((err) => {
            res.status(500).json({ err });
        });  
});

module.exports = router;