const express = require("express");
const path = require("path");
const db = require("./db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

// Import routers
const questionRouter = require("./routes/question");
const newQuizRouter = require("./routes/newquiz");

// Configure app to use routers
app.use("/question", questionRouter);
app.use("/newquiz", newQuizRouter);

app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// app.get("/uploadtestdata", (req, res) => {
//   const testData = require("../test-data/testdata");
//   const Question = require("./models/question");
//   testData.map((question) => {
//     const newQuestion = new Question(question);
//     newQuestion.save();
//   });
// });

app.listen((port = process.env.port || 3000), () => {
  console.log(`Server is running on port ${port}.`);
});
