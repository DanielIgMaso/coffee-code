import { Link } from 'react-router-dom';
import { ShoppingCart, Coffee } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { items } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-slate-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-amber-500">
          <Coffee /> CoffeeCode
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/catalog" className="hover:text-amber-400 transition">Catálogo</Link>
          <Link to="/about" className="hover:text-amber-400 transition">Sobre</Link>
          <Link to="/cart" className="relative hover:text-amber-400 transition">
            <ShoppingCart />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}