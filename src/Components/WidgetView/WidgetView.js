import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, City, Button } from "./WidgetView.styles";
import * as actions from "Redux/actions";
import Widget from "Components/Widget";
import { FaLocationArrow } from "react-icons/fa";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { getError } from "Redux/selectors";
import { RiSignalWifiErrorLine } from "react-icons/ri";

export default function WidgetView({ cityName, list }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const error = getError(state);

  const toggleForecastTab = () => {
    setIsExpanded((state) => !state);
  };

  const onRemoveLocation = (city) => {
    const filteredList = list.filter((location) => location !== city);
    dispatch(actions.removeLocation(filteredList));
  };

  return (
    <Section>
      <FaLocationArrow />
      <City>{cityName}</City>
      {isExpanded && <Widget city={cityName} />}

      {isExpanded ? (
        <Button type="button" onClick={() => toggleForecastTab()}>
          <BiHide />
          Hide tab
        </Button>
      ) : (
        <Button type="button" onClick={() => toggleForecastTab()}>
          <BiShowAlt />
          Show forecast
        </Button>
      )}

      <Button type="button" onClick={() => onRemoveLocation(cityName)}>
        <TiDelete />
        Remove
      </Button>
      {error && (
        <RiSignalWifiErrorLine
          style={{
            position: "absolute",
            width: "50px",
            height: "50px",
            color: "red",
            bottom: "15px",
          }}
        />
      )}
    </Section>
  );
}
