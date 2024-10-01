import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ showModal, handleClose }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      axios
        .post("http://localhost:2000/api/loginuser", values)
        .then((res) => {
          sessionStorage.setItem("_id", res.data._id);
          sessionStorage.setItem("role", res.data.role);
          sessionStorage.setItem("login", true);
          if (res.data.role == "admin") {
            navigate("/dashboard");
          }
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    },
  });
  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">
              Login
            </h5>
            &nbsp;
            <Button
              variant="outlined"
              color="primary"
              className="close"
              onClick={handleClose}
            >
              {/* <span aria-hidden="true">&times;</span> */}
              <Typography fontWeight={"bold"}>
                <CloseIcon />
              </Typography>
            </Button>
          </div>
          <div className="modal-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group pb-3">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  fullWidth
                  required
                />
                {/* <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" /> */}
              </div>
              <div className="form-group">
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                  fullWidth
                  required
                />
                {/* <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" /> */}
              </div>
              &nbsp;
              <div>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={handleClose}
                >
                  Close
                </Button>
                &nbsp;
                <Button type="submit" variant="contained">
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
