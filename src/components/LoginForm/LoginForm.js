import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Paper } from "@material-ui/core";

import { loginUser } from "../../redux/user/actions";
import { userSelector } from "../../redux/user/selectors";

import { formContainerStyle, formTitleStyle, formStyle } from "./static";

const LoginForm = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const { status, error, data: user } = useSelector(userSelector);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userPayload = {
      login,
      password,
    };

    dispatch(loginUser(userPayload));
  };

  if (status === "succeeded") {
    return <h3>Witam {user.name}</h3>;
  }

  return (
    <Paper style={formContainerStyle}>
      <h3 style={formTitleStyle}>
        {status === "pending" ? "Logowanie.." : "Zaloguj się"}
      </h3>
      {error && <h4>{error}</h4>}
      <form style={formStyle} onSubmit={handleSubmit}>
        <TextField
          type="text"
          placeholder="email"
          size="medium"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          disabled={status === "pending"}
        />
        <TextField
          type="password"
          placeholder="password"
          size="medium"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={status === "pending"}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={status === "pending"}
        >
          Zaloguj
        </Button>
      </form>
    </Paper>
  );
};

export default LoginForm;
