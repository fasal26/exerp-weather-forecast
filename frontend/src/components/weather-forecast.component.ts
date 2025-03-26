import WeatherService from "@/services/weather-service.service";
import { ErrorModel } from "@/shared/backend-api";
import { Options, Vue } from "vue-class-component";
import { Inject, Watch } from "vue-property-decorator";
import { formatTime } from "@/util/datefns";
import { weatherCodes } from "@/util/weather-codes";
import WeatherForecastSkeleton from "@/components/WeatherForecastSkeleton.vue";
import ClockIcon from "@/shared/icons/ClockIcon.vue";
import WindIcon from "@/shared/icons/WindIcon.vue";
import DirectionIcon from "@/shared/icons/DirectionIcon.vue";
import ErrorPage from "@/shared/ui/ErrorPage.vue";
import store from "@/store";

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
  components: {
    WeatherForecastSkeleton,
    ErrorPage,
    ClockIcon,
    WindIcon,
    DirectionIcon,
  },
})
export default class WeatherForecast extends Vue {
  @Inject("weatherService")
  public weatherService!: WeatherService;

  selectedPlace!: { lat: number; lng: number };

  error: ErrorModel | null = null;
  forecastData: ForecastModel | null = null;
  formatTime = formatTime;
  weatherCodes = weatherCodes;

  @Watch("selectedPlace", { deep: true, immediate: true })
  async onSelectedPlaceChanged() {
    if (
      this.selectedPlace &&
      this.selectedPlace.lat &&
      this.selectedPlace.lng
    ) {
      store.commit("SET_LOADER", true);
      this.weatherService
        .getWeatherForecast(this.selectedPlace.lat, this.selectedPlace.lng)
        .then((res) => {
          this.forecastData = res;
        })
        .catch((err: ErrorModel) => {
          this.error = err;
        })
        .finally(() => {
          store.commit("SET_LOADER", false);
        });
    }
  }
}
