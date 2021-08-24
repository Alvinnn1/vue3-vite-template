import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import account from './modules/account'

const store = createStore({
  modules: {
    account
  },
  plugins: [createPersistedState()]
})

export { store }