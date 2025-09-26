<template>
  <div class="home-page">
    <Banner />

    <section class="products-section">
      <div class="container">
        <h2 class="section-title">Nossas Lingeries Plus Size</h2>

        <div v-if="loading" class="loading">
          <i class="fas fa-spinner fa-spin" /> Carregando produtos...
        </div>

        <div v-else>
          <product-categories
            :categories="categories"
            :selected-category="selectedCategory"
            @category-change="$emit('category-change', $event)"
          />

          <product-grid
            :products="products"
            @add-to-cart="$emit('add-to-cart', $event)"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Banner from '@/components/layout/Banner.vue'
  import ProductGrid from '@/components/products/ProductGrid.vue'
  import ProductCategories from '@/components/products/ProductsCategories.vue'

  export default {
    name: 'HomePage',
    components: {
      Banner,
      ProductCategories,
      ProductGrid,
    },
    props: {
      products: Array,
      categories: Array,
      selectedCategory: String,
      loading: Boolean,
    },
    emits: ['add-to-cart', 'category-change'],
  }
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #000000;
  font-weight: bold;
}

.products-section {
  background: linear-gradient(135deg, var(--secondary-color) 0%, #a28d78 100%);
  padding: 40px 0;
}
</style>
