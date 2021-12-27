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

  let res;

  try {
    res = yield call(() => fetchSignup(body, config));

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

export default function* watchActions() {
  // yield takeEvery(LOGIN, loginAsync);
  yield takeLatest(SIGNUP, signupAsync);
}
