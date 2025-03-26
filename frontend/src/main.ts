import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import WeatherService from './services/weather-service.service';
import { setupAxiosInterceptors } from './shared/axios-interceptor';
import './assets/tailwind.css'

setupAxiosInterceptors(() => {
    console.log('Unauthenticated');
});

const app = createApp(App)

const weatherService = new WeatherService();

app.provide('weatherService', weatherService);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAmlmN3Spuolpvy8xtSeeYK2KgH0166I90',
        libraries: 'places,geometry',
    },
});

app.use(store).use(router)

// Global Error Handler
app.config.errorHandler = (err: unknown) => {
    let errorMessage = 'An unexpected error occurred';
    
    if (err instanceof Error) {
        errorMessage = err.message;
    } else if (typeof err === 'string') {
        errorMessage = err;
    }

    console.error('Global Error:', errorMessage);
    // log the error to server if needed
    store.commit('SET_ERROR', true);
};

app.mount('#app')

