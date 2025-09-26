<template>
  <div class="products-container">
    <div v-if="products.length === 0" class="empty-state">
      <i class="fas fa-search" />
      <h3>Nenhum produto encontrado</h3>
      <p>Tente selecionar outra categoria</p>
    </div>

    <div v-else class="products-grid">
      <product-card
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="$emit('add-to-cart', product)"
        @view-details="viewProductDetails"
      />
    </div>
  </div>
</template>

<script>
  import ProductCard from './ProductCard.vue'

  export default {
    name: 'ProductGrid',
    components: {
      ProductCard,
    },
    props: {
      products: Array,
    },
    emits: ['add-to-cart', 'view-details'],
    methods: {
      viewProductDetails (product) {
        // Implementar navegação para detalhes do produto
        console.log('Ver detalhes:', product)
        this.$emit('view-details', product)
      },
    },
  }
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #666;
}

.empty-state i {
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--primary-color);
}

.empty-state h3 {
  margin-bottom: 10px;
  color: #333;
}

.empty-state p {
  font-size: 16px;
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}
</style>
