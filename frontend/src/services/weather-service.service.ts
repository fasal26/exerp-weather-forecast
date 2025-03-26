import * as backendApi from "../shared/backend-api";

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
export default class WeatherService {

  getWeatherForecast(lat: number, lng: number): Promise<ForecastModel> {
    return backendApi.get("weather/forecast", { lat, lng });
  }
}
