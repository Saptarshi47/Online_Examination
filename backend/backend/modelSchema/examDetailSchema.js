const mongoose = require("../db/database");

const examDetailSchema = mongoose.Schema(
  {
    exam_name: {
      type: String,
    },
    totalNumberOfQuestion: { type: Number },
    full_marks: {
      type: Number,
    },
    pass_marks: {
      type: Number,
    },
    hrs: {
      type: Number,
    },
    mins: { type: Number },
  },
  {
    timestamps: true,
  }
);

const exam_detail = mongoose.model("exam_detail", examDetailSchema);
module.exports = exam_detail;
