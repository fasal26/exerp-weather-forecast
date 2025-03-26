import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    selectedPlace: Object as () => { lat: number; lng: number },
  },
})
export default class GoogleMap extends Vue {
  selectedPlace!: { lat: number; lng: number };
  addMarker(event: google.maps.MapMouseEvent) {
    if (!event?.latLng) return;

    this.$emit("placeChanged", {
      lat: event?.latLng.lat(),
      lng: event?.latLng.lng(),
    }, 'marker');
  }
}
