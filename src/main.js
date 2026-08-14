import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/index.js'

import './assets/scss/main.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
    .use(router)
    .mount('#app')