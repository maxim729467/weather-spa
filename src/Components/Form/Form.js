import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledForm, Input, Button } from "./Form.styles";
import * as actions from "Redux/actions";
import axios from "axios";
import { API_KEY, BASE_URL } from "Services/api";
import { MdAddLocation } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onInputChange = (e) => {
    setCityName(e.target.value);
  };
  const onCitySubmit = async (e) => {
    e.preventDefault();

    const validCityName = cityName.trim();

    if (state.savedLocations.includes(validCityName)) {
      toast.warn(`This location is already on the list.`, {
        toastId: "someID",
      });
      setCityName("");
      return;
    }

    dispatch(actions.getWeatherDataRequest);

    axios
      .get(`${BASE_URL}q=${validCityName}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        if (response.status === 404) {
          toast.warn(`Requested location is not found in our database.`, {
            toastId: "anotherID",
          });
          setCityName("");
          return;
        }
        dispatch(actions.addLocation(response.data.name));
        dispatch(actions.getWeatherDataSuccess(response.data));
        setCityName("");
      })
      .catch((err) => {
        toast.warn(
          `Unfortunately, we couldn't find anything upon your request.`,
          {
            toastId: "additionalID",
          }
        );
        setCityName("");
      });
  };

  return (
    <StyledForm onSubmit={onCitySubmit}>
      <ToastContainer />
      <Input
        onChange={onInputChange}
        type="text"
        name="city"
        value={cityName}
        placeholder="Search for city"
        autoComplete="off"
      />
      <Button type="submit">
        <MdAddLocation />
        Add
      </Button>
    </StyledForm>
  );
}
