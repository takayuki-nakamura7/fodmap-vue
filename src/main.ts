import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'
import '@/assets/stylesheets/main.scss'
import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/header.scss'


const app = createApp(App)
app.use(router)
//
// Global
//

//
// StoreModels
//

// init
app.mount('#app')
