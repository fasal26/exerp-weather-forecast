import store from '@/store';
import { ref, onMounted } from 'vue';

/**
 * useLocation composable for handling user location,
 * fetching geolocation, and getting place name from coordinates.
 */
export function useLocation() {
  // Reactive state for latitude, longitude
  const selectedPlace = ref<{ lat: number; lng: number } | null>(null);

  /**
   * Fetches the user's current location using the Geolocation API.
   */
  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          selectedPlace.value = { lat, lng };
          // delay for ensuring the availability of google maps api
          setTimeout(() => {
            getPlaceName(lat, lng);
          }, 200);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  /**
   * Uses Google Maps Geocoder to convert latitude and longitude into a place name.
   * Updates `placeName` with the formatted address.
   */
  const getPlaceName = (lat: number, lng: number) => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API is not loaded.');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK' && results && results.length > 0) {
        store.commit('SET_CURRENT_ADDRESS', results[0].formatted_address)
      } else {
        console.error('Geocoder failed due to:', status);
      }
    });
  };

  /**
   * Updates `selectedPlace` when user selects a location manually.
   *
   * @param data - Object containing latitude and longitude of the selected place.
   */
  const placeChanged = (data: { lat: number; lng: number }, type: string = '' ) => {
    selectedPlace.value = { lat: data.lat, lng: data.lng };
    store.commit('SET_CURRENT_ADDRESS', '')
    if (type == 'marker') getPlaceName(data.lat,data.lng)
  };

  // Automatically fetch location when the component using this composable is mounted
  onMounted(getCurrentLocation);

  return { selectedPlace, getCurrentLocation, placeChanged };
}
