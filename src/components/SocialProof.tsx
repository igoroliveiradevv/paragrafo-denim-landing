import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      city: "São Paulo - SP",
      text: "Os jeans da Parágrafo Denim vendem sozinhos! Qualidade excepcional e meus clientes sempre voltam para comprar mais. Já estou no terceiro pedido este mês.",
      rating: 5
    },
    {
      name: "João Santos",
      city: "Belo Horizonte - MG",
      text: "Trabalho com várias marcas, mas a Parágrafo se destaca pela qualidade e pelo atendimento. O prazo de entrega é sempre cumprido e a margem de lucro é ótima.",
      rating: 5
    },
    {
      name: "Ana Costa",
      city: "Rio de Janeiro - RJ", 
      text: "Desde que comecei a vender Parágrafo Denim, minhas vendas aumentaram 40%. A modelagem é perfeita e minhas clientes ficam apaixonadas pelos produtos.",
      rating: 5
    }
  ];

  const stats = [
    { number: "500+", label: "Lojistas Parceiros" },
    { number: "15k+", label: "Peças Vendidas/Mês" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "Todo Brasil", label: "Cobertura Nacional" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-wine mb-4">
            Mais de <span className="text-beige">500 lojistas</span> em todo Brasil<br />
            já lucram com Parágrafo Denim
          </h2>
          <p className="text-lg text-wine/80 max-w-2xl mx-auto">
            Veja o que nossos parceiros dizem sobre trabalhar conosco
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-black text-wine mb-2">
                {stat.number}
              </div>
              <div className="text-wine/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="text-beige mb-4">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-beige text-beige" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-wine/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-beige/30 pt-4">
                <div className="font-bold text-wine">
                  {testimonial.name}
                </div>
                <div className="text-wine/60 text-sm">
                  {testimonial.city}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-wine/60 mb-8">Confiança que você pode ver:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-wine text-sm">CNPJ Verificado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-wine text-sm">Empresa Regularizada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-wine text-sm">Entrega Garantida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;