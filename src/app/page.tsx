import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8" data-testid="main-title">
        Mon App de Test
      </h1>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Link 
          href="/contact" 
          className="p-6 border rounded hover:bg-gray-50"
          data-testid="contact-link"
        >
          <h2 className="text-xl font-semibold">Contact</h2>
          <p>Formulaire de contact</p>
        </Link>
        
        <Link 
          href="/products" 
          className="p-6 border rounded hover:bg-gray-50"
          data-testid="products-link"
        >
          <h2 className="text-xl font-semibold">Produits</h2>
          <p>Liste des produits</p>
        </Link>
      </div>
    </main>
  );
}