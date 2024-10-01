import React from "react";
import { Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";

const Dashboard = () => {
  if (sessionStorage.getItem("login") == "false") {
    return <Navigate to="/" />;
  }

  let role = sessionStorage.getItem("role");
  return <div>{role == "admin" ? <AdminDashboard /> : null}</div>;
};

export default Dashboard;
