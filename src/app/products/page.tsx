import Link from "next/link";

const products = [
  { id: 1, name: "Assurance Auto", price: "25€/mois" },
  { id: 2, name: "Assurance Habitation", price: "15€/mois" },
  { id: 3, name: "Assurance Santé", price: "45€/mois" },
];

export default function Products() {
  return (
    <main className="container mx-auto p-8">
      <Link href="/" className="text-blue-600 mb-4 inline-block">
        ← Retour à l&apos;accueil
      </Link>

      <h1 className="text-3xl font-bold mb-8" data-testid="products-title">
        Nos Produits d&apos;Assurance
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded"
            data-testid={`product-${product.id}`}
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              data-testid={`buy-${product.id}`}
            >
              Souscrire
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
