<template>
  <div id="app">
    <VSkip to="#main">
      Skip To Main Content
    </VSkip>
    <TopNav />
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { VSkip } from 'vuetensils'
import TopNav from './components/TopNav.vue'

export default {
  name: 'App',
  components: {
    VSkip,
    TopNav
  }
}
</script>
