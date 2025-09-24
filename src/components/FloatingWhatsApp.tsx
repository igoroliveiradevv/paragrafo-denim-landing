import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappURL = "https://wa.me/556291962521?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações!";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-in">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse-wine"
        style={{
          animation: "pulse-wine 2s infinite"
        }}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 bg-white text-green-600 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-semibold">Fale conosco no WhatsApp!</span>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
        </div>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
      </a>
    </div>
  );
};

export default FloatingWhatsApp;