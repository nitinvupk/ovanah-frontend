import { takeEvery, call, put } from 'redux-saga/effects';
import {
	USER_LOCATION,
	USER_LOCATION_SUCCESS,
	WEATHER_LOCATION_DETAILS,
	WEATHER_LOCATION_DETAILS_SUCCESS,
	WOEID_LOCATION_SUCCESS,
	SEARCH_LOCATION,
	SEARCH_LOCATION_SUCCESS,
	SEARCH_LOCATION_DETAILS,
	SEARCH_LOCATION_DETAILS_SUCCESS
} from '../constants';

import api from '../apis/api';

export function* watchUserLocation() {
  yield takeEvery(USER_LOCATION, getUserLocation);
}

function* getUserLocation() {
  const payload = yield call(api.getIPInfo);
  yield put({ type:USER_LOCATION_SUCCESS, payload });
}

export function* watchWeatherLocation() {
  yield takeEvery(WEATHER_LOCATION_DETAILS, getWeatherLocation);
}

function* getWeatherLocation(param) {
	const payload = yield call(api.get,`location/search/?query=${param.payload}`);
	yield put({ type:WEATHER_LOCATION_DETAILS_SUCCESS, payload })
	const forecast = yield call(api.get,`location/${payload.length && payload[0].woeid}`);
  yield put({ type:WOEID_LOCATION_SUCCESS, forecast });
}

export function* watchSearchLocation() {
  yield takeEvery(SEARCH_LOCATION, getSearchLocation);
}

function* getSearchLocation(param) {
  const payload = yield call(api.get, `location/search/?query=${param.payload}`);
  yield put({ type:SEARCH_LOCATION_SUCCESS, payload });
}

export function* watchSearchLocationDetails() {
  yield takeEvery(SEARCH_LOCATION_DETAILS, getSearchLocationDetails);
}

function* getSearchLocationDetails(param) {
  const forecast = yield call(api.get, `location/${param.payload}`);
  yield put({ type:SEARCH_LOCATION_DETAILS_SUCCESS, forecast });
}
