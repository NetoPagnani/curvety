export const ProductService = {
  async getProducts () {
    try {
      const response = await fetch('/src/assets/data/produtos.json')
      if (response.ok) {
        const data = await response.json()
        return data.produtos || []
      }
      // Se não encontrar o arquivo, retorna mock
      return ProductService.getMockProducts()
    } catch {
      // Se der erro, retorna mock
      return ProductService.getMockProducts()
    }
  },
  getMockProducts () {
    return [
      {
        id: 1,
        nome: 'Sutiã Comfort Plus Size - MOCK',
        descricao: 'Sutiã confortável para tamanhos plus size - DADOS MOCK',
        categoria: 'sutia',
        preco: 89.9,
        imagem:
          'https://images.unsplash.com/photo-1581259030356-5e13e1d6aa48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        disponivel: true,
      },
      {
        id: 2,
        nome: 'Calcinha Algodão Plus Size - MOCK',
        descricao: 'Calcinha confortável em algodão - DADOS MOCK',
        categoria: 'calcinha',
        preco: 39.9,
        imagem:
          'https://images.unsplash.com/photo-1581259030356-5e13e1d6aa48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        disponivel: true,
      },
      {
        id: 3,
        nome: 'Babydoll Plus Size - MOCK',
        descricao: 'Babydoll elegante - DADOS MOCK',
        categoria: 'babydoll',
        preco: 129.9,
        imagem:
          'https://images.unsplash.com/photo-1581259030356-5e13e1d6aa48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80',
        disponivel: true,
      },
    ]
  },
  getCategories (products) {
    const uniqueCategories = [...new Set(products.map(p => p.categoria))]
    const categories = uniqueCategories.map(cat => ({
      value: cat,
      label: ProductService.formatCategoryName(cat),
    }))
    categories.unshift({ value: 'todas', label: 'Todas' })
    return categories
  },
  formatCategoryName (category) {
    const names = {
      todas: 'Todas',
      sutia: 'Sutiãs',
      calcinha: 'Calcinhas',
      babydoll: 'Babydolls',
      camisola: 'Camisolas',
    }
    return names[category] || category
  },
  filterByCategory (products, category) {
    if (category === 'todas') {
      return products
    }
    return products.filter(product => product.categoria === category)
  },
  getProductById (products, id) {
    return products.find(product => product.id === id)
  },
  getFeaturedProducts (products, count = 4) {
    return products.slice(0, count)
  },
  searchProducts (products, searchTerm) {
    if (!searchTerm) {
      return products
    }
    const term = searchTerm.toLowerCase()
    return products.filter(
      product =>
        product.nome.toLowerCase().includes(term)
        || product.descricao.toLowerCase().includes(term)
        || product.categoria.toLowerCase().includes(term),
    )
  },
  sortProducts (products, sortBy) {
    const sorted = [...products]
    switch (sortBy) {
      case 'price-asc': {
        return sorted.sort((a, b) => a.preco - b.preco)
      }
      case 'price-desc': {
        return sorted.sort((a, b) => b.preco - a.preco)
      }
      case 'name-asc': {
        return sorted.sort((a, b) => a.nome.localeCompare(b.nome))
      }
      case 'name-desc': {
        return sorted.sort((a, b) => b.nome.localeCompare(a.nome))
      }
      default: {
        return sorted
      }
    }
  },
  getAvailableProducts (products) {
    return products.filter(product => product.disponivel)
  },
  getProductsByPriceRange (products, minPrice, maxPrice) {
    return products.filter(
      product => product.preco >= minPrice && product.preco <= maxPrice,
    )
  },
}
