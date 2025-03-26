<template>
    <ErrorPage>
      <p class="text-center text-grey-600 mt-4">
        Please reload the application or click here
        <button
          class="ml-2 px-3 py-1 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all duration-200"
          @click="reloadPage">
          Reload
        </button>
      </p>
    </ErrorPage>
  </template>

<script setup lang="ts">
import ErrorPage from "./ErrorPage.vue"

const reloadPage = () => {
    if (typeof window !== undefined) {
        window.location.reload()
    }
}
</script>