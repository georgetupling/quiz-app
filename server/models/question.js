const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: {
        A: {
            type: String,
            required: true
        },
        B: {
            type: String,
            required: true
        },
        C: {
            type: String,
            required: false
        },
        D: {
            type: String,
            required: false
        },
        E: {
            type: String,
            required: false
        },
        F: {
            type: String,
            required: false
        }
    },
    correct_answer: {
        type: String,
        required: true,
        enum: ["A", "B", "C", "D", "E", "F"]
    },
    module: {
        type: String,
        required: false
    }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;