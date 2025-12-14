import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ArrowLeft } from 'lucide-react';

export function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="p-8">Produto não encontrado</div>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/catalog" className="flex items-center gap-2 text-slate-600 mb-6 hover:text-amber-600">
        <ArrowLeft size={20} /> Voltar ao catálogo
      </Link>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-96 object-cover" />
        <div className="p-8 md:w-1/2 flex flex-col justify-center">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
            {product.category}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
          <p className="text-slate-600 text-lg mb-6">{product.description}</p>
          <p className="text-3xl font-bold text-amber-600 mb-8">R$ {product.price.toFixed(2)}</p>
          <button 
            onClick={() => addToCart(product)}
            className="bg-amber-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-amber-700 transition w-full"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}