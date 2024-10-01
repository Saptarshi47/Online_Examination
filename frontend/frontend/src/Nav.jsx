import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {useNavigate} from 'react-router-dom'

const Nav = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header className="bg-primary text-white text-center py-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Typography
              variant="overline"
              fontWeight={"bold"}
              fontSize={"14px"}
              onClick={()=>{navigate('/dashboard')}}
            >
              Online Examination System
            </Typography>
            <Stack>
              <Button
                variant="text"
                color=""
                endIcon={<LogoutIcon />}
                onClick={() => {
                  sessionStorage.setItem("login", false);
                  sessionStorage.setItem("role", '');
                  window.location.reload();
                }}
              >
                Logout
              </Button>
            </Stack>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
