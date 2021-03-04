import { createApp } from 'vue'

import router from '@/routes/router'
import store from '@/store/store'

import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
