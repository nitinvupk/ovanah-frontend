import { LOGIN_USER,
         LOGIN_SUCCESS,
         USER_LOCATION,
         USER_LOCATION_SUCCESS,
         WEATHER_LOCATION_DETAILS,
         WEATHER_LOCATION_DETAILS_SUCCESS,
         WOEID_LOCATION,
         WOEID_LOCATION_SUCCESS,
         SEARCH_LOCATION,
         SEARCH_LOCATION_SUCCESS,
         SEARCH_LOCATION_DETAILS,
         SEARCH_LOCATION_DETAILS_SUCCESS
          } from '../constants';

export const LoginUser = payload => ({ type:LOGIN_USER, payload });

export const LoginSuccess = payload => ({ type:LOGIN_SUCCESS, payload });

export const getUserLocation = () => ({ type: USER_LOCATION });

export const listUserLocation = (payload) => ({ type: USER_LOCATION_SUCCESS, payload });

export const getWeatherLocation = (payload) => ({ type: WEATHER_LOCATION_DETAILS, payload });

export const listWeatherLocation = (payload) => ({ type: WEATHER_LOCATION_DETAILS_SUCCESS, payload });

export const getWoeidLocation = (payload) => ({ type: WOEID_LOCATION, payload });

export const listWoeidLocation = (payload) => ({ type: WOEID_LOCATION_SUCCESS, payload });

export const getSearchLocation = (payload) => ({ type: SEARCH_LOCATION, payload });

export const listSearchLocation = (payload) => ({ type: SEARCH_LOCATION_SUCCESS, payload });

export const getSearchLocationDetails = (payload) => ({ type: SEARCH_LOCATION_DETAILS, payload });

export const listSearchLocationDetails = (payload) => ({ type: SEARCH_LOCATION_DETAILS_SUCCESS, payload });
