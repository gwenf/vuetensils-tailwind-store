<template>
  <div class="popular-products-component bg-red-500 p-20">
    <div class="mb-10">
      <h2 class="text-4xl">
        Popular Products
      </h2>
      <VBtn class="inline-block text-sm px-4 py-1 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        View All
      </VBtn>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="(product, i) in products"
        :key="i"
        class="product-card max-w-sm rounded overflow-hidden shadow-lg"
      >
        <img class="w-full" :src="product.image" alt="Sunset in the mountains">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ product.title }}</div>
          <p class="text-gray-700 text-base">
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          title: 'Mario with Flower',
          image: 'https://mario.nintendo.com/assets/img/home/intro/mario-pose4.png',
          description: 'Some description...'
        },
        {
          title: 'Mario with Flower',
          image: 'https://mario.nintendo.com/assets/img/home/intro/mario-pose4.png',
          description: 'Some description...'
        },
        {
          title: 'Mario with Flower',
          image: 'https://mario.nintendo.com/assets/img/home/intro/mario-pose4.png',
          description: 'Some description...'
        }
      ]
    }
  }
}
</script>
