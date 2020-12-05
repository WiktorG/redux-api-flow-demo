import React from "react";
import { TextField, Button, Paper } from '@material-ui/core';

import { formContainerStyle, formTitleStyle, formStyle } from "./static";

const LoginForm = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <Paper style={formContainerStyle}>
      <h3 style={formTitleStyle}>Zaloguj się</h3>
      <form style={formStyle} onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="email"
          size="medium"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <TextField
          type="password"
          placeholder="password"
          size="medium"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
        >
          Zaloguj
        </Button>
      </form>
    </Paper>
  )
};

export default LoginForm;
