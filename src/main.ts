import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import { formatYYYYMMDD, currencyText } from './filter'

import './assets/css/index.scss'

const app = createApp(App)

app.use(store)
app.use(router)

app.config.globalProperties.$filters = {
  formatYYYYMMDD,
  currencyText
}
app.mount('#app')
