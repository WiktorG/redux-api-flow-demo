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
  default User if set
  
  status: 'idle' | 'pending' | 'succeeded' | 'failed',
  error: null | string;
  name: string;
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
        data: action.userData,
      };
    case LOGIN_USER_ERROR: 
      return {
        status: 'failed',
        error: action.error,
      };
    default: 
      return initialState;
  };
};

export default userReducer;
