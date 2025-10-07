import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import model1 from "@/assets/model1.webp";
import model2 from "@/assets/model2.webp";
import model3 from "@/assets/model3.webp";
import model4 from "@/assets/model4.webp";
import model5 from "@/assets/model5.webp";
import model6 from "@/assets/model6.webp";
import model7 from "@/assets/model7.webp";
import model8 from "@/assets/model8.webp";
import model9 from "@/assets/model9.webp";
import model10 from "@/assets/model10.webp";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const whatsappURL = "https://api.whatsapp.com/send/?phone=5562981441722&text=Ol%C3%A1%2C+vim+pelo+site+e+gostaria+de+mais+informa%C3%A7%C3%B5es%21&type=phone_number&app_absent=0";

  const products = [
    {
      id: 1,
      image: model1,
      title: "Linha Luxo",
      description: "Jeans com modelagem perfeita e acabamento exclusivo",
    },
    {
      id: 2,
      image: model2,
      title: "Linha Luxo",
      description: "Conforto e estilo em cada peça da nossa coleção",
    },
    {
      id: 3,
      image: model3,
      title: "Linha Luxo",
      description: "Peças versáteis para o dia a dia moderno",
    },
    {
      id: 4,
      image: model4,
      title: "Linha Luxo",
      description: "O que há de mais novo na moda jeans",
    },
    {
      id: 5,
      image: model5,
      title: "Linha Luxo",
      description: "Sofisticação e elegância em cada detalhe",
    },
    {
      id: 6,
      image: model6,
      title: "Linha Luxo",
      description: "Estilo despojado com toque de elegância",
    },
    {
      id: 7,
      image: model7,
      title: "Linha Luxo",
      description: "Peças leves e confortáveis para o verão",
    },
    {
      id: 8,
      image: model8,
      title: "Linha Luxo",
      description: "Inspiração urbana para looks autênticos",
    },
    {
      id: 9,
      image: model9,
      title: "Linha Luxo",
      description: "As últimas tendências em moda jeans",
    },
    {
      id: 10,
      image: model10,
      title: "Linha Luxo",
      description: "Estilo moderno com sofisticação única",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section id="catalogo" className="py-20 bg-gradient-to-b from-background to-beige-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-black text-wine mb-4">
            Veja os Lançamentos da Semana
          </h2>
          <p className="text-lg text-wine/80 max-w-2xl mx-auto">
            Descubra as últimas tendências em moda jeans direto da nossa confecção em Goiânia
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product, index) => (
                <div key={product.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Product Image */}
                    <div className="relative group">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-[400px] md:h-[500px] object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-wine/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center space-y-6">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-wine mb-3">
                          {product.title}
                        </h3>
                        <p className="text-lg text-wine/80 mb-6">
                          {product.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-wine rounded-full"></span>
                          <span className="text-wine font-medium">Modelagem exclusiva</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-wine rounded-full"></span>
                          <span className="text-wine font-medium">Tecido premium</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-wine rounded-full"></span>
                          <span className="text-wine font-medium">Acabamento artesanal</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="bg-wine hover:bg-wine-dark text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg animate-pulse-wine"
                      >
                        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Quero para minha loja 👉
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-wine hover:bg-wine-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-wine hover:bg-wine-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-wine w-8' : 'bg-wine/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;