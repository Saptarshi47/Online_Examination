import React, { useEffect, useState } from "react";
import { Typography, Button, Stack, TextField } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UpdateQuestion = () => {
  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const location = useLocation();
  let data = location.state;

  const formik = useFormik({
    initialValues: {
      question: data.question,
      optionOne: data.optionOne,
      optionTwo: data.optionTwo,
      optionThree: data.optionThree,
      optionFour: data.optionFour,
      rightOption: data.rightOption,
    },
    validationSchema: Yup.object({
      question: Yup.string().required("Question is required"),
      optionOne: Yup.string().required("Option 1 is required"),
      optionTwo: Yup.string().required("Option 2 is required"),
      optionThree: Yup.string().required("Option 3 is required"),
      optionFour: Yup.string().required("Option 4 is required"),
      rightOption: Yup.string().required("Right answer is required"),
    }),
    onSubmit: (values) => {
      axios
        .put("http://localhost:2000/api/question/update/" + data._id, values)
        .then((res) => {
          alert(res.data.msg);
          navigate("/questionDetails");
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  });

  return (
    <div>
      <div className="container">
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/questionDetails");
        }}
      >
        Back
      </Button>
        <div className="row d-flex  justify-content-center">
          <div className="col-md-6 border text-center mt-2 p-5">
            <Typography variant="h3">Add Questions</Typography>
            <form onSubmit={formik.handleSubmit}>
              <Stack spacing={2}>
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
                  error={
                    formik.errors.optionThree && formik.touched.optionThree
                  }
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
                  error={
                    formik.errors.rightOption && formik.touched.rightOption
                  }
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
    </div>
  );
};

export default UpdateQuestion;
