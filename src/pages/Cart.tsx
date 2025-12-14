import { useCart } from '../context/CartContext';
import { Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Cart() {
  const { items, removeFromCart, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h2>
        <Link to="/catalog" className="text-amber-600 underline">Voltar às compras</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-slate-800">Seu Pedido</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-0">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-slate-600">Qtd: {item.quantity} x R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="font-bold text-lg">R$ {(item.price * item.quantity).toFixed(2)}</span>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-8 pt-8 border-t flex justify-between items-center">
          <div>
            <p className="text-slate-600">Total do pedido:</p>
            <p className="text-3xl font-bold text-amber-600">R$ {total.toFixed(2)}</p>
          </div>
          <button 
            onClick={() => alert("Pedido finalizado com sucesso!")}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}