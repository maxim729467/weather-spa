import React, { useEffect } from "react";
import {
  WiStrongWind,
  WiThermometerExterior,
  WiSunrise,
  WiSunset,
  WiHumidity,
} from "react-icons/wi";
import { BiCookie } from "react-icons/bi";
import { FiWifiOff } from "react-icons/fi";
import { FaBinoculars } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  Section,
  City,
  Icon,
  Temperature,
  Info,
  Description,
  LeftBlock,
  RightBlock,
  BlockNotice,
} from "./DefaultWidget.styles";
import { getWeatherByLocation } from "Services/api";
import {
  getInfoForWidget,
  getLoader,
  getError,
  getBlockNotice,
} from "Redux/selectors";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const spinnerStyles = {
  position: "absolute",
  bottom: "50px",
  left: "50px",
};

export default function Widget() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const error = getError(state);

  useEffect(() => {
    dispatch(getWeatherByLocation());
  }, [dispatch]);

  const widget = getInfoForWidget(state);
  const isLoading = getLoader(state);
  const block = getBlockNotice(state);

  return (
    <Section>
      {widget && (
        <>
          <LeftBlock>
            <City>
              <MdLocationOn />
              {widget.location}
            </City>
            <Temperature>
              <WiThermometerExterior />
              {widget.temperature}°C
            </Temperature>
            <Info>Feels like: {widget.feelsLike}°C</Info>
            <Description>{widget.description}</Description>
            <Icon src={widget.image} width="100px" height="auto" />
          </LeftBlock>
          <RightBlock>
            <Info>
              <WiStrongWind />
              Wind speed: {widget.windSpeed} km/h
            </Info>
            <Info>
              <WiHumidity />
              Humidity: {widget.humidity}%
            </Info>
            <Info>
              <FaBinoculars />
              Visibility: {widget.calculatedVisibility} km
            </Info>
            <Info>
              <WiSunrise />
              Sunrise: {widget.sunrise}
            </Info>
            <Info>
              <WiSunset />
              Sunset: {widget.sunset}
            </Info>
          </RightBlock>
        </>
      )}
      {isLoading && (
        <div style={spinnerStyles}>
          <Loader type="Rings" color="#181c19" height={150} width={150} />
        </div>
      )}
      {error && (
        <FiWifiOff
          style={{
            width: "100px",
            height: "100px",
          }}
        />
      )}
      {block && (
        <>
          <BiCookie style={{ height: "40px", width: "40px" }} />
          <BlockNotice>
            Allow your location in the settings to see the forecast for your
            current position
          </BlockNotice>
        </>
      )}
    </Section>
  );
}
