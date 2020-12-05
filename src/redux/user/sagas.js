import { takeLatest, delay, put } from "redux-saga/effects"

import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions";

function* loginUser({ userPayload }) {
  const [response, error] = [{ name: "Wiktor" }, "Błędny login lub hasło"]; // fake api call
  yield delay(3000);

  if (userPayload.login === "error") { 
    // inside this if we could handle all error side effects
    yield put({ type: LOGIN_USER_ERROR, error, }); 
    return
  }

  // here we could handle all success side effects
  yield put({ type: LOGIN_USER_SUCCESS, userData: response }); 
};

export const userSagas = [
  takeLatest(LOGIN_USER_REQUEST, loginUser)
];