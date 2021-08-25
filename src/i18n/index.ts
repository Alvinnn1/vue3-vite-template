import { createI18n } from 'vue-i18n'
import enUS from './locales/en-US.json'

const i18n = createI18n({
  globalInjection:true,
  locale: 'en-US',
  messages: {
    'en-US': enUS
  }
})
export default  i18n