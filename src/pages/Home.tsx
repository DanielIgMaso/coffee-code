import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-100 text-center px-4">
      <h1 className="text-5xl font-bold text-slate-900 mb-6">
        Code, Coffee & <span className="text-amber-600">Repeat</span>
      </h1>
      <p className="text-xl text-slate-600 mb-8 max-w-2xl">
        O combustível oficial dos desenvolvedores. Cafés especiais para quem vira a noite codando.
      </p>
      <Link 
        to="/catalog" 
        className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-700 transition shadow-lg"
      >
        Ver Menu Completo
      </Link>
    </div>
  );
}