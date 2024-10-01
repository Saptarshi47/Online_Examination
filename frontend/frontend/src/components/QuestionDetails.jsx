import React, { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
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
      .post("http://localhost:2000/api/question/getquestion", {
        subject: sessionStorage.getItem("subject"),
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/subjectSection");
        }}
      >
        Back
      </Button>
      <div className="container">
        <Typography variant="overline">
          Subject:- {sessionStorage.getItem("subject")}
        </Typography>
        <table className="table col-md-4">
          <thead>
            <tr>
              <th scope="col">Question</th>
              <th scope="col">Option1</th>
              <th scope="col">Option2</th>
              <th scope="col">Option3</th>
              <th scope="col">Option4</th>
              <th scope="col">Right Answer</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index, array) => {
              return (
                <tr key={index}>
                  <td>{value.question}</td>
                  <td>{value.optionOne}</td>
                  <td>{value.optionTwo}</td>
                  <td>{value.optionThree}</td>
                  <td>{value.optionFour}</td>
                  <td>{value.rightOption}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/updateQuestion", { state: value });
                      }}
                    >
                      Update
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => {
                        axios
                          .delete(
                            "http://localhost:2000/api/question/delete/" +
                              value._id
                          )
                          .then((res) => {
                            alert(res.data.msg);
                            window.location.reload();
                          })
                          .catch((err) => {
                            alert(err.response.data.msg);
                          });
                      }}
                    >
                      Delete
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
