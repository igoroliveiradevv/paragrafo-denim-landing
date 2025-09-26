import { Play } from "lucide-react";

const VideoSection = () => {
  const vimeoURL = "https://vimeo.com/1122337420";

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
            {/* Video Placeholder with Vimeo Embed */}
            <div className="relative bg-gradient-to-br from-wine to-wine-dark rounded-2xl overflow-hidden shadow-2xl aspect-video">
              <iframe
                src="https://player.vimeo.com/video/1122337420?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                title="Parágrafo Denim - Atacado"
              ></iframe>
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