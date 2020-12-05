import { Container, Grid } from '@material-ui/core';

import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={12}>
          <LoginForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
