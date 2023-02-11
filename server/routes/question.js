const express = require("express");
const router = express.Router();
const Question = require("../models/question");

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