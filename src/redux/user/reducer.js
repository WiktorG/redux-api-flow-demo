import { 
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR
} from "./actions";

const initialState = {
  isPending: false,
  isLoggedIn: false,
  error: null,
  data: null
}

/* 
  default User if set
  
  isPending: boolean;
  error: null | string;
  name: string;
*/

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_USER_REQUEST: 
      return {
        isPending: true,
        isLoggedIn: false,
        error: null,
        data: null,
      };
    case LOGIN_USER_SUCCESS: 
      return {
        isPending: false,
        isLoggedIn: true,
        error: null,
        data: action.userData,
      };
    case LOGIN_USER_ERROR: 
      return {
        isPending: false,
        isLoggedIn: false,
        error: action.error,
        data: null,
      };
    default: 
      return initialState;
  };
};

export default userReducer;
