<template>
  <div class="product-card">
    <div class="product-image">
      <img
        :alt="product.nome"
        :src="getImageUrl(product.imagem)"
        @error="setDefaultImage"
      >
      <div class="product-overlay">
        <button class="btn quick-view" @click="showModal = true">
          <i class="fas fa-eye" /> Ver Detalhes
        </button>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.nome }}</h3>
      <p class="product-category">{{ formatCategory(product.categoria) }}</p>
      <p class="product-description">{{ product.descricao }}</p>
      <div class="product-price">R$ {{ product.preco.toFixed(2) }}</div>
      <button
        class="btn add-to-cart-btn"
        :disabled="!product.disponivel"
        @click="$emit('add-to-cart', product)"
      >
        <i class="fas fa-shopping-bag" />
        {{ product.disponivel ? "Adicionar ao Carrinho" : "Indisponível" }}
      </button>
    </div>

    <!-- Modal da imagem ampliada -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <img
          :alt="product.nome"
          class="modal-image"
          :src="getImageUrl(product.imagem)"
        >
        <button class="close-modal" @click="showModal = false">Fechar</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
    emits: ['add-to-cart', 'view-details'],
    data () {
      return {
        showModal: false,
      }
    },
    methods: {
      getImageUrl (imagePath) {
        if (imagePath.startsWith('http')) return imagePath
        return imagePath.startsWith('/') ? imagePath : `/assets${imagePath}`
      },
      setDefaultImage (event) {
        event.target.src
          = 'https://via.placeholder.com/300x300/f3d7e3/5d1837?text=Curvety+Lingerie'
      },
      formatCategory (category) {
        const categories = {
          sutia: 'Sutiã',
          calcinha: 'Calcinha',
          babydoll: 'Babydoll',
          camisola: 'Camisola',
        }
        return categories[category] || category
      },
    },
  }
</script>

<style scoped>
.product-card:hover .product-overlay {
  opacity: 1;
}

.quick-view {
  background: rgba(255, 255, 255, 0.9);
  color: #444343;
  border: none;
}

.quick-view:hover {
  background: white;
  transform: scale(1.05);
}

.product-image {
  border-radius: 12px;
  height: 180px;
  max-height: 180px;
  overflow: hidden;
  position: relative;
}

.product-image img {
  width: 100%;
  height: 100%;
  max-height: 180px;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.product-category {
  font-size: 12px;
  color: var(--primary-color);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.product-description {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  font-size: 22px;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.add-to-cart-btn {
  width: 100%;
  background: #63492faf;
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(74, 55, 36, 0.18);
  transition: background 0.3s, box-shadow 0.3s, transform 0.2s;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: #5a4733 !important;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(87, 83, 85, 0.18);
}

.add-to-cart-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
}

/* Estilos do modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
.modal-content {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.modal-image {
  max-width: 500px;
  max-height: 550px;
  border-radius: 8px;
  margin-bottom: 16px;
}
.close-modal {
  background: var(--primary-color);
  color: #fff;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.close-modal:hover {
  background: var(--primary-dark);
}

.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4e4d4ecc;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 2;
}
</style>
