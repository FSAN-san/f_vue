<template>
  <div>
    <p>Hello {{ name }}</p>
    <p>This is Vue3 + Vite + Eslint + {{ state.routerStore.name }} + Vuex + PostCSS + SCSS</p>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const { commit, state } = useStore()
commit('printName')
const name = 'FSAN'
</script>

<style scoped lang="scss">
div {
  font-size: 40px;
  display: grid;

  p {
    font-weight: bold;
    display: flex;
  }
}
</style>
