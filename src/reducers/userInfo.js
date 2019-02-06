import {
  USER_LOCATION_SUCCESS,
  WEATHER_LOCATION_DETAILS_SUCCESS,
  WOEID_LOCATION_SUCCESS,
  SEARCH_LOCATION_SUCCESS,
  SEARCH_LOCATION_DETAILS_SUCCESS
} from "../constants";

const initialState = {
  userLocation: [],
  locationDetail: null,
  woeidLocation: [],
  searchLocation: [],
  isLoading: true
};

const userLocationReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOCATION_SUCCESS:
      return {
        ...state,
        userLocation: action.payload
      };
    case WEATHER_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        locationDetail: action.payload
      };
    case WOEID_LOCATION_SUCCESS:
      return {
        ...state,
        woeidLocation: action.forecast,
        isLoading: false
      };
    case SEARCH_LOCATION_SUCCESS:
      return {
        ...state,
        searchLocation: action.payload
      };
    case SEARCH_LOCATION_DETAILS_SUCCESS:
      return {
        ...state,
        woeidLocation: action.forecast
      };
    default:
      return state;
  }
};

export default userLocationReducer;
