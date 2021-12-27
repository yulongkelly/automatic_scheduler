import {SIGNUP_SUCCESS} from '../actions'

const initialState = {
    isAuthenticated: null,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
      case SIGNUP_SUCCESS:
          return {
              ...state,
              isAuthenticated: false,
          }
        default:
            return state
  }
};

export default reducer;
