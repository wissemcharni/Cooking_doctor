import ProductCard from "@/components/ui/product-card";
import type { Product } from "@shared/schema";

export default function Menu() {
  const products: Product[] = [
    {
      id: "classic",
      name: "Classic Tiramisu",
      description: "Traditional recipe with authentic mascarpone, espresso-soaked ladyfingers, and a dusting of pure cocoa.",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 6, medium: 10, party: 25 },
      badge: "Bestseller",
    },
    {
      id: "pistachio",
      name: "Pistachio Dreams",
      description: "Luxurious pistachio cream with crunchy nuts, creating a sophisticated flavor profile from Sicily.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 6, medium: 10, party: 25 },
      badge: "New",
    },
    {
      id: "strawberry",
      name: "Strawberry Bliss",
      description: "Fresh strawberries layered with delicate cream, perfect for spring celebrations and romantic occasions.",
      image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 6, medium: 10, party: 25 },
      badge: "Seasonal",
    },
    {
      id: "nutella",
      name: "Nutella Heaven",
      description: "Rich chocolate-hazelnut layers with authentic Nutella, a childhood favorite elevated to gourmet perfection.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 6, medium: 10, party: 25 },
    },
    {
      id: "lotus",
      name: "Lotus Caramel",
      description: "Caramelized Lotus Biscoff cookies with smooth cream, offering a unique twist on the classic recipe.",
      image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 6, medium: 10, party: 25 },
      badge: "Popular",
    },
    {
      id: "special",
      name: "Chef's Special",
      description: "A rotating selection of innovative flavors crafted exclusively by the Cooking Doctor. Contact us for this month's creation.",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      pricing: { small: 8, medium: 12, party: 30 },
      badge: "Limited",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
