import { createStore } from 'vuex'
import routerStore from './router/index'
import userStore from './user/index'

export default createStore({
  modules: {
    routerStore,
    userStore
  }
})
