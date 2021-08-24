import React, { useEffect } from "react";
import {
  WiThermometerExterior,
  WiSunrise,
  WiSunset,
  WiHumidity,
} from "react-icons/wi";

import { City, Description, Icon, Temperature, Info } from "./Widget.styles";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherByCityName } from "Services/api";
import { getInfoForWidgetByLocation } from "Redux/selectors";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Widget({ city }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const widgetData = getInfoForWidgetByLocation(state, city);

  useEffect(() => {
    const data = state.cities.find(
      (el) => el.name.toLowerCase() === city.toLowerCase()
    );

    if (data) {
      return;
    }

    dispatch(getWeatherByCityName(city));
  }, []);

  return (
    <>
      {widgetData && (
        <>
          <City>{widgetData.location}</City>
          <Temperature>
            <WiThermometerExterior />
            {widgetData.temperature}°C
          </Temperature>
          <Icon src={widgetData.image} />
          <Description>{widgetData.description}</Description>
          <Info>
            <WiHumidity />
            Humidity: {widgetData.humidity}%
          </Info>
          <Info>
            <WiSunrise />
            Sunrise: {widgetData.sunrise}
          </Info>
          <Info>
            <WiSunset />
            Sunset: {widgetData.sunset}
          </Info>
        </>
      )}
    </>
  );
}
