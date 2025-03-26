<template>
  <GMapMap
    class="border border-gray-300"
    :center="selectedPlace"
    :zoom="12"
    map-type-id="roadmap"
    ref="gmap"
    @click="addMarker"
    :options="{
      draggableCursor: 'default',
      draggingCursor: 'grab',
    }"
  >
    <GMapMarker v-if="selectedPlace" :position="selectedPlace" />
  </GMapMap>
</template>

<script lang="ts" src="./google-map.component.ts"></script>

<style scoped>
.vue-map-container {
  overflow: hidden;
  border-radius: 15px;
  height: 418px;
  width: 100%;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
