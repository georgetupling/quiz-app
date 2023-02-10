const mongoose = require("mongoose");

const questionSchema = {
    question: {
        type: String,
        required: true
    },
    answer_A: {
        type: String,
        required: true
    },
    answer_B: {
        type: String,
        required: true
    },
    answer_C: {
        type: String,
        required: false
    },
    answer_D: {
        type: String,
        required: false
    },
    correct_answer: {
        type: String,
        required: true
    },
};

const Question = mongoose.model("Question", questionSchema);

exports = { Question };