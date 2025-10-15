import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify'
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import router from "./router";

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(createVuetify())

app.mount('#app')
