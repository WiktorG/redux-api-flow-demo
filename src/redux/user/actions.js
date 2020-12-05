export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";


export const loginUser = (userPayload) => ({
  type: LOGIN_USER_REQUEST,
  userPayload, 
});
