import axios from "axios";

export interface ForecastModel {
  latitude: number;
  longitude: number;
  elevation: number;
  current_weather: {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    time: Date;
  };
  current_weather_units: {
    time: string;
    temperature: string;
    windspeed: string;
    winddirection: string;
    weathercode: string;
  };
}

export async function getWeatherForecast(
  lat: number,
  lng: number
): Promise<ForecastModel> {
  const API_URL = "https://api.open-meteo.com/v1/forecast";
  const params = {
    latitude: lat,
    longitude: lng,
    current_weather: true,
  };

  const response = await axios.get(API_URL, { params });

  return {
    latitude: response.data.latitude,
    longitude: response.data.longitude,
    elevation: response.data.elevation,
    current_weather: {
      temperature: response.data.current_weather.temperature,
      windspeed: response.data.current_weather.windspeed,
      winddirection: response.data.current_weather.winddirection,
      weathercode: response.data.current_weather.weathercode,
      time: response.data.current_weather.time,
    },
    current_weather_units: {
        temperature: response.data.current_weather_units.temperature,
        windspeed: response.data.current_weather_units.windspeed,
        winddirection: response.data.current_weather_units.winddirection,
        weathercode: response.data.current_weather_units.weathercode,
        time: response.data.current_weather_units.time,
    }
  };
}
