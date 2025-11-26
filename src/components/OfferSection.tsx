import { Button } from "@/components/ui/button";
import ebookMockup from "../assets/ebook-mockup.png";
import { Smartphone, Tablet, Monitor, Download } from "lucide-react";

export const OfferSection = () => {
  const scrollToCheckout = () => {
    document
      .getElementById("checkout-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="offer-section"
      className="section-container bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
            Tu Recetario Navideño en Todos Tus Dispositivos
          </h2>
          <p className="text-xl text-muted-foreground">
            Acceso instantáneo desde cualquier lugar, cualquier momento
          </p>
        </div>

        {/* Device Icons */}
        <div
          className="flex justify-center gap-8 mb-12 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-card">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Móvil
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-card">
              <Tablet className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              Tablet
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center shadow-card">
              <Monitor className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold text-muted-foreground">
              PC
            </span>
          </div>
        </div>

        {/* Pricing Card */}
        <div
          className="card-festive max-w-2xl mx-auto text-center space-y-8 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex justify-center">
            <img
              src={ebookMockup}
              alt="eBook en múltiples dispositivos"
              className="w-48 h-auto drop-shadow-xl"
            />
          </div>

          <div className="space-y-4">
            <div className="inline-block bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2">
              <span className="text-destructive font-bold text-sm line-through">
                Precio normal: $39.90 USD
              </span>
            </div>

            <div className="space-y-2">
              <p className="text-2xl font-semibold text-foreground">
                HOY solo:
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-6xl font-display font-bold text-primary">
                  $9.90
                </span>
                <span className="text-2xl text-muted-foreground">USD</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-accent">
              <Download className="w-5 h-5" />
              <span className="font-semibold">
                Acceso inmediato · Sin envíos · Sin demoras
              </span>
            </div>
          </div>

          <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              🎁 Ahorro de $30 USD (75% de descuento)
            </p>
            <p className="text-muted-foreground">
              Esta oferta especial de lanzamiento navideño expira en 24 horas
            </p>
          </div>

          <Button
            onClick={scrollToCheckout}
            size="lg"
            className="btn-festive btn-festive-pulse w-full text-2xl py-8 rounded-2xl"
          >
            ¡Sí, quiero acceso inmediato!
          </Button>

          <p className="text-sm text-muted-foreground">
            🔒 Pago 100% seguro · Garantía de devolución de 7 días
          </p>
        </div>
      </div>
    </section>
  );
};
