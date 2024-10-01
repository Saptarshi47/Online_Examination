const details = require("../modelSchema/examDetailSchema");
const questions = require("../modelSchema/questionSchema");
class ExamDetailController {
  static showall = async (req, res) => {
    let result = await details.find({});
    if (result.length > 0) {
      res.status(200).json({ msg: result });
    } else {
      res.status(404).json({ msg: "No subject is there first add subject" });
    }
  };

  static insert = async (req, res) => {
    try {
      const {
        exam_name,
        totalNumberOfQuestion,
        full_marks,
        pass_marks,
        hrs,
        mins,
      } = req.body;
      const existData = await details.findOne({ exam_name });
      if (existData) {
        res.status(404).json({ msg: "Subject is already exists" });
      } else {
        let examDetails = new details({
          exam_name,
          totalNumberOfQuestion,
          full_marks,
          pass_marks,
          hrs,
          mins,
        });

        let result = await examDetails.save();

        if (result) {
          res.status(200).json({
            msg: "Data is inserted",
          });
        } else {
          res.status(404).json({ msg: "Data is not inserted" });
        }
      }
    } catch (err) {
      res.status(404).json({
        msg: "Request cannot be made",
      });
    }
  };

  static update = async (req, res) => {
    try {
      let id = req.params.id;
      let { exam_name, full_marks, pass_marks, hrs, mins, totalNumberOfQuestion } = req.body;
      let examData = await details.findById(id);
      examData.exam_name = exam_name || examData.exam_name;
      examData.full_marks = full_marks || examData.full_marks;
      examData.pass_marks = pass_marks || examData.pass_marks;
      examData.hrs = hrs || examData.hrs;
      examData.mins = mins || examData.mins;
      examData.totalNumberOfQuestion = totalNumberOfQuestion || examData.totalNumberOfQuestion;

      let result = await examData.save();
      if (result) {
        res.status(200).json({
          msg: "Update successfull"
        });
      }
      else{
        res.status(404).json({msg:'Updation failed'})
      }
    } catch (err) {
      res.status(404).json({
        msg: "Request can not be made"
      });
    }
  };

  // static delete = async(req, res)=>{
  //     try{
  //         let id = req.params.id;
  //         let result = await details.findByIdAndDelete(id);
  //         if(result){
  //             res.status(200).json({
  //                 success: true,
  //                 message: "deleted Successfully"
  //             })
  //         }
  //     }
  //     catch(err){
  //         return res.status(404).json({
  //             sucess: false,
  //             message: "Something went wrong",
  //             error: err
  //         })
  //     }
  // }

  static delete = async (req, res) => {
    try {
      let id = req.params.id;
      let examDetail = await details.findByIdAndDelete(id);

      if (!examDetail) {
        res.status(404).json({
          msg: "Exam details is not found",
        });
      } else {
        let deletedQuestions = await questions.deleteMany({
          subject: examDetail.exam_name,
        });
        if (deletedQuestions) {
          res.status(200).json({
            msg: "Deleted exam and associated questions successfully",
          });
        } else {
          res.status(404).json({
            msg: "Exam details is not deleted",
          });
        }
      }
    } catch (err) {
      res.status(404).json({
        msg: "Request cannot be made"
      });
    }
  };

  static getUniqueSubject = async (req, res) => {
    try {
      let data = await details.find();
      if (data.length == 0) {
        res.status(404).json({
          msg: "No subjects are there please add some subject first from the exam detail section",
        });
      } else {
        res.status(200).json({ msg: data });
      }
    } catch (err) {
      res.status(404).json({ msg: "Request cannot be made" });
    }
  };
}

module.exports = ExamDetailController;
