import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const whatsappURL = "https://wa.me/556291962521?text=Quero%20vender%20Parágrafo%20Denim%20👉%20Interesse%20em%20ser%20lojista!";

  return (
    <section className="py-20 bg-gradient-to-br from-wine to-wine-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-beige/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-beige/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Renove sua loja com jeans<br />
            <span className="text-beige">que vende sozinho</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-beige-light mb-8 max-w-3xl mx-auto">
            Junte-se aos lojistas que já transformaram seus negócios com a qualidade Parágrafo Denim
          </p>

          {/* Benefits List */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <ArrowRight className="text-beige w-5 h-5" />
              <span className="text-white font-medium">Alta margem de lucro</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ArrowRight className="text-beige w-5 h-5" />
              <span className="text-white font-medium">Qualidade garantida</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ArrowRight className="text-beige w-5 h-5" />
              <span className="text-white font-medium">Suporte completo</span>
            </div>
          </div>

          {/* Main CTA Button */}
          <div className="animate-bounce-in mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-beige to-beige-light text-wine hover:from-beige-light hover:to-beige font-black text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-beige/30 transition-all duration-300 transform hover:scale-105 animate-pulse-wine"
            >
              <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-3 h-7 w-7" />
                Quero vender Parágrafo Denim 👉
              </a>
            </Button>
          </div>

          {/* Urgency/Scarcity */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-beige-light text-lg mb-4">
              <strong className="text-white">Atenção:</strong> Trabalhamos apenas com lojistas selecionados
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-beige-light">
              <span>✓ CNPJ ativo obrigatório</span>
              <span>✓ Pedido mínimo 20 peças</span>
              <span>✓ Cadastro via WhatsApp</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-beige-light text-sm mb-2">
              Ou ligue diretamente:
            </p>
            <a 
              href="tel:+556291962521"
              className="text-beige font-bold text-lg hover:text-white transition-colors"
            >
              +55 62 9196-2521
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;