import { Options, Vue } from "vue-class-component";
import CloseIcon from "@/shared/icons/CloseIcon.vue";
import SearchIcon from "@/shared/icons/SearchIcon.vue";
import CurrentLocationBtn from "@/shared/ui/CurrentLocationBtn.vue";
import { Ref, Watch } from "vue-property-decorator";
import { ComponentPublicInstance } from "vue";
import { mapGetters } from "vuex";

@Options({
  props: {},
  components: {
    SearchIcon,
    CloseIcon,
    CurrentLocationBtn
  },
  computed: {
    ...mapGetters({
      currentLoc: "currentLoc",
    }),
  },
})
export default class SearchCity extends Vue {
  @Ref("autocomplete") autocomplete!: ComponentPublicInstance;

  // watcher to update the input location to the user current location
  @Watch("currentLoc")
  onCurrentLocChange(newVal: string) {
    if (this.autocomplete && newVal) {
      this.autocomplete.$el.value = newVal;
    }
  }

  placeChanged(place: google.maps.places.PlaceResult) {
    if (!place || !place.geometry || !place.geometry.location) return;
    
    this.$emit("placeChanged", {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  }

  clearInput() {
    if (this.autocomplete) {
      const inputEl = this.autocomplete.$el
      inputEl.value = "";
      inputEl.focus();
    }
  }
}
