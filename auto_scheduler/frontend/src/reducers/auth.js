import {
  ACTIVATION_FAIL,
  ACTIVATION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  USER_LOADED_FAIL,
  USER_LOADED_SUCCESS,
} from "../actions";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: false,
  signupError: null,
  signupSuccess: false,
  loginError: null,
  user: null,
  verify: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        signupError: null,
        signupSuccess: true,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        signupError: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginError: payload,
        user: null,
      };
    case USER_LOADED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loginError: null,
        user: payload,
      };
    case USER_LOADED_FAIL:
      return {
        ...state,
        loginError: payload,
        user: null,
      };
    case ACTIVATION_SUCCESS:
      return {
        ...state,
        verify: true,
      };
    case ACTIVATION_FAIL:
      return {
        ...state,
        verify: false,
      };
    case LOGOUT:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
