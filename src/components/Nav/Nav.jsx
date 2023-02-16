import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const NavButton = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6" component="div">
              Auth Shelf
            </Typography>
          </Link>
        </Box>
        <Box sx={{ display: "flex" }}>
          {/* If no user is logged in, show these links */}
          {user.id === null && (
            // If there's no user, show login/registration links
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavButton variant="outlined" color="inherit">
                Login / Register
              </NavButton>
            </Link>
          )}

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link
                to="/shelf"
                style={{ textDecoration: "none", color: "white" }}
              >
                <NavButton color="inherit">The Shelf</NavButton>
              </Link>
              <LogOutButton />
            </>
          )}

          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            <NavButton color="inherit">About</NavButton>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
