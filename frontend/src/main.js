

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GoogleMap from 'vue-google-maps-ui'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


createApp(App).use(router).component('GoogleMap', GoogleMap).mount('#app')
