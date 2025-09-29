import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappURL = "https://wa.me/556291962521?text=Olá%20cheguei%20pelo%20Google,%20gostaria%20de%20mais%20informações%20sobre%20os%20jeans%20da%20Parágrafo%20Denim!";

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-wine overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(var(--wine) / 0.9), hsl(var(--wine-dark) / 0.95)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-wine/80 via-transparent to-wine/60"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-beige/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-beige/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Prazer, somos a<br />
            <span className="text-beige">Parágrafo</span>{" "}
            <span className="font-script text-beige-light">Denim</span>!
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Nosso Propósito<br />
            Fazer <span className="text-white font-bold">MODA</span> que<br />
            transforma <span className="text-white font-bold">VIDAS</span> e<br />
            marca <span className="text-white font-bold">HISTÓRIAS</span>.
          </p>

          {/* CTA Button */}
          <div className="animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-beige to-beige-light text-wine hover:from-beige-light hover:to-beige font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-beige/30 transition-all duration-300 transform hover:scale-105 animate-pulse-wine"
            >
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-6 w-6" />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-beige-light text-sm opacity-80">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-beige rounded-full"></span>
              Fabricação Própria
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-beige rounded-full"></span>
              Lançamentos Semanais
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-beige rounded-full"></span>
              Frete para Todo Brasil
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-beige rounded-full flex justify-center">
          <div className="w-1 h-3 bg-beige rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;