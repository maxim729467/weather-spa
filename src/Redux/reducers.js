import * as actions from "./actions";
import { createReducer, combineReducers } from "@reduxjs/toolkit";

const weatherDataReducer = createReducer([], {
  [actions.getWeatherDataSuccess]: (state, { payload }) => [payload, ...state],
});

const widgetReducer = createReducer(
  {},
  {
    [actions.getWeatherDataByLocation]: (_, { payload }) => payload,
  }
);

const loadingReducer = createReducer(false, {
  [actions.getWeatherDataRequest]: () => true,
  [actions.getWeatherDataSuccess]: () => false,
  [actions.getWeatherDataError]: () => false,
  [actions.getWeatherDataByLocation]: () => false,
});

const errorReducer = createReducer(false, {
  [actions.getWeatherDataRequest]: () => false,
  [actions.getWeatherDataError]: () => true,
});

const savedLocationReducer = createReducer([], {
  [actions.addLocation]: (state, { payload }) => {
    const cityList = [payload, ...state];
    localStorage.setItem("cityList", JSON.stringify(cityList));

    return [payload, ...state];
  },
  [actions.removeLocation]: (_, { payload }) => {
    const cityList = [...payload];
    localStorage.setItem("cityList", JSON.stringify(cityList));
    return [...payload];
  },
  [actions.addLocationsFromLocalStorage]: (_, { payload }) => [...payload],
});

const locationBlockReducer = createReducer(false, {
  [actions.setBlockNotice]: () => true,
  [actions.unsetBlockNotice]: () => false,
});

export const reducer = combineReducers({
  cities: weatherDataReducer,
  isLoading: loadingReducer,
  error: errorReducer,
  widget: widgetReducer,
  savedLocations: savedLocationReducer,
  locationBlock: locationBlockReducer,
});
