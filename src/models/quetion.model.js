const mongoose = require("mongoose");

const QueSchema = new mongoose.Schema({
  category: {type: String, require: true},
  difficulty: {type: String, require: true},
  question: {type: String, require: true},
  correct_answer: {type: String, require: true},
  incorrect_answers: [{type: String}],
});

const Question = mongoose.model("question", QueSchema);

module.exports = Question;
