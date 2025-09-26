<template>
  <header>
    <div class="container header-content">
      <img alt="Logo Curvety" class="logo" src="/src/assets/logo/2.jpg">
      <ul class="nav-menu">
        <li><a href="#">Início</a></li>
        <li><a href="#">Produtos</a></li>
        <li><a href="#">Coleções</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <div class="cart-icon" @click="$emit('toggle-cart')">
        <i class="fas fa-shopping-bag" />
        <span v-if="cartTotalQuantity > 0" class="cart-count">{{
          cartTotalQuantity
        }}</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      cartTotalQuantity: {
        type: Number,
        default: 0,
      },
    },
  }
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
header {
  background: linear-gradient(135deg, #a28d78 0%, #f9f6f7 100%);
  padding: 8px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  width: 80px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.nav-menu {
  display: flex;
  list-style: none;
}
.nav-menu li {
  margin: 0 15px;
}
.nav-menu a {
  text-decoration: none;
  color: #000000;
  font-weight: 500;
  transition: color 0.3s;
}
.nav-menu a:hover {
  color: #692828;
}
.cart-icon {
  position: relative;
  font-size: 24px;
  color: #000000A1;
  cursor: pointer;
}
.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--accent-color);
  color: rgb(68, 67, 67);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
  }
  .nav-menu {
    margin-top: 15px;
  }
}
</style>
