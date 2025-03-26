<template>
  <div class="home">
    <SearchCity @placeChanged="placeChanged" />
    <WeatherForecast :selectedPlace="selectedPlace" />
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
