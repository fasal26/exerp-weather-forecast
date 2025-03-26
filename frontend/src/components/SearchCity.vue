<template>
  <div>
    <div class="relative md:w-1/2 lg:w-2/5 flex gap-[5px]">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon />
      </div>

      <GMapAutocomplete ref="autocomplete"
        class="block w-full px-4 py-2 pl-10 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
        placeholder="Search for a location..." @place_changed="placeChanged" />

      <div class="absolute inset-y-0 right-0 flex items-center pr-[65px]">
        <button type="button" class="focus:outline-none" @click="clearInput">
          <CloseIcon />
        </button>
      </div>

      <CurrentLocationBtn @click="$emit('currentLocation')" />
    </div>
  </div>
</template>

<script lang="ts" src="./search-city.component.ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.pac-logo:after {
  display: none;
}

.hdpi.pac-logo:after {
  background-image: none;
}

.pac-item {
  cursor: default;
  padding: 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}
</style>
