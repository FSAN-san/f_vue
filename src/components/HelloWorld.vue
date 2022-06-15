<template>
  <div>
    <p>Hello {{ name }}</p>
    <p>This is Vue 3 + TypeScript + Vite + EsLint + {{ state.routerStore.name }} + Vuex + PostCSS + SCSS</p>
    <p>Your Success!</p>
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
