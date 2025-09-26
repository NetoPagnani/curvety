<template>
  <div class="categories">
    <button
      v-for="category in categories"
      :key="category.value"
      class="category-btn"
      :class="{ active: selectedCategory === category.value }"
      @click="$emit('category-change', category.value)"
    >
      {{ category.label }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ProductCategories',
    props: {
      categories: Array,
      selectedCategory: String,
    },
  }
</script>

<style scoped>
.categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  gap: 15px;
}

.category-btn {
  background-color: var(--secondary-color);
  color: var(--text-dark);
  border: none;
  padding: 12px 24px;
  border-radius: 32px;
  cursor: pointer;
  transition: box-shadow 0.3s, background-color 0.3s, color 0.3s, transform 0.2s;
  font-size: 15px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 16px;
  margin-bottom: 8px;
}

.category-btn.active,
.category-btn:hover {
  background-color: #927F6D;
  color: var(--accent-color);
  font-weight: bold;
  transform: scale(1.07) translateY(-2px);
  box-shadow: 0 8px 24px rgba(162, 141, 120, 0.18);
  border: 2px solid var(--accent-color);
}
</style>
