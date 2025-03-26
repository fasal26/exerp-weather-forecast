<template>
  <Loader v-if="isLoading" />
  <GlobalError v-if="hasError"/>
  <Toast v-if="getToast?.status">
    {{ getToast?.message }}
  </Toast>
  <router-view/>
</template>

<script setup lang="ts">
import { computed,ref } from "vue";
import { useStore } from "vuex";
import Loader from "@/shared/ui/Loader.vue";
import GlobalError from "@/shared/ui/GlobalError.vue";
import Toast from "@/shared/ui/Toast.vue";

const store = useStore();
const isLoading = computed(() => store.getters.isLoading);
const hasError = computed(() => store.getters.hasError);
const getToast = computed(() => store.getters.getToast);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 25px 25px;
}
</style>
