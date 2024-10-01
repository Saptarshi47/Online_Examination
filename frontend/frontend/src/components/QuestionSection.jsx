import React from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Navigate, useNavigate } from "react-router-dom";

const QuestionSection = () => {
  const navigate = useNavigate();

  if (
    sessionStorage.getItem("login") == "false" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

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
      <div className="row">
        <div className="card col-md-6 m-2" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Add question</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nisi fugiat nemo quas necessitatibus ab culpa inventore sequi nihil voluptatum.</p>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/addQuestion");
              }}
            >
              Click me
            </Button>
          </div>
        </div>
        <div className="card col-md-6 m-2" style={{width: "18rem"}}>
          <div className="card-body">
            <h5 className="card-title">Question details here</h5>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nisi fugiat nemo quas necessitatibus ab culpa inventore sequi nihil voluptatum.</p>
            <Button
              variant="contained"
              onClick={() => {
                navigate("/subjectSection");
              }}
            >
              Click me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
