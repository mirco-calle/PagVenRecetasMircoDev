import { Gift, FileText, Users, CheckCircle2 } from "lucide-react";

const bonuses = [
  {
    icon: FileText,
    title: "84 Recetas Navideñas Adicionales",
    description:
      "Lista completa de ingredientes organizados por categoría. Nunca más olvides nada en el supermercado.",
    value: "$12 USD",
  },
  {
    icon: CheckCircle2,
    title: "Guia de Libro de Actividades Navideñas para Niños",
    description:
      "Opciones sin gluten, sin azúcar, veganas y para alergias. Adaptable a cualquier necesidad dietética.",
    value: "$15 USD",
  },
  {
    icon: Users,
    title: "Acceso Exclusivo a nuestra Comunidad de WhatsApp",
    description:
      "Comunidad exclusiva de reposteros navideños. Comparte tips, fotos y recibe apoyo instantáneo.",
    value: "$40 USD",
  },
];

export const BonusesSection = () => {
  return (
    <section className="section-container bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-6 py-3 mb-6">
            <Gift className="w-6 h-6 text-secondary" />
            <span className="font-bold text-secondary text-lg">
              BONOS EXCLUSIVOS INCLUIDOS
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Pero Espera... ¡Hay Más!
          </h2>
          <p className="text-xl text-muted-foreground">
            Bonos de regalo que multiplican el valor de tu inversión
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="card-festive flex items-start gap-6 animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center flex-shrink-0 shadow-gold">
                <bonus.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    {bonus.title}
                  </h3>
                  <span className="text-lg font-bold text-secondary whitespace-nowrap">
                    Valor: {bonus.value}
                  </span>
                </div>
                <p className="text-muted-foreground">{bonus.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Value Stack */}
        <div className="card-festive bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 text-center space-y-6 animate-fade-in">
          <h3 className="text-3xl font-display font-bold text-foreground">
            Valor Total del Paquete Completo:
          </h3>

          <div className="space-y-2">
            <div className="flex items-center justify-between max-w-md mx-auto text-lg">
              <span className="text-muted-foreground">
                eBook "500 Recetas Navideñas"
              </span>
              <span className="font-semibold text-foreground">$39.90</span>
            </div>
            <div className="flex items-center justify-between max-w-md mx-auto text-lg">
              <span className="text-muted-foreground">
                Bono #1: 84 Recetas Navideñas Adicionales
              </span>
              <span className="font-semibold text-foreground">$12.00</span>
            </div>
            <div className="flex items-center justify-between max-w-md mx-auto text-lg">
              <span className="text-muted-foreground">
                Bono #2: Guia de Libro de Actividades Navideñas para Niños
              </span>
              <span className="font-semibold text-foreground">$15.00</span>
            </div>
            <div className="flex items-center justify-between max-w-md mx-auto text-lg">
              <span className="text-muted-foreground">
                Bono #3: Acceso Exclusivo a nuestra Comunidad de WhatsApp
              </span>
              <span className="font-semibold text-foreground">$40.00</span>
            </div>

            <div className="border-t-2 border-primary/20 pt-4 mt-4">
              <div className="flex items-center justify-between max-w-md mx-auto">
                <span className="text-xl font-bold text-foreground">
                  VALOR TOTAL:
                </span>
                <span className="text-3xl font-display font-bold text-destructive line-through">
                  $106.90
                </span>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-center">
            <p className="text-2xl font-semibold text-primary-foreground mb-2">
              TU PRECIO HOY:
            </p>
            <p className="text-6xl font-display font-bold text-primary-foreground">
              $9.90
            </p>
            <p className="text-xl text-primary-foreground/90 mt-4">
              ¡Ahorras <span className="font-bold">$97 USD</span> (91% de
              descuento)!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
