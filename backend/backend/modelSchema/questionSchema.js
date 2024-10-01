const mongoose = require("../db/database");

const questionSchema = mongoose.Schema({
  subject: {
    type: String,
  },
  question: {
    type: String,
    required: true,
  },
  optionOne: {
    type: String,
    required: true,
  },
  optionTwo: {
    type: String,
    required: true,
  },
  optionThree: {
    type: String,
    required: true,
  },
  optionFour: {
    type: String,
    required: true,
  },

  rightOption: {
    type: String,
    required: true,
  },

  // marks: {
  //   type: Number,
  //   required: true,
  // },
},{
  timestamps:true
});

const questions = mongoose.model("question", questionSchema);
module.exports = questions;
