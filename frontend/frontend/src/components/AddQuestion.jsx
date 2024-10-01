import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField, Stack, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddQuestion = () => {
  const navigate = useNavigate();

  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/exam/getSubjects")
      .then((res) => {
        setSubjects(res.data.msg);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      question: "",
      subject: "",
      optionOne: "",
      optionTwo: "",
      optionThree: "",
      optionFour: "",
      rightOption: "",
    },
    validationSchema: Yup.object({
      question: Yup.string().required("Question is required"),
      subject: Yup.string().required("Subject is required"),
      optionOne: Yup.string().required("Option 1 is required"),
      optionTwo: Yup.string().required("Option 2 is required"),
      optionThree: Yup.string().required("Option 3 is required"),
      optionFour: Yup.string().required("Option 4 is required"),
      rightOption: Yup.string().required("Right answer is required"),
    }),
    onSubmit: (values) => {
      axios
        .post("http://localhost:2000/api/question/insert", values)
        .then((res) => {
          alert(res.data.msg);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  });

  return (
    <div className="container">
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/questionSection");
        }}
      >
        Back
      </Button>
      <div className="row d-flex  justify-content-center">
        <div className="col-md-6 border text-center mt-2 p-5">
          <Typography variant="h3">Add Questions</Typography>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
              <select name="subject" {...formik.getFieldProps("subject")}>
                <option value="">Subject</option>
                {subjects.map((value, index) => {
                  return (
                    <option value={value.exam_name} key={index}>
                      {value.exam_name}
                    </option>
                  );
                })}
              </select>
              <Typography variant="overline" color="error">
                {formik.errors.subject && formik.touched.subject
                  ? formik.errors.subject
                  : null}
              </Typography>

              <TextField
                label="Question"
                variant="standard"
                name="question"
                error={formik.errors.question && formik.touched.question}
                helperText={
                  formik.errors.question && formik.touched.question
                    ? formik.errors.question
                    : null
                }
                {...formik.getFieldProps("question")}
              />
              <TextField
                label="Option1"
                variant="standard"
                name="optionOne"
                error={formik.errors.optionOne && formik.touched.optionOne}
                helperText={
                  formik.errors.optionOne && formik.touched.optionOne
                    ? formik.errors.optionOne
                    : null
                }
                {...formik.getFieldProps("optionOne")}
              />
              <TextField
                label="Option2"
                variant="standard"
                name="optionTwo"
                error={formik.errors.optionTwo && formik.touched.optionTwo}
                helperText={
                  formik.errors.optionTwo && formik.touched.optionTwo
                    ? formik.errors.optionTwo
                    : null
                }
                {...formik.getFieldProps("optionTwo")}
              />
              <TextField
                label="Option3"
                variant="standard"
                name="optionThree"
                error={formik.errors.optionThree && formik.touched.optionThree}
                helperText={
                  formik.errors.optionThree && formik.touched.optionThree
                    ? formik.errors.optionThree
                    : null
                }
                {...formik.getFieldProps("optionThree")}
              />
              <TextField
                label="Option4"
                variant="standard"
                name="optionFour"
                error={formik.errors.optionFour && formik.touched.optionFour}
                helperText={
                  formik.errors.optionFour && formik.touched.optionFour
                    ? formik.errors.optionFour
                    : null
                }
                {...formik.getFieldProps("optionFour")}
              />
              <TextField
                label="Right Answer"
                variant="standard"
                name="rightOption"
                error={formik.errors.rightOption && formik.touched.rightOption}
                helperText={
                  formik.errors.rightOption && formik.touched.rightOption
                    ? formik.errors.rightOption
                    : null
                }
                {...formik.getFieldProps("rightOption")}
              />
              {/* <TextField
                label="Marks"
                name="marks"
                type="number"
                error={formik.errors.marks && formik.touched.marks}
                helperText={
                  formik.errors.marks && formik.touched.marks
                    ? formik.errors.marks
                    : null
                }
                {...formik.getFieldProps("marks")}
              /> */}
              <Stack direction={"row"}>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </Stack>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
