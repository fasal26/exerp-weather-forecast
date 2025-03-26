import WeatherService from "@/services/weather-service.service";
import { ErrorModel } from "@/shared/backend-api";
import { Options, Vue } from "vue-class-component";
import { Inject, Watch } from "vue-property-decorator";

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

@Options({
  props: {
    selectedPlace: Object as () => { lat: number; lng: number },
  },
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  selectedPlace!: { lat: number; lng: number };

  error: ErrorModel | null = null;
  forecastData: ForecastModel | null = null;

  @Watch('selectedPlace', { deep: true, immediate: true })
  async onSelectedPlaceChanged() {
    if (this.selectedPlace && this.selectedPlace.lat && this.selectedPlace.lng) {
        this.weatherService.getWeatherForecast(this.selectedPlace.lat, this.selectedPlace.lng).then((res) => {
          this.forecastData = res
        }).catch((err: ErrorModel) => {
          this.error = err
        })
    }
  }
}
