import { takeLatest, put, call } from "redux-saga/effects";

import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  ACTIVATE,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  AUTHENTICATE,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
} from "../actions";
import {
  fetchLogin,
  fetchSignup,
  fetchActivate,
  fetchLoadUser,
  fetchAuthenticate,
} from "./api";

function* signupAsync({ payload }) {
  const { email, first_name, last_name, password, re_password } = payload;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    first_name,
    last_name,
    password,
    re_password,
  });

  try {
    const res = yield call(() => fetchSignup(body, config));

    yield put({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    yield put({
      type: SIGNUP_FAIL,
      payload: err,
    });
  }
}

function* loginAsync({ payload }) {
  const { email, password } = payload;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = yield call(() => fetchLogin(body, config));
    yield put({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    yield loadUser();
  } catch (err) {
    yield put({
      type: LOGIN_FAIL,
      payload: err,
    });
  }
}

function* loadUser() {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = yield call(() => fetchLoadUser(config));

      yield put({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      yield put({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    yield put({
      type: USER_LOADED_FAIL,
    });
  }
}

function* activate({ payload }) {
  const { uid, token } = payload;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    yield call(() => fetchActivate(body, config));

    yield put({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: ACTIVATION_FAIL,
    });
  }
}

function* logout() {
  yield put({
    type: LOGOUT_SUCCESS,
  });
}

function* checkAuthenticated() {
  console.log("hi");
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });

    try {
      const res = yield call(() => fetchAuthenticate(body, config));
      // console.log("code: ", res.data)

      if (res.data.code !== "token_not_valid") {
        yield put({
          type: AUTHENTICATED_SUCCESS,
        });

        yield loadUser();
      } else {
        yield put({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      console.log("err: ", err);
      yield put({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    yield put({
      type: AUTHENTICATED_FAIL,
    });
  }
}

export default function* watchActions() {
  yield takeLatest(LOGIN, loginAsync);
  yield takeLatest(SIGNUP, signupAsync);
  yield takeLatest(ACTIVATE, activate);
  yield takeLatest(LOGOUT, logout);
  yield takeLatest(AUTHENTICATE, checkAuthenticated);
}
