import { reducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  isLoading: false,
  error: null,
  widget: {},
  savedLocations: [],
  locationBlock: false,
};

export default configureStore({
  reducer,
  initialState,
  devTools: process.env.NODE_ENV !== "production",
});
