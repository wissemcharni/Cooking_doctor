import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      rating: 5,
      text: "Absolutely divine! The classic tiramisu transported me straight to Italy. You can taste the love and quality in every bite.",
      author: "Maria Rodriguez",
      role: "Loyal Customer",
      initial: "M",
    },
    {
      rating: 5,
      text: "Perfect for our anniversary celebration! The presentation was beautiful and the taste was even better. Highly recommend!",
      author: "Alessandro Thompson",
      role: "Special Occasions",
      initial: "A",
    },
    {
      rating: 5,
      text: "The pistachio tiramisu is out of this world! As an Italian myself, I can confirm this is the real deal. Bravissimo!",
      author: "Sofia Chen",
      role: "Food Enthusiast",
      initial: "S",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
            What Our Customers Say
          </h2>
          <p className="text-xl text-espresso/70 max-w-2xl mx-auto">
            Every review tells a story of satisfaction and joy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-warmWhite shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-espresso/80 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center mr-4">
                    <span className="font-bold text-espresso">{testimonial.initial}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-espresso">{testimonial.author}</h4>
                    <p className="text-sm text-espresso/60">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
