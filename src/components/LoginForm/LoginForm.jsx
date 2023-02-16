import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form onSubmit={login}>
      <Box
        sx={{
          mx: "auto",
          mt: 2,
          p: 2,
          borderRadius: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "primary.900" : "primary.50",
          color: (theme) =>
            theme.palette.mode === "dark" ? "#fff" : "primary.700",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        {errors.loginMessage && (
          <Typography variant="body1" color="error">
            {errors.loginMessage}
          </Typography>
        )}
        <TextField
          label="Username"
          variant="filled"
          margin="normal"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          margin="normal"
          required
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button variant="outlined" color="primary" type="submit">
          Log In
        </Button>
      </Box>
    </form>
  );
}

export default LoginForm;
