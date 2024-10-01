import React from "react";
import { Typography, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  if (
    sessionStorage.getItem("login") != "true" &&
    sessionStorage.getItem("role") != "admin"
  ) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <div className="container py-3">
        <header>
          <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal text-body-emphasis">
              Hello Admin
            </h1>
            <p className="fs-5 text-body-secondary">
              Welcome to our future examination system.
            </p>
          </div>
        </header>

        <main>
          <div className=" row mb-3 text-center ">
            <div className=" col-md-4 d-flex justify-content-center ">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Add students</h5>
                  <p className="card-text">Create account for students</p>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/addStudent");
                    }}
                  >
                    Add student
                  </Button>
                </div>
              </div>
            </div>
            <div className=" col-md-4 d-flex justify-content-center ">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Exam Details</h5>
                  <p className="card-text">Subject, marks and duration should be uploaded in this section</p>
                  <Button
                    variant="contained"
                    onClick={() => {
                      navigate("/examDetails");
                    }}
                  >
                    Exam details
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Question section</h5>
                  <p className="card-text">Question section for</p>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/questionSection")}
                  >
                    Check out
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-6 text-center mb-4">Compare plans</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}></th>
                  <th style={{ width: "22%" }}>Free</th>
                  <th style={{ width: "22%" }}>Pro</th>
                  <th style={{ width: "22%" }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Public
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Private
                  </th>
                  <td></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="row" className="text-start">
                    Permissions
                  </th>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Sharing
                  </th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Unlimited members
                  </th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">
                    Extra security
                  </th>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>

        <footer className="pt-4 my-md-5 pt-md-5 border-top">
          <div className="row">
            <div className="col-12 col-md">
              <img
                className="mb-2"
                src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                alt=""
                width="24"
                height="19"
              />
              <small className="d-block mb-3 text-body-secondary">
                © 2017-2024
              </small>
            </div>
            <div className="col-6 col-md">
              <h5>Features</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Random feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Team feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Another one
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Resource name
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Another resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Team
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Locations
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a className="link-secondary text-decoration-none" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdminDashboard;
