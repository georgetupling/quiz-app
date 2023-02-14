const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  answers: {
    A: {
      type: String,
      required: true,
    },
    B: {
      type: String,
      required: true,
    },
    C: {
      type: String,
      required: true,
    },
    D: {
      type: String,
      required: true,
    },
  },
  correct_answer: {
    type: String,
    required: true,
    enum: ["A", "B", "C", "D"],
  },
  subject: {
    type: String,
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
