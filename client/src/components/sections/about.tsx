import { Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-warmWhite">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-espresso">
              The Story Behind Every Bite
            </h2>
            <p className="text-lg mb-6 leading-relaxed text-espresso/80">
              Welcome to a world where tradition meets passion. As the Cooking Doctor, I've dedicated my life to perfecting the art of tiramisu, bringing authentic Italian flavors to your table with a modern twist.
            </p>
            <p className="text-lg mb-8 leading-relaxed text-espresso/80">
              Each tiramisu is handcrafted using only the finest ingredients: authentic mascarpone, freshly brewed espresso, and delicate ladyfingers. No preservatives, no shortcuts – just pure, artisanal excellence.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Heart className="text-espresso text-xl" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold">Made with Love</h3>
                <p className="text-espresso/70">Every creation tells a story</p>
              </div>
            </div>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="The Cooking Doctor in her kitchen" 
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
