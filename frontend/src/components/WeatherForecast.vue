<template>
  <WeatherForecastSkeleton v-if="!forecastData && !error" />
  <div class="h-inherit bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-300" v-else>
    <ErrorPage v-if="error">
      <p>Please try again</p>
    </ErrorPage>
    <template v-else>
      <div class="mb-4">
        <h2 class="text-2xl font-bold text-center">Current Weather</h2>
      </div>
      <div class="flex flex-col items-center">
        <h2 class="text-5xl font-bold mb-2">{{ forecastData?.current_weather?.temperature }}{{
          forecastData?.current_weather_units?.temperature }}</h2>
        <p class="text-lg text-gray-500 dark:text-gray-400 mb-4"
          v-if="forecastData?.current_weather?.weathercode != null">{{
            weatherCodes[forecastData.current_weather.weathercode] }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Elevation:
          {{ forecastData?.current_weather?.temperature }}m</p>

        <div class="w-full space-y-4">
          <div class="flex items-center p-3 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <WindIcon/>
            <span class="text-sm">Wind Speed</span>
            <span class="ml-auto font-medium">{{ forecastData?.current_weather?.windspeed }} {{
              forecastData?.current_weather_units?.windspeed }}</span>
          </div>

          <div class="flex items-center p-3 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <div class="relative h-5 w-5 mr-3 text-blue-500">
              <DirectionIcon/>
            </div>
            <span class="text-sm">Wind Direction</span>
            <span class="ml-auto font-medium">{{ forecastData?.current_weather?.winddirection }}{{
              forecastData?.current_weather_units?.winddirection }}</span>
          </div>

          <div class="flex items-center p-3 bg-blue-50 dark:bg-gray-800 rounded-lg">
            <ClockIcon/>
            <span class="text-sm">Observation Time</span>
            <span class="ml-auto font-medium">{{ formatTime(forecastData?.current_weather?.time) }}</span>
          </div>
        </div>
      </div>
    </template>
  </div>

</template>

<script lang="ts" src="./weather-forecast.component.ts"></script>