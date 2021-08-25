import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import i18n from "./i18n";
import { formatYYYYMMDD, currencyText } from './filter'

import './assets/css/index.scss'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$filters = {
  formatYYYYMMDD,
  currencyText
}
app.mount('#app')
