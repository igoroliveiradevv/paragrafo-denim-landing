import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import AboutSection from "@/components/AboutSection";
import VideoSection from "@/components/VideoSection";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Product Carousel */}
      <ProductCarousel />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Video Section */}
      <VideoSection />
      
      {/* Social Proof */}
      <SocialProof />
      
      {/* Final CTA */}
      <FinalCTA />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;