import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-12 left-0 right-0 bg-warmWhite/95 backdrop-blur-sm shadow-sm z-40 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="font-playfair text-2xl font-bold text-espresso cursor-pointer hover:text-gold transition-colors">
              Tiramisu by Cooking Doctor
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/">
              <a className={`hover:text-gold transition-colors duration-300 ${isActive("/") ? "text-gold" : "text-espresso"}`}>
                Home
              </a>
            </Link>
            <Link href="/menu">
              <a className={`hover:text-gold transition-colors duration-300 ${isActive("/menu") ? "text-gold" : "text-espresso"}`}>
                Menu
              </a>
            </Link>
            <Link href="/order">
              <a className={`hover:text-gold transition-colors duration-300 ${isActive("/order") ? "text-gold" : "text-espresso"}`}>
                Order
              </a>
            </Link>
            <Link href="/contact">
              <a className={`hover:text-gold transition-colors duration-300 ${isActive("/contact") ? "text-gold" : "text-espresso"}`}>
                Contact
              </a>
            </Link>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-espresso"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <Link href="/">
              <a 
                className={`block hover:text-gold transition-colors duration-300 ${isActive("/") ? "text-gold" : "text-espresso"}`}
                onClick={toggleMenu}
              >
                Home
              </a>
            </Link>
            <Link href="/menu">
              <a 
                className={`block hover:text-gold transition-colors duration-300 ${isActive("/menu") ? "text-gold" : "text-espresso"}`}
                onClick={toggleMenu}
              >
                Menu
              </a>
            </Link>
            <Link href="/order">
              <a 
                className={`block hover:text-gold transition-colors duration-300 ${isActive("/order") ? "text-gold" : "text-espresso"}`}
                onClick={toggleMenu}
              >
                Order
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`block hover:text-gold transition-colors duration-300 ${isActive("/contact") ? "text-gold" : "text-espresso"}`}
                onClick={toggleMenu}
              >
                Contact
              </a>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
