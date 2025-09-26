<template>
  <section class="banner">
    <div class="banner-content">
      <!-- Logo removido, agora é imagem de fundo -->
      <h1>Beleza e Conforto em Todos os Tamanhos</h1>
      <p>Descubra nossa coleção exclusiva de lingeries plus size</p>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Banner',
  }
</script>

<style scoped>
.banner {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/src/assets/logo/2.jpg");
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 40px;
}
.banner-logo {
  width: 120px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
.banner-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.banner-content p {
  font-size: 20px;
  margin-bottom: 30px;
}
.btn {
  background-color: var(--primary-color);
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
@media (max-width: 768px) {
  .banner-content h1 {
    font-size: 36px;
  }
}
</style>
