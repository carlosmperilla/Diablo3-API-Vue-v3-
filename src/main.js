// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import './plugins/bootstrap-vue-3'
import './plugins/bootstrap-vue' // Requiere configurara vue-compact
// https://bootstrap-vue.org/vue3

// Font-Awesome
import './plugins/font-awesome'

// CSS global
import './assets/css/main.styl'

// Filters
import { formatNumber } from '@/filters/numeral'

// Custom directives
import './directives'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.config.devtools = true // Para vue devtools

// Estableciendo los filtros globales.
// https://v3-migration.vuejs.org/breaking-changes/filters.html
app.config.globalProperties.$filters = {
    formatNumber,
}

app
    .use(pinia)
    .use(router)
    .mount('#app')
