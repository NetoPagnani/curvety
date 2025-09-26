<template>
  <div id="app">
    <Header
      :cart-total-quantity="cartTotalQuantity"
      @toggle-cart="toggleCart"
    />

    <main>
      <HomePage
        :categories="categories"
        :loading="loading"
        :products="filteredProducts"
        :selected-category="selectedCategory"
        @add-to-cart="addToCart"
        @category-change="filterByCategory"
      />
    </main>

    <CartModal
      :cart="cart"
      :cart-open="cartOpen"
      :cart-total="cartTotal"
      @decrease-quantity="updateQuantity"
      @increase-quantity="updateQuantity"
      @remove-from-cart="removeFromCart"
      @toggle-cart="toggleCart"
    />

    <Footer />

    <!-- Se você tiver um componente Notification, mantenha aqui -->
    <!-- <Notification
      v-if="notification.show"
      :message="notification.message"
      :type="notification.type"
      @close="notification.show = false"
    /> -->
  </div>
</template>

<script>
import CartModal from "@/components/cart/CartModal.vue";
import Footer from "@/components/layout/Footer.vue";
import Header from "@/components/layout/Header.vue";
import HomePage from "@/pages/Home.vue";
import { ProductService } from "@/service/api.js";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    CartModal,
    HomePage,
  },
  data() {
    return {
      cartOpen: false,
      selectedCategory: "todas",
      categories: [],
      products: [],
      cart: [],
      loading: true,
      notification: {
        show: false,
        type: "success",
        message: "",
      },
    };
  },
  computed: {
    filteredProducts() {
      return ProductService.filterByCategory(
        this.products,
        this.selectedCategory
      );
    },
    cartTotal() {
      return this.cart.reduce(
        (total, item) => total + item.preco * item.quantidade,
        0
      );
    },
    cartTotalQuantity() {
      return this.cart.reduce((total, item) => total + item.quantidade, 0);
    },
  },
  async created() {
    await this.loadProducts();
  },
  methods: {
    async loadProducts() {
      this.loading = true;
      this.products = await ProductService.getProducts();
      this.categories = ProductService.getCategories(this.products);
      this.loading = false;
    },

    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },

    filterByCategory(category) {
      this.selectedCategory = category;
    },

    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantidade++;
      } else {
        this.cart.push({
          ...product,
          quantidade: 1,
        });
      }

      this.showNotification(
        "success",
        `${product.nome} adicionado ao carrinho!`
      );
    },

    removeFromCart(item) {
      this.cart = this.cart.filter((cartItem) => cartItem.id !== item.id);
      this.showNotification("success", `${item.nome} removido do carrinho!`);
    },

    updateQuantity({ item, quantity }) {
      if (quantity === 0) {
        this.removeFromCart(item);
      } else {
        item.quantidade = quantity;
      }
    },

    showNotification(type, message) {
      this.notification = { show: true, type, message };
      setTimeout(() => {
        this.notification.show = false;
      }, 3000);
    },
  },
};
</script>

<style>
/* Estilos globais */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background-color: #f9f6f7;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.btn {
  background-color: var(--accent-color);
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #b33c69;
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
  color: var(--primary-dark);
  font-size: 32px;
}

.loading {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}
</style>
