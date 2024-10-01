import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Typography, TextField, Stack, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const StudentRegistration = () => {
  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.number().required("Phone number is required"),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
      cpassword: Yup.string()
        .oneOf([Yup.ref("password")], "Confirm password is not matched")
        .required("Confirm password is required"),
    }),
    onSubmit: (values, action) => {
      axios
        .post("http://localhost:2000/api/register", values)
        .then((res) => {
          alert(res.data.msg);
          action.resetForm();
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
          navigate("/dashboard");
        }}
      >
        Back
      </Button>
      <div className="row d-flex  justify-content-center">
        <div className="col-md-6 border text-center mt-5 p-5">
          <Typography variant="overline" fontSize={"24px"}>
            Add students
          </Typography>
          <form onSubmit={formik.handleSubmit} className="">
            <Stack spacing={2}>
              <TextField
                variant="standard"
                label="Name"
                name="name"
                {...formik.getFieldProps("name")}
                error={formik.errors.name && formik.touched.name}
                helperText={
                  formik.errors.name && formik.touched.name
                    ? formik.errors.name
                    : null
                }
              />
              <TextField
                label="email"
                variant="standard"
                name="email"
                {...formik.getFieldProps("email")}
                type="email"
                error={formik.errors.email && formik.touched.email}
                helperText={
                  formik.errors.email && formik.touched.email
                    ? formik.errors.email
                    : null
                }
              />
              <TextField
                label="Phone"
                variant="standard"
                name="phone"
                {...formik.getFieldProps("phone")}
                type="number"
                error={formik.errors.phone && formik.touched.phone}
                helperText={
                  formik.errors.phone && formik.touched.phone
                    ? formik.errors.phone
                    : null
                }
              />

              <TextField
                label="Password"
                variant="standard"
                name="password"
                {...formik.getFieldProps("password")}
                error={formik.errors.password && formik.touched.password}
                helperText={
                  formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : null
                }
              />
              <TextField
                label="Confirm Password"
                variant="standard"
                name="cpassword"
                {...formik.getFieldProps("cpassword")}
                error={formik.errors.cpassword && formik.touched.cpassword}
                helperText={
                  formik.errors.cpassword && formik.touched.cpassword
                    ? formik.errors.cpassword
                    : null
                }
              />
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

export default StudentRegistration;
