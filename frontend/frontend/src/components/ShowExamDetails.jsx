import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Stack } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, Navigate } from "react-router-dom";

const ShowExamDetails = () => {
  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:2000/api/exam/allexam")
      .then((res) => {
        setData(res.data.msg);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  }, []);

  return (
    <div>
      <div className="container">
      <Button
        variant="contained"
        startIcon={<ArrowBackIcon />}
        onClick={() => {
          navigate("/examDetails");
        }}
      >
        Back
      </Button>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Subject Name</th>
              <th scope="col">Total number of question</th>
              <th scope="col">Full marks</th>
              <th scope="col">Pass marks</th>
              <th scope="col">Taking Hours</th>
              <th scope="col">Taking Mins</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => {
              return (
                <tr key={index}>
                  <td>{value.exam_name}</td>
                  <td>{value.totalNumberOfQuestion}</td>
                  <td>{value.full_marks}</td>
                  <td>{value.pass_marks}</td>
                  <td>{value.hrs}</td>
                  <td>{value.mins}</td>
                  <td>
                    <Button
                      variant="contained"
                      onClick={() => {
                        navigate("/updateExamDetails", { state: value });
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
                            "http://localhost:2000/api/exam/delete/" + value._id
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

export default ShowExamDetails;
