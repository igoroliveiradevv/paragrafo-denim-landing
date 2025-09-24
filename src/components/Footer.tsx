import { MessageCircle, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";
import reclameAqui from "@/assets/reclame-aqui.png";
import googleSiteSeguro from "@/assets/google-site-seguro.png";

const Footer = () => {
  const whatsappURL = "https://wa.me/556291962521?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações!";

  const quickLinks = [
    { name: "Catálogo", href: "#catalogo" },
    { name: "Lançamentos", href: "#lancamentos" },
    { name: "Política de Atacado", href: "#como-comprar" },
  ];

  return (
    <footer id="contato" className="bg-wine text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logo} 
                alt="Parágrafo Denim" 
                className="h-10 w-auto"
              />
              <span className="text-white font-bold text-xl">
                Parágrafo <span className="font-script text-beige">Denim</span>
              </span>
            </div>
            <p className="text-beige-light mb-6 max-w-md leading-relaxed">
              Transformando lojas através da moda jeans de qualidade. 
              Fabricação própria em Goiânia com foco na satisfação do lojista e cliente final.
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={reclameAqui} 
                alt="ReclameAQUI" 
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
              <img 
                src={googleSiteSeguro} 
                alt="Google Site Seguro" 
                className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-beige">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-beige-light hover:text-beige transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-beige">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-beige mt-1 flex-shrink-0" />
                <div>
                  <p className="text-beige-light text-sm mb-1">WhatsApp</p>
                  <a 
                    href={whatsappURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-beige transition-colors"
                  >
                    +55 62 9196-2521
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-beige mt-1 flex-shrink-0" />
                <div>
                  <p className="text-beige-light text-sm mb-1">Telefone</p>
                  <a 
                    href="tel:+556291962521"
                    className="text-white font-semibold hover:text-beige transition-colors"
                  >
                    +55 62 9196-2521
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-beige mt-1 flex-shrink-0" />
                <div>
                  <p className="text-beige-light text-sm mb-1">Endereço</p>
                  <p className="text-white font-semibold">
                    Shopping Mega Moda<br />
                    Rua 44 - Goiânia - GO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-wine-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-beige-light text-sm">
              © 2024 Parágrafo Denim. Todos os direitos reservados.
            </p>
            <div className="text-beige-light text-sm">
              CNPJ: XX.XXX.XXX/XXXX-XX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;