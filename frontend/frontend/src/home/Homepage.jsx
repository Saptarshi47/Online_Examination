// src/components/Home/Home.js
import React, { useState } from "react";
import { Typography } from "@mui/material";
import "./Home.css";
import LoginModal from "../loginModal/LoginModal";

const Homepage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="homepage">
      <section className="bg-light text-center py-5">
        <div className="container">
          <h2 className="display-4">Welcome to the Future of Online Exams</h2>
          <p className="lead">
            Take your exams from anywhere, anytime, with our secure and
            easy-to-use platform.
          </p>
          <a className="btn btn-primary btn-lg" onClick={handleShow}>
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Features</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Secure Exams</h3>
                  <p className="card-text">
                    Our platform ensures that your exams are safe and secure
                    with advanced encryption.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Real-Time Results</h3>
                  <p className="card-text">
                    Get instant feedback on your performance as soon as you
                    finish the test.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Flexible Scheduling</h3>
                  <p className="card-text">
                    Take exams at a time that fits your schedule, with our
                    flexible exam slots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ol className="text-left">
                <li>Create an account and log in.</li>
                <li>
                  Choose the exam you want to take from the available list.
                </li>
                <li>
                  Take the exam at your convenience, and get your results
                  instantly.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Contact Us</h2>
          <p>
            If you have any questions, feel free to reach out to us at{" "}
            <a href="mailto:support@onlineexamsystem.com">
              support@onlineexamsystem.com
            </a>
            .
          </p>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p>© 2024 Online Examination System. All rights reserved.</p>
      </footer>

      <LoginModal showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Homepage;
