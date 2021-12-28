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
} from "../actions";
import { fetchLogin, fetchSignup, fetchActivate, fetchLoadUser } from "./api";

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
    console.log(localStorage.getItem("access"));
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    console.log(config)

    try {
      const res = yield call(() => fetchLoadUser(config));
      console.log("res: ", res);

      yield put({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log("error: ", err);
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
    console.log(err);
    yield put({
      type: ACTIVATION_FAIL,
    });
  }
}

function* logout() {
  yield put({
    type: LOGOUT
});
}

export default function* watchActions() {
  yield takeLatest(LOGIN, loginAsync);
  yield takeLatest(SIGNUP, signupAsync);
  yield takeLatest(ACTIVATE, activate);
  yield takeLatest(LOGOUT, logout)
}
