import { createAction } from "@reduxjs/toolkit";

export const getWeatherDataRequest = createAction("weather/loading");
export const getWeatherDataSuccess = createAction("weather/getData");
export const getWeatherDataError = createAction("weather/setError");
export const getWeatherDataByLocation = createAction("weather/getLocalData");
export const addLocation = createAction("weather/addCity");
export const removeLocation = createAction("weather/removeCity");
export const addLocationsFromLocalStorage = createAction(
  "weather/addFromStorage"
);
