import ProductCard from "@/components/ui/product-card";
import type { Product } from "@shared/schema";

export default function Menu() {
  const products: Product[] = [
    {
      id: "pistache",
      name: "Tiramisu Pistache",
      description: "Rich pistachio cream with authentic mascarpone, creating an elegant and sophisticated flavor experience.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 10, medium: 15, party: 0 },
    },
    {
      id: "speculoos",
      name: "Tiramisu Spéculoos",
      description: "Caramelized Spéculoos cookies layered with smooth cream, bringing warmth and comfort to every bite.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 10, medium: 15, party: 0 },
    },
    {
      id: "noisette",
      name: "Tiramisu Noisette",
      description: "Delicate hazelnut flavors combined with traditional mascarpone for a nutty, aromatic delight.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 10, medium: 15, party: 0 },
    },
    {
      id: "fraise",
      name: "Tiramisu Fraise",
      description: "Fresh strawberry layers with delicate cream - a perfect spring creation coming to our menu soon.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 0, medium: 0, party: 0 },
      badge: "Coming Soon",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
            Our Flavors
          </h1>
          <p className="text-xl text-espresso/70 max-w-2xl mx-auto">
            Discover our carefully curated selection of premium tiramisu flavors, each one a masterpiece
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
