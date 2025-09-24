import { Truck, Factory, ShoppingCart, Clock, CheckCircle, MapPin } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Frete para todo Brasil",
      description: "Entregamos em todo território nacional"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Confecção própria em Goiânia",
      description: "Localizada na Rua 44, produção 100% nacional"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Pedido mínimo: 20 peças",
      description: "Ideal para lojistas que buscam qualidade"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Lançamentos semanais",
      description: "Sempre em dia com as últimas tendências"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Cadastro apenas para lojistas",
      description: "CNPJ ativo obrigatório para garantir exclusividade"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Shopping Mega Moda",
      description: "Visite nosso showroom físico em Goiânia"
    }
  ];

  return (
    <section id="como-comprar" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-wine mb-6">
            Sobre a Parágrafo <span className="font-script text-beige">Denim</span>
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-wine/80 leading-relaxed space-y-4">
            <p>
              Somos mais que uma marca de jeans - somos parceiros do seu sucesso! 
              Nossa missão é transformar lojas através de produtos de alta qualidade 
              que garantem satisfação do cliente final e alta margem de lucro para lojistas.
            </p>
            <p className="font-semibold text-wine">
              Com fabricação 100% própria em Goiânia, controlamos cada etapa do processo, 
              desde a seleção dos tecidos até o acabamento final.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-beige-light to-beige p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-wine mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-wine mb-3">
                {feature.title}
              </h3>
              <p className="text-wine/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-wine rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Pronto para transformar sua loja?
            </h3>
            <p className="text-beige-light text-lg mb-6">
              Junte-se aos lojistas que já lucram com a qualidade Parágrafo Denim
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-beige-light text-sm">
              <span>✓ Suporte completo</span>
              <span>✓ Entrega rápida</span>
              <span>✓ Qualidade garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;