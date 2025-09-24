import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Lançamentos", href: "#lancamentos" },
    { name: "Catálogo", href: "#catalogo" },
    { name: "Como Comprar", href: "#como-comprar" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wine/95 backdrop-blur-sm border-b border-wine-light">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Parágrafo Denim" 
              className="h-8 md:h-10 w-auto"
            />
            <span className="text-white font-bold text-lg md:text-xl">
              Parágrafo <span className="font-script text-beige">Denim</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-beige transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-beige transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-wine-light pt-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:text-beige transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;