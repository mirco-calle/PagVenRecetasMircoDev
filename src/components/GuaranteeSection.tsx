import { Shield, Heart } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="card-festive bg-gradient-to-br from-accent/10 to-primary/5 border-2 border-accent/30 text-center space-y-8 animate-fade-in">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center shadow-festive">
              <Shield className="w-12 h-12 text-accent-foreground" />
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground">
              O Haces los Mejores Postres Navideños de Tu Vida...
            </h2>
            <p className="text-3xl font-bold text-accent">
              O No Pagas Nada.
            </p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-left">
            <p className="text-xl text-foreground leading-relaxed">
              Entiendo que esta decisión puede generar dudas. Por eso, quiero que pruebes el recetario <span className="font-bold text-accent">completamente libre de riesgo</span>.
            </p>

            <div className="bg-card rounded-xl p-6 border-l-4 border-accent">
              <p className="text-lg text-foreground leading-relaxed">
                Si después de <span className="font-bold">7 días</span> no estás feliz con tus resultados, 
                si no ves que cocinar es más fácil de lo que pensabas, 
                si tus postres no reciben elogios...
              </p>
              <p className="text-xl font-bold text-accent mt-4">
                Te devolvemos tu dinero. Sin preguntas. Sin complicaciones.
              </p>
            </div>

            <div className="flex items-start gap-4 bg-secondary/10 rounded-xl p-6">
              <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground font-semibold mb-2">
                  ¿Por qué ofrezco esta garantía?
                </p>
                <p className="text-muted-foreground">
                  Porque confío 100% en la calidad de estas recetas. Han sido probadas por miles de personas, desde principiantes absolutos hasta chefs profesionales. Sé que funcionan. Y quiero que tú también lo descubras sin ningún riesgo.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-accent/10 rounded-xl p-6 border border-accent/30">
            <p className="text-2xl font-bold text-foreground">
              El único riesgo es perderte esta oportunidad.
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              Cuando el contador llegue a cero, el precio volverá a $39.90 USD
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
