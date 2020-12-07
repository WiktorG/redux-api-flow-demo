import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "./actions";

// https://redux.js.org/tutorials/essentials/part-5-async-logic#loading-state-for-requests
const initialState = {
  status: 'idle',
  error: null,
  data: null
}

/* 
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | string;
  data: {
    name: string;
  } | null;
*/

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER_REQUEST: 
      return {
        status: 'pending',
        error: null,
        data: null,
      };
    case LOGIN_USER_SUCCESS: 
      return {
        status: 'succeeded',
        error: null,
        data: action.userData,
      };
    case LOGIN_USER_ERROR: 
      return {
        status: 'failed',
        error: action.error,
        data: null,
      };
    default: 
      return initialState;
  };
};

export default userReducer;
