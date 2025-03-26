<template>
  <div>
    <header>
      <h1 class="text-3xl font-bold text-center mb-4">
        Weather Forecast App
      </h1>
      <h5 class="w-full text-lg text-gray-600 text-center">
        Enter a city name or select a location on the map to get the latest weather updates.
      </h5>
    </header>
    <SearchCity @placeChanged="placeChanged" @currentLocation="getCurrentLocation" class="w-full mt-6 text-center mx-auto md:flex md:justify-center"/>
    <div class="flex flex-col lg:flex-row gap-4 md:gap-8 mt-10" v-if="selectedPlace">
      <GoogleMap :selectedPlace="selectedPlace" @placeChanged="placeChanged" />
      <WeatherForecast :selectedPlace="selectedPlace" class="w-full md:w-[40%] md:mx-auto"/>
    </div>
  </div>
</template>

<script lang="ts" src="./home.component.ts"></script>
