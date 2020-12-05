import { Provider } from "react-redux";
import { Container, Grid } from '@material-ui/core';

import initializeStore from "./redux/store";

import LoginForm from "./components/LoginForm";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Grid container>
          <Grid item xs={12}>
            <LoginForm />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
