//Main Widget

export const getInfoForWidget = (state) => {
  const { weather, main, sys, name, wind, visibility } = state.widget;

  if (!weather) {
    return;
  }

  const location = name;
  const image = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const description = weather[0].description;
  const temperature = main.temp;
  const humidity = main.humidity;
  const feelsLike = main.feels_like;
  const sunrise = convertTime(sys.sunrise);
  const sunset = convertTime(sys.sunset);
  const windSpeed = wind.speed;
  const calculatedVisibility = Math.round(visibility / 1000);

  function convertTime(time) {
    const milliseconds = time * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return humanDateFormat;
  }

  return {
    location,
    image,
    description,
    temperature,
    humidity,
    sunrise,
    sunset,
    windSpeed,
    feelsLike,
    calculatedVisibility,
  };
};

// Widget by city

export const getInfoForWidgetByLocation = (state, name) => {
  const data = state.cities.find(
    (city) => city.name.toLowerCase() === name.toLowerCase()
  );
  if (!data) {
    return;
  }

  const { weather, main, sys, cityName } = data;

  const location = cityName;
  const image = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const description = weather[0].description;
  const temperature = main.temp;
  const humidity = main.humidity;
  const sunrise = convertTime(sys.sunrise);
  const sunset = convertTime(sys.sunset);

  function convertTime(time) {
    const milliseconds = time * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
    return humanDateFormat;
  }

  return {
    location,
    image,
    description,
    temperature,
    humidity,
    sunrise,
    sunset,
  };
};

export const getError = (state) => state.error;
export const getLoader = (state) => state.isLoading;
export const getBlockNotice = (state) => state.locationBlock;
