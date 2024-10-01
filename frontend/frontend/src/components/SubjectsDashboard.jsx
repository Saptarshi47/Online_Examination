import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

const QuestionDetails = () => {
  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/exam/allexam")
      .then((res) => {
        setData(res.data.msg);
      })
      .catch((err) => {
        console.log(err.response.data.msg);
      });
  }, []);

  return (
    <div>
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index, array) => {
              return (
                <tr key={index}>
                  <td>{value.exam_name}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/questionDetails");
                        sessionStorage.setItem("subject", value.exam_name);
                      }}
                    >
                      Click
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionDetails;
