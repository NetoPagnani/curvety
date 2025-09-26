<template>
  <div class="cart-modal" :class="{ open: cartOpen }">
    <div class="cart-header">
      <h2>Seu Carrinho</h2>
      <span
        class="close-cart"
        @click="$emit('toggle-cart')"
      ><i class="fa fa-times" /></span>
    </div>
    <div v-if="cart.length === 0">
      <p>Seu carrinho está vazio.</p>
    </div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="item.id" class="cart-item">
        <img :alt="item.nome" class="cart-item-image" :src="item.imagem">
        <div class="cart-item-details">
          <h3 class="cart-item-title">{{ item.nome }}</h3>
          <p class="cart-item-price">R$ {{ item.preco.toFixed(2) }}</p>
          <div class="cart-item-actions">
            <button
              class="quantity-btn"
              @click="
                $emit('decrease-quantity', {
                  item,
                  quantity: item.quantidade - 1,
                })
              "
            >
              -
            </button>
            <span class="item-quantity">{{ item.quantidade }}</span>
            <button
              class="quantity-btn"
              @click="
                $emit('increase-quantity', {
                  item,
                  quantity: item.quantidade + 1,
                })
              "
            >
              +
            </button>
            <span
              class="remove-item"
              @click="$emit('remove-from-cart', item)"
            ><i class="fas fa-trash" /></span>
          </div>
        </div>
      </div>
      <div class="cart-total">Total: R$ {{ cartTotal.toFixed(2) }}</div>
      <button class="checkout-btn">Finalizar Compra</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CartModal',
    props: {
      cartOpen: {
        type: Boolean,
        required: true,
      },
      cart: {
        type: Array,
        required: true,
      },
      cartTotal: {
        type: Number,
        required: true,
      },
    },
    emits: [
      'toggle-cart',
      'decrease-quantity',
      'increase-quantity',
      'remove-from-cart',
    ],
  }
</script>

<style scoped>
.cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
}
.cart-modal.open {
  transform: translateX(0);
}
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.close-cart {
  font-size: 24px;
  cursor: pointer;
  color: #888;
}
.cart-item {
  display: flex;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 15px;
}
.cart-item-details {
  flex-grow: 1;
}
.cart-item-title {
  font-weight: 500;
  margin-bottom: 5px;
}
.cart-item-price {
  color: var(--primary-color);
  font-weight: bold;
}
.cart-item-actions {
  display: flex;
  align-items: center;
  margin-top: 5px;
}
.quantity-btn {
  width: 25px;
  height: 25px;
  background-color: #5E4F3EBD;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.item-quantity {
  margin: 0 10px;
}
.remove-item {
  color: #ff4d4d;
  margin-left: 15px;
  cursor: pointer;
}
.cart-total {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
  padding-top: 15px;
  border-top: 2px solid #eee;
}
.checkout-btn {
  width: 100%;
  margin-top: 20px;
  padding: 15px;
  background-color: var(--primary-dark);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.checkout-btn:hover {
  background-color: #3e1025;
}
@media (max-width: 768px) {
  .cart-modal {
    width: 100%;
  }
}
</style>
