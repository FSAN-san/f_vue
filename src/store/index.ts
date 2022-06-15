import { createStore } from 'vuex'
import routerStore from './router/index'

export default createStore({
  modules: {
    routerStore
  }
})
