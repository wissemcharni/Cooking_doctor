import { Instagram, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-espresso text-warmWhite py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="font-playfair text-3xl font-bold mb-4">
            Tiramisu by Cooking Doctor
          </div>
          <p className="text-warmWhite/70 mb-6">
            Crafting moments of joy, one tiramisu at a time
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 text-espresso" />
            </a>
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi, I'd like to order tiramisu!" 
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5 text-espresso" />
            </a>
            <a 
              href="mailto:hello@tiramisubycookingdoctor.com" 
              className="w-12 h-12 bg-gold rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 text-espresso" />
            </a>
          </div>
          <p className="text-warmWhite/50 text-sm">
            © 2024 Tiramisu by Cooking Doctor. Made with ❤️ and lots of mascarpone.
          </p>
        </div>
      </div>
    </footer>
  );
}
