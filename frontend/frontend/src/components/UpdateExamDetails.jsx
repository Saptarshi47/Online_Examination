import React from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Stack, Button, TextField, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UpdateExamDetails = () => {
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
      exam_name: data.exam_name,
      full_marks: data.full_marks,
      pass_marks: data.pass_marks,
      hrs: data.hrs,
      mins: data.mins,
      totalNumberOfQuestion: data.totalNumberOfQuestion,
    },
    validationSchema: Yup.object({
      exam_name: Yup.string().required("Subject name is required"),
      full_marks: Yup.string().required("Full marks is required"),
      pass_marks: Yup.string().required("Pass marks is required"),
      totalNumberOfQuestion: Yup.string().required(
        "Total number of question is required"
      ),
      hrs: Yup.string()
        .required("Hrs is required")
        .test("check", "Invalid time", (value) => {
          let isValid = true;
          if (value > 12 || value < 1) {
            isValid = false;
          }
          return isValid;
        }),
      mins: Yup.string()
        .required("Mins is required")
        .test("check", "Invalid time", (value) => {
          let isValid = true;
          if (value > 59 || value < 0) {
            isValid = false;
          }
          return isValid;
        }),
    }),
    onSubmit: (values) => {
      axios
        .put("http://localhost:2000/api/exam/update/" + data._id, values)
        .then((res) => {
          alert(res.data.msg);
          navigate(-1);
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  });

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/showExamDetails");
        }}
      >
        Back
      </Button>
      <h2 className="text-center">Update Exam details form</h2>
      <div className="container d-flex justify-content-center">
        <form
          onSubmit={formik.handleSubmit}
          className="border text-center w-50 p-5"
        >
          <Stack spacing={2}>
            <TextField
              label="Subject"
              name="exam_name"
              variant="standard"
              fullWidth
              {...formik.getFieldProps("exam_name")}
              error={formik.errors.exam_name && formik.touched.exam_name}
              helperText={
                formik.errors.exam_name && formik.touched.exam_name
                  ? formik.errors.exam_name
                  : null
              }
            />
            <TextField
              label="Total number of question"
              type="number"
              variant="standard"
              fullWidth
              name="totalNumberOfQuestion"
              {...formik.getFieldProps("totalNumberOfQuestion")}
              error={
                formik.errors.totalNumberOfQuestion &&
                formik.touched.totalNumberOfQuestion
              }
              helperText={
                formik.errors.totalNumberOfQuestion &&
                formik.touched.totalNumberOfQuestion
                  ? formik.errors.totalNumberOfQuestion
                  : null
              }
            />
            <TextField
              label="Full marks"
              type="number"
              name="full_marks"
              variant="standard"
              fullWidth
              {...formik.getFieldProps("full_marks")}
              error={formik.errors.full_marks && formik.touched.full_marks}
              helperText={
                formik.errors.full_marks && formik.touched.full_marks
                  ? formik.errors.full_marks
                  : null
              }
            />
            <TextField
              label="Pass marks"
              type="number"
              variant="standard"
              fullWidth
              name="pass_marks"
              {...formik.getFieldProps("pass_marks")}
              error={formik.errors.pass_marks && formik.touched.pass_marks}
              helperText={
                formik.errors.pass_marks && formik.touched.pass_marks
                  ? formik.errors.pass_marks
                  : null
              }
            />

            <Stack direction={"row"} spacing={2}>
              <Typography variant="overline">Duration</Typography>{" "}
              <TextField
                label="Hrs"
                type="number"
                variant="standard"
                name="hrs"
                {...formik.getFieldProps("hrs")}
                error={formik.errors.hrs && formik.touched.hrs}
                helperText={
                  formik.errors.hrs && formik.touched.hrs
                    ? formik.errors.hrs
                    : null
                }
              />
              <TextField
                label="Mins"
                type="number"
                variant="standard"
                name="mins"
                {...formik.getFieldProps("mins")}
                error={formik.errors.mins && formik.touched.mins}
                helperText={
                  formik.errors.mins && formik.touched.mins
                    ? formik.errors.mins
                    : null
                }
              />
            </Stack>
            <Stack direction={"row"}>
              <Button variant="contained" type="submit">
                Update subject
              </Button>
            </Stack>
          </Stack>
        </form>
      </div>
    </div>
  );
};

export default UpdateExamDetails;
