export function About() {
  return (
    <div className="container mx-auto p-6 max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-6">Sobre o CoffeeCode</h1>
      <p className="text-lg text-slate-700 mb-4">
        O CoffeeCode nasceu da necessidade de programadores terem um lugar onde o café é tão forte quanto o código.
      </p>
      <div className="bg-amber-50 p-6 rounded-lg mt-8 text-left">
        <h3 className="font-bold mb-2">Contato</h3>
        <p>Email: contato@coffeecode.dev</p>
        <p>Endereço: Rua dos Bits, 1010 - Bairro Binário</p>
      </div>
    </div>
  );
}