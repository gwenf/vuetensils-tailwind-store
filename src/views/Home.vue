<template>
  <div class="home-view">
    <div class="header-section flex justify-center items-center">
      <h1 class="text-4xl">
        Welcome to Awesome Shop!
      </h1>
    </div>
    <PopularProducts />
  </div>
</template>

<script>
import PopularProducts from '@/components/PopularProducts.vue'

export default {
  name: 'Home',
  components: {
    PopularProducts
  }
}
</script>
