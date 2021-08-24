import WidgetView from "Components/WidgetView";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { List } from "./LocationsList.styles";
import { addLocationsFromLocalStorage } from "Redux/actions";
import { getLoader } from "Redux/selectors";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const spinnerStyles = {
  position: "absolute",
  top: "60px",
  left: "90px",
};

export default function LocationsList() {
  const state = useSelector((state) => state);
  const listOfLocations = state.savedLocations;
  const isLoading = getLoader(state);
  const dispatch = useDispatch();

  useEffect(() => {
    const cachedList = localStorage.getItem("cityList");
    const parsedList = JSON.parse(cachedList);

    if (parsedList) {
      dispatch(addLocationsFromLocalStorage(parsedList));
    }
  }, []);

  return (
    <List>
      {listOfLocations.length !== 0 ? (
        listOfLocations.map((location) => {
          return (
            <WidgetView
              key={location}
              cityName={location}
              list={listOfLocations}
            />
          );
        })
      ) : (
        <p>No saved locations</p>
      )}

      {isLoading && (
        <div style={spinnerStyles}>
          <Loader type="Rings" color="#6f8ae3" height={200} width={200} />
        </div>
      )}
    </List>
  );
}
