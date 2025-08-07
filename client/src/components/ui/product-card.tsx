import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="bg-warmWhite shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <div className="absolute top-4 right-4 bg-gold text-espresso px-3 py-1 rounded-full text-sm font-semibold">
            {product.badge}
          </div>
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="font-playfair text-2xl font-bold mb-3 text-espresso">{product.name}</h3>
        <p className="text-espresso/70 mb-4">{product.description}</p>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between">
            <span>Small (1-2 portions)</span>
            <span className="font-semibold">€{product.pricing.small}</span>
          </div>
          <div className="flex justify-between">
            <span>Medium (3-4 portions)</span>
            <span className="font-semibold">€{product.pricing.medium}</span>
          </div>
          <div className="flex justify-between">
            <span>Party Box (8-10 portions)</span>
            <span className="font-semibold">€{product.pricing.party}</span>
          </div>
        </div>
        <Link href="/order">
          <Button className="w-full bg-gold text-espresso hover:bg-gold/90 transition-colors duration-300">
            Order Now
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
