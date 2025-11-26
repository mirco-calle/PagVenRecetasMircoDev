import { Button } from "@/components/ui/button";
import { CountdownTimer } from "./CountdownTimer";
import { CheckCircle2, XCircle } from "lucide-react";

export const FinalCTASection = () => {
  const handleCheckout = () => {
    window.location.href = "https://go.hotmart.com/Y103100806T?ap=940e";
  };
  return (
    <section
      id="checkout-section"
      className="section-container bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
    >
      <div className="max-w-3xl mx-auto text-center space-y-12">
        <div className="animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
            Es Tu Momento de Decidir
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Este precio es parte del lanzamiento limitado de temporada.
          </p>
          <p className="text-2xl font-bold text-destructive">
            Cuando el contador llegue a cero, el libro volverá a $39.90 USD
          </p>
        </div>

        {/* Countdown */}
        <div
          className="card-festive bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <p className="text-2xl font-bold text-foreground mb-6">
            ⏰ Tu descuento expira en:
          </p>
          <CountdownTimer />
        </div>

        {/* CTA Buttons */}
        <div
          className="space-y-4 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          <Button
            size="lg"
            onClick={handleCheckout}
            className="btn-festive btn-festive-pulse w-full text-2xl py-8 rounded-2xl flex items-center justify-center gap-3"
          >
            <CheckCircle2 className="w-8 h-8" />
            Sí, quiero las 500 recetas ahora por $9.90
          </Button>

          <button className="w-full py-4 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2 text-sm">
            <XCircle className="w-4 h-4" />
            No gracias, prefiero quedarme sin ideas este año
          </button>
        </div>

        {/* Trust Badges */}
        <div
          className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Pago 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Acceso Inmediato</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Garantía 7 Días</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span>Licencia de por Vida</span>
          </div>
        </div>

        {/* Final Scarcity */}
        <div
          className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <p className="text-lg font-bold text-destructive mb-2">
            ⚠️ ÚLTIMAS UNIDADES DISPONIBLES
          </p>
          <p className="text-muted-foreground">
            Solo quedan{" "}
            <span className="font-bold text-foreground">147 licencias</span> del
            cupo limitado de 500
          </p>
        </div>
      </div>
    </section>
  );
};
