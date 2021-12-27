import { takeLatest, put, call } from "redux-saga/effects";

import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN } from "../actions";
import { fetchSignup } from "./api";

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
    console.log("hey")
    const res = yield call(() => fetchSignup(body, config));
    console.log(res.data)
    yield put({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SIGNUP_FAIL,
    });
  }
}

export default function* watchActions() {
  // yield takeEvery(LOGIN, loginAsync);
  yield takeLatest(SIGNUP, signupAsync);
}
