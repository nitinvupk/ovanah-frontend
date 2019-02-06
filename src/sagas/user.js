import { takeEvery, call, put } from 'redux-saga/effects';
import {
         LOGIN_USER,
         LOGIN_SUCCESS,
          } from '../constants';
import history from '../history';
import api from '../apis/api';

export function* watchUserLogin() {
  yield takeEvery(LOGIN_USER, loginUser);
}

function* loginUser(data) {
  try{
    const payload = yield call(api.create,"/api/user/login", data.payload);
    if(payload.auth){
      window.localStorage.setItem('token',payload.token);
      yield call(history.push, '/user');
    }
    yield put({ type:LOGIN_SUCCESS, payload });
  }
  catch(err){
    console.log(err);
  }
}
