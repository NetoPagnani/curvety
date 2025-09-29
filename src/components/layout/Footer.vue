<template>
  <footer>
    <div class="container footer-content">
      <div class="footer-section">
        <h3>Curvety</h3>
        <p>
          Lingerie plus size para valorizar todos os corpos com conforto e
          elegância.
        </p>
      </div>
      <div class="footer-section">
        <h3>Links Rápidos</h3>
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Nossa missão</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Suporte</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Trocas e Devoluções</a></li>
          <li><a href="#">Política de Privacidade</a></li>
          <li><a href="#">Termos de Uso</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contato</h3>
        <ul>
          <li><i class="fas fa-map-marker-alt" /> Av. Principal, 1234</li>
          <li><i class="fas fa-phone" /> (11) 99999-9999</li>
          <li><i class="fas fa-envelope" /> contato@curvety.com</li>
        </ul>
      </div>
    </div>
    <div class="container copyright">
      <p>&copy; 2023 Curvety - Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background: linear-gradient(
    to left,
    var(--background-logo) 0%,
    var(--background-light) 100%
  );
  color: #000000;
  padding: 40px 0;
  margin-top: 50px;
}
.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}
.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 20px;
}
.footer-section h3 {
  margin-bottom: 15px;
  color: #000000;
}
.footer-section ul {
  list-style: none;
}
.footer-section ul li {
  margin-bottom: 10px;
}
.footer-section a {
  color: #000000;
  text-decoration: none;
}
.footer-section a:hover {
  text-decoration: underline;
}
.copyright {
  text-align: center;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid #4a1a32;
  color: #000000;
}
</style>
