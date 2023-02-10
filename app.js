const { urlencoded } = require("express");
const express = require("express");
const path = require("path");

const db = require("./db");
const Question = require("./models/question");

const app = express();
app.use(express.static(path.join(__dirname, "client/build")));
app.use(urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.post("/question", (req, res) => {
        const newQuestion = new Question(req.body);
        newQuestion.save()
            .then(() => {
                res.status(201).json({ message: "Question created successfully" })
            })
            .catch ((err) => {
                res.status(500).json({ err });
            });  
});

app.listen(port = process.env.port || 3000, () => {
    console.log(`Server is running on port ${port}.`);
});