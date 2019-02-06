import { all } from 'redux-saga/effects';
import { watchUserLogin } from './user';
import { watchUserLocation, watchWeatherLocation, watchSearchLocation, watchSearchLocationDetails } from './userInfo';

function* rootSaga() {
  yield all([
    watchUserLogin(),
    watchUserLocation(),
    watchWeatherLocation(),
    watchSearchLocation(),
    watchSearchLocationDetails()
  ])
}

export default rootSaga
