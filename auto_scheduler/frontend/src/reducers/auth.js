import { SIGNUP_FAIL, SIGNUP_SUCCESS } from "../actions";

const initialState = {
  isAuthenticated: false,
  signupError: null,
  signupSuccess: false,
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
    default:
      return state;
  }
};

export default reducer;
