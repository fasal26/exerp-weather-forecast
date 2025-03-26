import { Options, Vue } from 'vue-class-component';
import SearchCity from '@/components/SearchCity.vue';
import WeatherForecast from '@/components/WeatherForecast.vue';
import GoogleMap from '@/components/GoogleMap.vue';
import { useLocation } from '@/composables/useLocation';

@Options({
  components: {
    SearchCity,
    WeatherForecast,
    GoogleMap
  },
})
export default class HomeView extends Vue {
  private readonly location = useLocation();
  get selectedPlace() {
    return this.location.selectedPlace;
  }
  get placeChanged() {
    return this.location.placeChanged;
  }
  get getCurrentLocation() {
    return this.location.getCurrentLocation;
  }
}