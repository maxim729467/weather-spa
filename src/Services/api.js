import axios from "axios";
import * as actions from "Redux/actions";

export const API_KEY = "58996f08f5e79cad2d8f1ac865ae2c93";
export const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

export const getWeatherByLocation = () => (dispatch) => {
  const getGeo = ({ coords }) => {
    dispatch(actions.unsetBlockNotice());
    dispatch(actions.getWeatherDataRequest());
    axios
      .get(
        `${BASE_URL}lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        dispatch(actions.getWeatherDataByLocation(response.data));
      })
      .catch(() => {
        dispatch(actions.getWeatherDataError());
      });
  };

  const onErrorHandler = () => {
    dispatch(actions.setBlockNotice());
  };

  navigator.geolocation.getCurrentPosition(getGeo, onErrorHandler);
};

export const getWeatherByCityName = (city) => (dispatch) => {
  dispatch(actions.getWeatherDataRequest());
  axios
    .get(`${BASE_URL}q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      dispatch(actions.getWeatherDataSuccess(response.data));
    })
    .catch(() => {
      dispatch(actions.getWeatherDataError());
    });
};
