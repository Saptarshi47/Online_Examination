const examDetails = require("../modelSchema/examDetailSchema");
const questions = require("../modelSchema/questionSchema");

class questionController { 

  static getQuestion = async (req, res) => {
    try {
      const { subject } = req.body;
      let data = await questions.find({ subject });
      if (data.length > 0) {
        res.status(200).json({data});
      } else {
        res.status(404).json({ msg: `There is no question against this subject pls add some` });
      }
    } catch (err) {
      console.log(err);
      
    }
  };
  static insert = async (req, res) => {
    try {
      const {
        subject,
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        rightOption,
      } = req.body;

      const questionExist = await questions.findOne({
        subject,
        question,
      });

      if (questionExist) {
        res.status(404).json({ msg: "Question is already exists" });
      } else {
        const newQuestion = new questions({
          subject,
          question,
          optionOne,
          optionTwo,
          optionThree,
          optionFour,
          rightOption,
        });
        const result = await newQuestion.save();
        if (result) {
          res.status(200).json({ msg: "Question is added" });
        } else {
          res.status(404).json({ msg: "Question is not added" });
        }
      }
    } catch (err) {
      res.status(404).json({ msg: "Request cannot be made" });
    }
  };
 
  static delete = async (req, res) => {
    try {
      let _id = req.params._id;
      let result = await questions.findByIdAndDelete(_id);
      if (result) {
        res.status(200).json({
          msg: "Question is deleted Successfully",
        });
      }
      else{
        res.status(404).json({msg:'Question is not deleted'})
      }
    } catch (err) {
       res.status(404).json({
        msg: "Request cannot be made",
      });
    }
  };

  static update = async (req, res) => {
    try {
      let _id = req.params.id;
      let {
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        rightOption,
      } = req.body;
      let questionData = await questions.findOne({_id});
      questionData.question = question || questionData.question;
      questionData.optionOne = optionOne || questionData.optionOne;
      questionData.optionTwo = optionTwo || questionData.optionTwo;
      questionData.optionThree = optionThree || questionData.optionThree;
      questionData.optionFour = optionFour || questionData.optionFour;
      questionData.rightOption = rightOption || questionData.rightOption;
      let result = await questionData.save();
      if (result) {
        res.status(200).json({
          msg: "Question is Updatd Successfully",
        });
      }
      else{
        res.status(404).json({
          msg: "Question is not updated",
        });
      }
    } catch (err) {
      res.status(404).json({
        msg: "Request cannot be made",
      });
    }
  };
}

module.exports = questionController;
