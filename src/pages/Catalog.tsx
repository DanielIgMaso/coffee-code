import { useState } from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search } from 'lucide-react';

export function Catalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Todos');

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'Todos' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Nosso Menu</h2>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Buscar café ou lanche..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select 
          className="p-2 border rounded-lg bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Todos">Todas Categorias</option>
          <option value="Cafés">Cafés</option>
          <option value="Comidas">Comidas</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}