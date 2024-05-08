import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import stores from './stores/stores'
import router from "./router/router.js"

createApp(App).use(router).use(stores).mount('#app')
