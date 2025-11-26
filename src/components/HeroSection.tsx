import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import heroBackground from "@/assets/hero-background.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import { ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(252, 251, 246, 0.95), rgba(196, 30, 58, 0.05)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="text-primary font-semibold text-sm">🎄 Oferta Especial Navideña</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight text-foreground">
              Impresiona esta Navidad con{" "}
              <span className="gradient-text">500 Recetas de Repostería Casera</span>{" "}
              que Cualquiera Puede Hacer
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              Desde galletas tradicionales hasta postres modernos en 10 minutos — todas probadas y garantizadas para conquistar paladares 🎄🍪
            </p>

            <div className="space-y-4 pt-4">
              <Button 
                onClick={scrollToOffer}
                size="lg"
                className="btn-festive btn-festive-pulse w-full sm:w-auto text-xl px-12 py-6 rounded-2xl"
              >
                ¡Quiero mis 500 recetas ahora!
              </Button>
              
              <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
                <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Acceso inmediato · Sin envíos · Garantía de 7 días
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-primary/20 mt-8">
              <p className="text-lg font-semibold text-foreground mb-4 text-center lg:text-left">
                ⏰ Descuento válido solo por:
              </p>
              <CountdownTimer />
              <p className="text-sm text-muted-foreground mt-4 text-center lg:text-left">
                🎁 Cupos limitados: solo 500 licencias disponibles por lanzamiento navideño
              </p>
            </div>
          </div>

          {/* Right Column - Mockup */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={ebookMockup} 
                alt="500 Recetas Navideñas - eBook Mockup" 
                className="relative z-10 w-full max-w-md lg:max-w-lg drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
