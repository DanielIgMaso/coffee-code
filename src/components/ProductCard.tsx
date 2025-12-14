import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition flex flex-col h-full">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
        <p className="text-slate-600 text-sm mt-2 flex-1">{product.description}</p>
        <p className="text-amber-600 font-bold text-xl mt-4">R$ {product.price.toFixed(2)}</p>
        <div className="flex gap-2 mt-4">
          <Link 
            to={`/product/${product.id}`}
            className="flex-1 bg-slate-200 text-slate-800 py-2 rounded text-center hover:bg-slate-300 transition"
          >
            Detalhes
          </Link>
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}