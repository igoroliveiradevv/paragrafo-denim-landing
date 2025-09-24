import { Play } from "lucide-react";

const VideoSection = () => {
  const instagramURL = "https://www.instagram.com/stories/highlights/18070819033473830/";

  return (
    <section className="py-20 bg-gradient-to-b from-beige-light to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-wine mb-4">
            Veja Como Funciona Nosso Atacado
          </h2>
          <p className="text-lg text-wine/80 max-w-2xl mx-auto">
            Exclusivo para lojistas com CNPJ ativo - descubra como é fácil trabalhar conosco
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            {/* Video Placeholder with Instagram Link */}
            <div className="relative bg-gradient-to-br from-wine to-wine-dark rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Atacado Exclusivo para Lojistas
                  </h3>
                  <p className="text-beige-light mb-6 max-w-md mx-auto">
                    Veja depoimentos de lojistas e como funciona nosso processo de vendas
                  </p>
                  <a
                    href={instagramURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm"
                  >
                    <Play className="w-5 h-5" />
                    Assistir no Instagram
                  </a>
                </div>
              </div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-wine/50 via-transparent to-wine-dark/50"></div>
            </div>
          </div>

          {/* Video Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">1</span>
              </div>
              <h4 className="font-bold text-wine mb-2">Processo Simples</h4>
              <p className="text-wine/80 text-sm">
                Cadastro rápido e pedido mínimo de apenas 20 peças
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">2</span>
              </div>
              <h4 className="font-bold text-wine mb-2">Entrega Rápida</h4>
              <p className="text-wine/80 text-sm">
                Logística eficiente para todo o Brasil direto de Goiânia
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">3</span>
              </div>
              <h4 className="font-bold text-wine mb-2">Suporte Total</h4>
              <p className="text-wine/80 text-sm">
                Acompanhamento completo desde o pedido até a venda
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;